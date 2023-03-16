package pathfinder.scraper.remote.nethys;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.Spell;
import pathfinder.model.pathfinder.Spell.Level;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.local.ClassSourceDatabase;
import pathfinder.util.NameUtils;

@Component("Nethys Spells Scraper")
@Slf4j
@Primary
@RequiredArgsConstructor
public class NethysSpellsScraper extends AbstractNethysScraper {
    private static final Pattern SPELL_LEVEL_LINE_PATTERN = Pattern.compile("^(.*)( *\\((.*)\\))?$");
    private static final Pattern SPELL_LEVEL_PATTERN = Pattern.compile("^(.*) (\\d+)$");
    private final ClassSourceDatabase classSourceDatabase;

    public Stream<Spell> streamSpells() {
        try {
            Element output = search("*", SearchTarget.SPELLS);

            return output.select("a").stream()
                    .parallel()
                    .flatMap(a -> {
                        try {
                            log.info("Scraping Spell: " + a.text());
                            return scrapeSpells(a.text(), a.attr("href"));
                        } catch (IOException e) {
                            throw new UncheckedIOException(e);
                        }
                    });
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private Stream<Spell> scrapeSpells(String targetName, String href) throws IOException {
        Document document = fetch(new URL("https://www.aonprd.com/" + href.replace(" ", "+")));

        Element table = document.selectFirst("table");
        if (table == null) {
            throw new IllegalStateException("Document missing <table> element");
        }

        Elements titleElements = findElementsWithExactText(
                document.select("h1.title"),
                targetName);

        if (titleElements.size() == 0) {
            log.warn("No title elements not found for " + targetName + " in: " + href);
            return Stream.empty();
        }

        List<Spell> foundSpells = new ArrayList<>();
        for (Element titleElement : titleElements) {
            Elements remaining = findElementsBetween(titleElement, element -> element.is("h1.title"));

            String name = NameUtils.sanitize(titleElement.text());
            name = NameUtils.fixNameOrder(name);
            Id id = NameToIdConverter.generateId(AttributeType.SPELL, name);

            String source = findLinedContent(remaining, "Source");
            source = formatSourceText(source);

            String school = findLinedContent(remaining, "School");
            String castingTime = findLinedContent(remaining, "Casting Time");
            String levelText = findLinedContent(remaining, "Level");
            String components = findLinedContent(remaining, "Components");
            String range = findLinedContent(remaining, "Range");
            String target = findLinedContent(remaining, "Target");
            String duration = findLinedContent(remaining, "Duration");
            String savingThrow = findLinedContent(remaining, "Saving Throw");
            String spellResistance = findLinedContent(remaining, "Spell Resistance");

            String effectText = findFrameContent(remaining, "Effect");
            String descriptionText = findFrameContent(remaining, "Description");

            String prerequisites = "";

            Matcher levelLineMatcher = SPELL_LEVEL_LINE_PATTERN.matcher(levelText);
            if (levelLineMatcher.find()) {
                levelText = levelLineMatcher.group(1);
                prerequisites = levelLineMatcher.group(2);
                if (prerequisites == null) {
                    prerequisites = "";
                }
            }
//        List<String> levelTextParts = NameUtils.extractNameAndParentheses(levelText);
//        levelText = levelTextParts.get(0);
//        if (levelTextParts.size() > 1) {
//            prerequisites = levelTextParts.get(1).trim();
//            prerequisites = prerequisites.substring(1, prerequisites.length()-1);
//        }

            List<Level> level = Arrays.stream(levelText.split(","))
                    .map(String::trim)
                    .flatMap(text -> {
                        try {
                            Matcher matcher = SPELL_LEVEL_PATTERN.matcher(text);
                            if (!matcher.find()) {
                                log.warn("Failed to parse \"" + targetName + "\" spell level: " + text);
                                return Stream.empty();
                            }
                            String className = matcher.group(1);
                            Id classId = classSourceDatabase.streamClasses()
                                    .filter(c -> c.name().equalsIgnoreCase(className))
                                    .findFirst()
                                    .orElseThrow(() -> new IOException("Missing class"))
                                    .id();

                            return Stream.of(new Spell.Level(classId, Integer.parseInt(matcher.group(2))));
                        } catch (IOException e) {
                            return Stream.empty();
                        }
                    }).toList();

            Spell foundSpell = Spell.builder()
                    .id(id)
                    .name(name)
                    .source(source)
                    .school(school)
                    .castingTime(castingTime)
                    .prerequisites(prerequisites)
                    .components(components)
                    .range(range)
                    .targets(target)
                    .duration(duration)
                    .savingThrow(savingThrow)
                    .spellResistance(spellResistance)
                    .effect(effectText)
                    .description(descriptionText)
                    .level(level)
                    .build();

            foundSpells.add(foundSpell);
        }

        return foundSpells.stream();
    }
}
