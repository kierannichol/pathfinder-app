package pathfinder.scraper.remote.d20pfsrd;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.ArchetypeModification;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;
import pathfinder.parser.NameToIdConverter;
import pathfinder.util.NameUtils;
import pathfinder.util.StringUtils;

@Component
@Slf4j
@RequiredArgsConstructor
public class D20pdsrdArchetypePageScraper extends AbstractD20pfsrdScraper {

    public Archetype scrape(Id classId, URL url) throws IOException {
        Document document = fetch(url);
        Element main = contentElement(document);

        String name = NameUtils.sanitize(selectText(main, "h1"));
        String description = selectText(main, ".description");
        Source source = Optional.ofNullable(scrapeSourceFromCopyrightSection(document)).orElse(Sources.CORE);

        String classTag = classId.key;
        String archetypeTag = classTag + "_" + NameToIdConverter.partialId(name);

        List<ArchetypeModification> modifications = new ArrayList<>();
        List<Feature> features = new ArrayList<>();

        Elements titles = main.select("h4");
        titles.forEach(titleElement -> {
            String sectionName = StringUtils.sanitize(titleElement.text());
            Elements elements = findElementsBetween(titleElement, this::elementIsEndOfSection);

            List<String> descriptionParts = new ArrayList<>();
            for (int i = 0; i < elements.size() - 1; i++) {
                descriptionParts.add(StringUtils.sanitize(elements.get(i).text()));
            }
            String sectionDescription = String.join("\n", descriptionParts);

            if (elements.size() == 0) {
                log.warn("[" + classId + "] Did not find any contentText under section: " + sectionName);
                return;
            }

            List<String> abilitiesToReplace = scrapeReplacesAbilityNames(elements);
            if (abilitiesToReplace.size() == 0) {
                log.warn("[" + classId + "] Did not find any abilities to be replaced for: " + sectionName);
                return;
            }
            String abilityNameToReplace = abilitiesToReplace.get(0);
            Id abilityIdToReplace = NameToIdConverter.abilityId(abilityNameToReplace).withOption(classTag);

            Optional<Feature> maybeAbility = sectionToAbility(new Block(sectionName, sectionDescription, elements), source, archetypeTag);

            maybeAbility.ifPresent(ability -> {
                features.add(ability);
                modifications.add(new ArchetypeModification(
                        ability.id(),
                        abilityIdToReplace));
            });
        });

        Id id = classId.withOption(NameToIdConverter.partialId(name).string());

        return new Archetype(id,
                name,
                Description.create(description),
                modifications,
                features,
                source.code());
    }

    private Optional<Feature> sectionToAbility(Block section, Source source, String archetypeTag) {
        String name = NameUtils.fixNameOrder(NameUtils.sanitize(section.titleText()));
        Id id = NameToIdConverter.abilityId(name).withOption(archetypeTag);

        return Optional.of(Feature.builder()
                        .id(id)
                        .name(name)
                        .description(Description.create(section.contentText()))
                        .source(source.code())
                .build());
    }

    private List<String> scrapeReplacesAbilityNames(Elements elements) {
        Pattern replacesPattern = Pattern.compile("This (?:\\w+ )?(?:replaces|modifies|alters) (.*?)\\.");
        Matcher matcher = replacesPattern.matcher(elements.text());
        if (!matcher.find()) {
            log.warn("Did not find any replaces abilities in " + elements.text());
            return List.of();
        }

        return List.of(StringUtils.sanitize(matcher.group(1)));
    }
}
