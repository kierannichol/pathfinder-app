package pathfinder.scraper;

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
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.SourceDatabase;
import pathfinder.generator.model.CharacterClass;
import pathfinder.generator.model.CharacterClass.Level;
import pathfinder.generator.model.CharacterClass.Type;
import pathfinder.generator.model.Special;
import pathfinder.parser.NameToIdConverter;
import pathfinder.util.NameUtils;

@Service("d20pfsrd Class Scraper")
@Slf4j
public class D20pfsrdClassScraper extends AbstractD20pfsrdScraper<List<CharacterClass>> implements SourceDatabase<CharacterClass> {
    private static final Pattern BAB_PATTERN = Pattern.compile("^\\+(\\d+).*$");
    private static final Pattern SPELLS_PER_DAY_PATTERN = Pattern.compile("^([-+]?\\d+).*$");

    @Override
    public List<CharacterClass> scrape() throws IOException {
        List<CharacterClass> classes = new ArrayList<>();
        classes.addAll(scrapeType(Type.CORE, new URL("https://www.d20pfsrd.com/classes/core-classes/")));
        classes.addAll(scrapeType(Type.BASE, new URL("https://www.d20pfsrd.com/classes/base-classes/")));
        classes.addAll(scrapeType(Type.HYBRID, new URL("https://www.d20pfsrd.com/classes/hybrid-classes/")));
        classes.addAll(scrapeType(Type.UNCHAINED, new URL("https://www.d20pfsrd.com/classes/unchained-classes/")));
        return classes;
    }

    @Override
    public Stream<CharacterClass> stream() throws IOException {
        return scrape().stream();
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
        Map<String, Special> specialMap = scrapeSpecialsDefinitions(document);
        List<Level> levels = parseLevels(document, specialMap);

        String shortDescription = scrapeShortDescription(document);

        return new CharacterClass(id, name, shortDescription, type, levels);
    }

    private String scrapeShortDescription(Document document) {
        Element roleHeaderElement = document.getElementsContainingOwnText("Role").first();
        Element roleTextElement = roleHeaderElement.parent();
        return roleTextElement.text().replaceAll("^Role:\\s+", "");
    }

    private Map<String, Special> scrapeSpecialsDefinitions(Document document) {
        Map<String, Special> classFeatureMap = new HashMap<>();



//        Element tocHeading = document.select(".toc_list a[href=\"#Class_Features\"]").first();
//        Element featureList = tocHeading.nextElementSibling();
//
//        for (Element featureHeading : featureList.select("li")) {
//            String href = featureHeading.select("a").first().attr("href");
//            if (!href.startsWith("#")) {
//                continue;
//            }
//            Element section = document.select(href).first();
//
//            StringBuilder descriptionBuilder = new StringBuilder();
//            Element next = section.parent().nextElementSibling();
//            while (next != null && next.is("p")) {
//                descriptionBuilder.append(next.text());
//                next = next.nextElementSibling();
//            }
//
//            String name = featureHeading.text();
//            name = name.replaceAll(" \\((Sp|Su|Ex)\\)", "");
//            name = NameUtils.fixNameOrder(name);
//            String id = NameToIdConverter.abilityId(name);
//            Special special = new Special(id, name, descriptionBuilder.toString());
//
//            classFeatureMap.put(id, special);
//            if (id.endsWith("s")) {
//                name = name.substring(0, name.length() - 1);
//                id = id.substring(0, id.length() - 1);
//                classFeatureMap.put(id, new Special(id, name, descriptionBuilder.toString()));
//            }
//        }

        return classFeatureMap;
    }

    private String parseClassName(Document document) {
        return document.select("#article-content>h1").first().text();
    }

    private List<Level> parseLevels(Document document, Map<String, Special> specialMap) {
        var table = document.select("#article-content table[border=1]").first();
        var rows = table.select("tbody tr");

        return rows.stream()
                .map(row -> parseLevelRow(row, specialMap))
                .filter(Objects::nonNull)
                .toList();
    }

    private Level parseLevelRow(Element element, Map<String, Special> specialMap) {
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
                .map(el -> parseSpecial(el, specialMap))
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

    private Special parseSpecial(Element element, Map<String, Special> specialMap) {
//        String name = element.text();
        String specialLabel = element.text();
        String id = NameToIdConverter.abilityId(specialLabel);

        Document document = element.ownerDocument();
        String href = element.attr("href");
        if (!href.startsWith("#")) {
            return null;
        }
        String linkName = href.substring(1);
        Element linkElement = document.select("a[name=\"%s\"]".formatted(linkName)).first();
        StringBuilder descriptionBuilder = new StringBuilder();
        if (linkElement == null) {
            linkElement = document.select("a[name=\"%s\"]".formatted(linkName.substring(0, linkName.length() - 1))).first();
        }
        if (linkElement != null) {
            Element section = linkElement.parent();
            Element next = section.parent().nextElementSibling();
            while (next != null && next.is("p")) {
                descriptionBuilder.append(next.text());
                next = next.nextElementSibling();
            }
        } else {
            linkElement = document.getElementById(linkName);
            if (linkElement == null) {
                linkElement = document.getElementById(linkName.substring(0, linkName.length() - 1));
                if (linkElement == null) {
                    return null;
                }
            }
            descriptionBuilder.append(linkElement.parent().text());
        }

        String name = linkElement.parent().text();
        name = name.replaceAll(" \\((Sp|Su|Ex)\\)", "");
        name = NameUtils.fixNameOrder(name);
//        String id = NameToIdConverter.abilityId(name);

        return new Special(id, name, descriptionBuilder.toString());

//        Special special = specialMap.get(id);
//        if (special == null) {
//            throw new IllegalArgumentException("No special definition found for " + id + " in " + specialMap.keySet());
//        }
//        return special;
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
}
