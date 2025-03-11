package pathfinder.scraper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchClientAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import pathfinder.db.LocalPathfinderDatabaseLoader;
import pathfinder.db.PathfinderDatabase;
import pathfinder.model.AttributeType;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.ClericDomain;
import pathfinder.model.pathfinder.ClericDomain.DomainSpell;
import pathfinder.model.pathfinder.Feature;
import pathfinder.util.NameToIdConverter;
import pathfinder.util.NameUtils;
import pathfinder.util.NameUtils.NameAndParentheses;
import pathfinder.util.StringUtils;

@SpringBootApplication(scanBasePackages = {
        "pathfinder.app.config"
}, exclude = ElasticsearchClientAutoConfiguration.class)
@Slf4j
public class ClericDomainScraper extends D20pfsrdBaseScraper {

    @Override
    public void scrape() throws IOException {
        Document document = this.fetch(
                "https://www.d20pfsrd.com/classes/core-classes/cleric/domains/paizo-domains/");

        var domainLinkElements = document.select("ul.ogn-childpages > li > a");
        for (var domainLinkElement : domainLinkElements) {
            var domain = scrapeDomain(domainLinkElement.attr("href"));
            save("cleric_domain/" + domain.id().key + ".yml", domain);

            var subdomainLinkElements = domainLinkElement.parent().select("ul > li > a");
            for (var subdomainLinkElement : subdomainLinkElements) {
                var subdomain = scrapeSubDomain(domain, subdomainLinkElement.attr("href"));
                save("cleric_domain/" + subdomain.id().key + "_" + subdomain.id().option + ".yml", subdomain);
            }
        }
    }

    private ClericDomain scrapeSubDomain(ClericDomain  parent, String url) throws IOException {
        Document document = this.fetch(url);

        String name = tryRead(document, "#article-content > h1").orElseThrow();
        Id id = parent.id().withOption(NameToIdConverter.partialId(name).key);
        String description = parent.description();
        List<Feature> grantedPowers = new ArrayList<>(parent.granted_powers());
        List<DomainSpell> domainSpells = new ArrayList<>(parent.domain_spells());

        var replacementPowerElement = document.select("#article-content > p:contains(Replacement Power)");
        replacementPowerElement.select("a").forEach(element -> {
            String powerNameToReplace = element.text().toLowerCase();
            if (powerNameToReplace.endsWith(" power")) {
                powerNameToReplace = powerNameToReplace.substring(0, powerNameToReplace.length() - " power".length());
            }
            log.info(powerNameToReplace);
            var finalPowerNameToReplace = powerNameToReplace;
            grantedPowers.removeIf(power -> power.name().toLowerCase().contains(finalPowerNameToReplace));
        });

        for (var grantedPowerElement : document.select("#article-content > p:contains(Replacement Power) + p[style*=\"margin-left:40px\"]")) {
            String[] parts = grantedPowerElement.text().split(": ", 2);
            NameAndParentheses featureNameAndType = NameUtils.nameAndParentheses(parts[0]);
            String featureDescription = parts.length > 1 ? parts[1] : "";

            Feature.FeatureBuilder feature = Feature.builder()
                    .id(NameToIdConverter.generateId(AttributeType.ABILITY, featureNameAndType.name()))
                    .name(featureNameAndType.name())
                    .description(featureDescription);

            featureNameAndType.firstParentheses().ifPresent(feature::type);

            grantedPowers.add(feature.build());
        }

        var domainSpellsElement = document.select("#article-content p:has(b:contains(Replacement Domain Spells))");
        if (!domainSpellsElement.isEmpty()) {
            String domainSpellsText = domainSpellsElement.text().substring("Replacement Domain Spells: ".length());
            String replacement = domainSpellsText;
            do {
                domainSpellsText = replacement;
                replacement = domainSpellsText.replaceAll("(.*?)\\(([^)]+?), ([^)]+?)\\)", "$1($2|$3)");
            } while (!domainSpellsText.equals(replacement));

            String[] domainSpellTextList = domainSpellsText.split(", ");
            for (String domainSpellText : domainSpellTextList) {
                String[] domainSpellTextParts = domainSpellText.split("—");
                String domainSpellLevel = domainSpellTextParts[0];
                String domainSpellName = domainSpellTextParts[1].replace("|", ", ");
                if (domainSpellName.endsWith(".")) {
                    domainSpellName = domainSpellName.substring(0, domainSpellName.length() - 1);
                }

                String justSpellName = NameUtils.nameAndParentheses(domainSpellName).name();

                domainSpells.removeIf(spell -> spell.spell_level() == StringUtils.parseLevel(domainSpellLevel));
                domainSpells.add(new DomainSpell(
                        StringUtils.parseLevel(domainSpellLevel),
                        NameToIdConverter.generateId(AttributeType.SPELL, justSpellName)));
            }
        }

        domainSpells.sort(Comparator.comparing(DomainSpell::spell_level));

        return new ClericDomain(id, parent.id(), name + " Subdomain", description, grantedPowers, domainSpells, scrapeSource(document));
    }

    private ClericDomain scrapeDomain(String url) throws IOException {
        Document document = this.fetch(url);

        String name = tryRead(document, "#article-content > h1").orElseThrow();
        Id id = NameToIdConverter.generateId(AttributeType.CLERIC_DOMAIN, name);
        String description = tryRead(document, "#article-content > p.description").orElse("");
        List<Feature> grantedPowers = new ArrayList<>();
        List<DomainSpell> domainSpells = new ArrayList<>();

        Element grantedPowersSectionElement = document.selectFirst(
                "#article-content > p:contains(Granted Powers) + div");

        if (grantedPowersSectionElement == null) {
            throw new IllegalArgumentException("No powers section found");
        }

        Map<String, String> powers = isHeaderStylePowers(grantedPowersSectionElement)
                ? parseHeaderStylePowers(grantedPowersSectionElement)
                : parseListStylePowers(grantedPowersSectionElement);

        powers.forEach((featureName, featureDescription) -> {
            NameAndParentheses featureNameAndType = NameUtils.nameAndParentheses(featureName);

            Feature.FeatureBuilder feature = Feature.builder()
                    .id(NameToIdConverter.generateId(AttributeType.ABILITY, featureNameAndType.name()))
                    .name(featureNameAndType.name())
                    .description(featureDescription);

            featureNameAndType.firstParentheses().ifPresent(feature::type);

            grantedPowers.add(feature.build());
        });

        var domainSpellsElement = document.select("#article-content p:has(b:contains(Domain Spells))");
        if (!domainSpellsElement.isEmpty()) {
            String domainSpellsText = domainSpellsElement.text().substring("Domain Spells: ".length());
            String replacement = domainSpellsText;
            do {
                domainSpellsText = replacement;
                replacement = domainSpellsText.replaceAll("(.*?)\\(([^)]+?), ([^)]+?)\\)", "$1($2|$3)");
            } while (!domainSpellsText.equals(replacement));

            String[] domainSpellTextList = domainSpellsText.split(", ");
            for (String domainSpellText : domainSpellTextList) {
                String[] domainSpellTextParts = domainSpellText.split("—");
                String domainSpellLevel = domainSpellTextParts[0];
                String domainSpellName = domainSpellTextParts[1].replace("|", ", ");
                if (domainSpellName.endsWith(".")) {
                    domainSpellName = domainSpellName.substring(0, domainSpellName.length() - 1);
                }

                String justSpellName = NameUtils.nameAndParentheses(domainSpellName).name();

                domainSpells.add(new DomainSpell(
                        StringUtils.parseLevel(domainSpellLevel),
                        NameToIdConverter.generateId(AttributeType.SPELL, justSpellName)));
            }
        }

        return new ClericDomain(id, null, name, description, grantedPowers, domainSpells, scrapeSource(document));
    }

    private boolean isHeaderStylePowers(Element section) {
        return !section.select("> h4").isEmpty();
    }

    private Map<String, String> parseHeaderStylePowers(Element section) {
        Map<String, String> powers = new HashMap<>();
        Elements headerElements = section.select("> h4");
        for (Element headerElement : headerElements) {
            String name = headerElement.text();
            Element descriptionElement = headerElement.selectFirst("+ p");
            if (descriptionElement == null) {
                throw new IllegalArgumentException("Header without following paragraph");
            }
            String description = descriptionElement.text();
            powers.put(name, description);
        }
        return powers;
    }

    private Map<String, String> parseListStylePowers(Element section) {
        Map<String, String> powers = new HashMap<>();
        Elements powerElements = section.select("> p");
        for (Element powerElement : powerElements) {
            String[] parts = powerElement.text().split(": ", 2);
            String name = parts[0];
            if (parts.length == 1) {
                throw new IllegalArgumentException("Power without description");
            }
            String description = parts[1];

            powers.put(name, description);
        }
        return powers;
    }

    private String scrapeSource(Document document) {
        var copywriteSectionElement = document.selectFirst(".section15");
        if (copywriteSectionElement == null) {
            throw new IllegalArgumentException("No copyright section found");
        }

        var sourceLinkElement = copywriteSectionElement.selectFirst("a");
        if (sourceLinkElement == null) {
            sourceLinkElement = copywriteSectionElement.parent().selectFirst("a");
            if (sourceLinkElement == null) {
                throw new IllegalArgumentException("No source link element found");
            }
        }

        return sourceLinkElement.text().replace('’', '\'');
    }

    private Optional<String> tryRead(Element parent, String cssSelector) {
        Element element = parent.select(cssSelector).first();
        if (element == null) {
            return Optional.empty();
        }
        return Optional.of(element.text());
    }

    public static void main(String[] args) {
        SpringApplication.run(ClericDomainScraper.class, args);
    }

    @Bean
    PathfinderDatabase pathfinderDatabase() {
        return new LocalPathfinderDatabaseLoader().load();
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            log.info("Scraping Cleric Domain data...");
            ctx.getBean(getClass()).scrape();
            System.exit(0);
        };
    }
}
