package pathfinder.source.scraper.d20pfsrd;

import static java.lang.Integer.parseInt;
import static logic.util.Ordinal.parseOrdinal;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.nodes.TextNode;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.model.Ability;
import pathfinder.model.CharacterClass;
import pathfinder.model.CharacterClass.Level;
import pathfinder.model.CharacterClass.Type;
import pathfinder.model.ClassSkill;
import pathfinder.model.Id;
import pathfinder.model.Source;
import pathfinder.model.Special;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.AbilitySourceDatabase;
import pathfinder.source.ClassSourceDatabase;
import pathfinder.spring.FileCached;
import pathfinder.util.NameUtils;
import pathfinder.util.StringUtils;

@Service("d20pfsrd Class Scraper")
@Slf4j
@FileCached
public class D20pfsrdClassScraper extends AbstractD20pfsrdScraper
        implements ClassSourceDatabase, AbilitySourceDatabase {
    private static final Pattern BAB_PATTERN = Pattern.compile("^\\+(\\d+).*$");
    private static final Pattern SPELLS_PER_DAY_PATTERN = Pattern.compile("^([-+]?\\d+).*$");

    private final List<CharacterClass> cached = new ArrayList<>();

    public List<CharacterClass> scrape() throws IOException {
        if (cached.isEmpty()) {
            cached.addAll(scrapeType(Type.CORE, new URL("https://www.d20pfsrd.com/classes/core-classes/")));
            cached.addAll(scrapeType(Type.BASE, new URL("https://www.d20pfsrd.com/classes/base-classes/")));
            cached.addAll(scrapeType(Type.HYBRID, new URL("https://www.d20pfsrd.com/classes/hybrid-classes/")));
            cached.addAll(scrapeType(Type.UNCHAINED, new URL("https://www.d20pfsrd.com/classes/unchained-classes/")));
        }
        return cached;
    }

    @Override
    public Stream<CharacterClass> streamClasses() throws IOException {
        return scrape().stream();
    }

    @Override
    public Stream<Ability> streamAbilities() throws IOException {
        return scrape().stream().flatMap(CharacterClass::abilities);
    }

    private List<CharacterClass> scrapeType(Type type, URL url) throws IOException {
        Document document = fetch(url);

        Elements classLinks = document.select(".ogn-childpages>li>a");

        return classLinks.stream()
                .map(link -> link.attr("href"))
                .map(href -> {
                    try {
                        return scrapeCharacterClass(type, new URL(href));
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                })
                .toList();
    }

    private CharacterClass scrapeCharacterClass(Type type, URL url) throws IOException {
        Document document = fetch(url);

        String name = parseClassName(document);
        log.info("Scraping Class: " + name);
        String id = NameToIdConverter.classId(name);
        List<Level> levels = parseLevels(document, Id.parse(id));

        List<ClassSkill> classSkills = parseClassSkills(document);
        String shortDescription = scrapeShortDescription(document);
        Source source = scrapeSourceFromCopyrightSection(document);

        return new CharacterClass(id, name, shortDescription, type, levels, classSkills, source);
    }

    private String scrapeShortDescription(Document document) {
        Element roleHeaderElement = document.getElementsContainingOwnText("Role").first();
        Element roleTextElement = roleHeaderElement.parent();
        return roleTextElement.text().replaceAll("^Role:\\s+", "");
    }

    private String parseClassName(Document document) {
        return document.select("#article-content>h1").first().text();
    }

    private List<Level> parseLevels(Document document, Id classId) {
        var table = document.select("#article-content table[border=1]").first();
        var rows = table.select("tbody tr");

        return rows.stream()
                .map(row -> parseLevelRow(row, classId))
                .filter(Objects::nonNull)
                .toList();
    }

    private Level parseLevelRow(Element element, Id classId) {
        var columns = element.select("td");
        if (columns.size() < 5) {
            return null;
        }

        int level = parseOrdinal(columns.get(0).text());
        int bab = parseBab(columns.get(1).text());
        int fortSave = parseInt(columns.get(2).text());
        int refSave = parseInt(columns.get(3).text());
        int willSave = parseInt(columns.get(4).text());

        int specialsColumnIndex = 5;
        // Extra number column sometimes (TODO: should parse this)
        if (columns.get(specialsColumnIndex).attr("class").equals("number")) {
            specialsColumnIndex++;
        }
        Elements specialLinks = columns.get(specialsColumnIndex).select("a");
        List<Special> specials = specialLinks.stream()
                .map(el -> parseSpecial(el, classId))
                .filter(Objects::nonNull)
                .toList();

        Map<Integer, Integer> spellsPerDay = new HashMap<>();
        for (int i = specialsColumnIndex + 1; i < columns.size(); i++) {
            String spellsPerDayText = columns.get(i).text();
            if ("—".equals(spellsPerDayText)) {
                continue;
            }

            spellsPerDay.put(i - specialsColumnIndex, parseSpellsPerDay(spellsPerDayText));
        }

        return new Level(
                level,
                bab,
                fortSave,
                refSave,
                willSave,
                specials,
                spellsPerDay
        );
    }

    private Special parseSpecial(Element element, Id classId) {
//        String name = element.text();
        String specialLabel = element.text();
        specialLabel = NameUtils.sanitize(specialLabel);
        String id = NameToIdConverter.abilityId(specialLabel);
        id = id + "#" + classId.key;

        StringBuilder descriptionBuilder = new StringBuilder();

        Document document = element.ownerDocument();
        Element linkTarget = findLinkAnchor(element);
        if (linkTarget == null) {
            return null;
        }

        Element headerElement = linkTarget.parent();
        if (headerElement.is("span")) {
            headerElement = headerElement.parent();
        }

        Element nameElement = headerElement;

        if (headerElement.is("h4")) {
            Element nextSibling = headerElement.nextElementSibling();
            while (nextSibling != null && nextSibling.is("p")) {
                descriptionBuilder.append(nextSibling.text());
                nextSibling = nextSibling.nextElementSibling();
            }
        }
        else if (headerElement.is("p")) {
            nameElement = headerElement.selectFirst("b");
            if (nameElement != null) {
                Node nextSibling = nameElement.nextSibling();
                if (nextSibling instanceof TextNode textSibling) {
                    descriptionBuilder.append(textSibling.text());
                }
            } else if (linkTarget.nextElementSibling() != null && linkTarget.nextElementSibling().is("a")) {
                nameElement = linkTarget.nextElementSibling();
                Node sibling = linkTarget;
                while (sibling != null && sibling.previousSibling() != null && !(sibling.previousSibling() instanceof Element siblingElement && siblingElement.is("br"))) {
                    sibling = sibling.previousSibling();
                }
                while (sibling != null && !(sibling instanceof Element siblingElement && siblingElement.is("br"))) {
                    if (sibling instanceof TextNode textSibling) {
                        descriptionBuilder.append(textSibling.text());
                    }
                    else if (sibling instanceof Element siblingElement) {
                        descriptionBuilder.append(siblingElement.text());
                    }
                    sibling = sibling.nextSibling();
                }
            }
        }

        String sectionName = StringUtils.sanitize(nameElement.text());
        Ability.Type type = Ability.Type.fromAbilityName(sectionName);

//        String name = nameElement.text();
        String name = specialLabel;
        name = NameUtils.sanitize(name);
        name = name.replaceAll(" \\((Sp|Su|Ex)\\)", "");
        name = NameUtils.fixNameOrder(name);
//        String id = NameToIdConverter.abilityId(name);

        name = StringUtils.toCamelCase(name);

        String description = descriptionBuilder.toString().trim()
                .replaceAll("^:", "")
                .replace("[See FAQ]", "")
                .trim();
        description = StringUtils.sanitize(description);

        return new Special(id, name, type, description);
    }

    private int parseBab(String str) {
        Matcher matcher = BAB_PATTERN.matcher(str);
        if (!matcher.find()) {
            throw new IllegalArgumentException("Not a valid BAB: " + str);
        }
        return parseInt(matcher.group(1));
    }

    private int parseSpellsPerDay(String str) {
        Matcher matcher = SPELLS_PER_DAY_PATTERN.matcher(str.replace("–", "-"));
        if (!matcher.find()) {
            throw new IllegalArgumentException("Not a valid spells per day: " + str);
        }
        return parseInt(matcher.group(1));
    }

    private List<ClassSkill> parseClassSkills(Document document) {
        Element headerText = document.getElementById("Class_Skills");
        if (headerText == null) {
            headerText = document.getElementById("Class_skills");
        }
        Element header = headerText.parent();
        Element skillsParagraph = header.nextElementSibling();
        return skillsParagraph.select("a")
                .stream().filter(link -> link.attr("href").startsWith("https://www.d20pfsrd.com/skills/"))
                .map(Element::text)
                .map(NameToIdConverter::skillId)
                .map(ClassSkill::new)
                .toList();
    }
}
