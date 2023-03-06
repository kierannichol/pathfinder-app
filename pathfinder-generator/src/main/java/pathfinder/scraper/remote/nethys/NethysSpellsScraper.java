package pathfinder.scraper.remote.nethys;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import pathfinder.spring.FileCached;

@FileCached
//@Service("Nethys Spells Scraper")
@Slf4j
@Primary
@RequiredArgsConstructor
public class NethysSpellsScraper {
//    private static final Pattern SPELL_LEVEL_LINE_PATTERN = Pattern.compile("^(.*)( *\\((.*)\\))?$");
//    private static final Pattern SPELL_LEVEL_PATTERN = Pattern.compile("^(.*) (\\d+)$");
//    private final ClassSourceDatabase classSourceDatabase;
//
//    @Override
//    public Stream<Spell> streamSpells() throws IOException {
//        Element output = search("*", SearchTarget.SPELLS);
//
//        return output.select("a").stream()
//                .parallel()
//                .map(a -> {
//                    try {
//                        log.info("Scraping Spell: " + a.text());
//                        return scrapeSpell(a.text(), a.attr("href"));
//                    } catch (IOException e) {
//                        throw new UncheckedIOException(e);
//                    }
//                });
//    }
//
//    private Spell scrapeSpell(String targetName, String href) throws IOException {
//        Document document = fetch(new URL("https://www.aonprd.com/" + href.replace(" ", "+")));
//
//        Element table = document.selectFirst("table");
//        if (table == null) {
//            throw new IllegalStateException("Document missing <table> element");
//        }
//
//        Element titleElement = findElementsWithExactText(
//                document.select("h1.titleText"),
//                targetName)
//                .first();
//
//        Elements remaining = titleElement.nextElementSiblings();
//
//        String name = NameUtils.sanitize(titleElement.text());
//        name = NameUtils.fixNameOrder(name);
//        String id = NameToIdConverter.generateId(AttributeType.SPELL, name);
//
//        String source = findLinedContent(remaining,"Source");
//
//        String school = findLinedContent(remaining, "School");
//        String castingTime = findLinedContent(remaining, "Casting Time");
//        String levelText = findLinedContent(remaining, "Level");
//        String components = findLinedContent(remaining, "Components");
//        String range = findLinedContent(remaining, "Range");
//        String target = findLinedContent(remaining, "Target");
//        String duration = findLinedContent(remaining, "Duration");
//        String savingThrow = findLinedContent(remaining, "Saving Throw");
//        String spellResistance = findLinedContent(remaining, "Spell Resistance");
//
//        String effectText = findFrameContent(remaining, "Effect");
//        String descriptionText = findFrameContent(remaining, "Description");
//
////        String prerequisites = level.replaceAll("(.*),", "$1 or");
//        String prerequisites = "";
//
//        Matcher levelLineMatcher = SPELL_LEVEL_LINE_PATTERN.matcher(levelText);
//        if (levelLineMatcher.find()) {
//            levelText = levelLineMatcher.group(1);
//            prerequisites = levelLineMatcher.group(2);
//            if (prerequisites == null) {
//                prerequisites = "";
//            }
//        }
////        List<String> levelTextParts = NameUtils.extractNameAndParentheses(levelText);
////        levelText = levelTextParts.get(0);
////        if (levelTextParts.size() > 1) {
////            prerequisites = levelTextParts.get(1).trim();
////            prerequisites = prerequisites.substring(1, prerequisites.length()-1);
////        }
//
//        List<Spell.Level> level = Arrays.stream(levelText.split(","))
//                .map(String::trim)
//                .flatMap(text -> {
//                    try {
//                        Matcher matcher = SPELL_LEVEL_PATTERN.matcher(text);
//                        if (!matcher.find()) {
//                            log.warn("Failed to parse \"" + targetName + "\" spell level: " + text);
//                            return Stream.empty();
//                        }
//                        String className = matcher.group(1);
//                        String classId = classSourceDatabase.streamClasses()
//                                .filter(c -> c.name().equalsIgnoreCase(className))
//                                .findFirst()
//                                .orElseThrow(() -> new IOException("Missing class"))
//                                .id();
//
//                        return Stream.of(new Spell.Level(classId, Integer.parseInt(matcher.group(2))));
//                    } catch (IOException e) {
//                        return Stream.empty();
//                    }
//                }).toList();
//
//        return Spell.builder()
//                .id(id)
//                .name(name)
//                .type(Type.SP)
//                .source(parseSource(source))
//                .school(school)
//                .castingTime(castingTime)
//                .prerequisites(prerequisites)
//                .components(components)
//                .range(range)
//                .targets(target)
//                .duration(duration)
//                .savingThrow(savingThrow)
//                .spellResistance(spellResistance)
//                .effect(effectText)
//                .description(descriptionText)
//                .level(level)
//                .build();
//    }
}
