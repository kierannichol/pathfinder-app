package pathfinder.source.excel;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;

@Service("Excel Spell Source Database")
@Slf4j
@NotCached
public class ExcelSpellSourceDatabase {
//    private static final Pattern SPELL_LEVEL_PATTERN = Pattern.compile("(.*) (\\d+)");
//
//    private List<Spell> cache;
//
//    @Override
//    public Stream<Spell> streamSpells() throws IOException {
//        if (cache == null) {
//            try (Workbook workbook = loadClasspathWorkbook("SpellDatabase.xlsx")) {
//                cache = StreamSupport.stream(workbook.getSheetAt(0).spliterator(), false)
//                        .skip(1)
//                        .map(row -> {
//                            try {
//                                return transformToData(row);
//                            } catch (NoSuchElementException e) {
//                                e.printStackTrace();
//                                return null;
//                            }
//                        })
//                        .filter(Objects::nonNull)
//                        .toList();
//            }
//        }
//        return cache.stream();
//    }
//
//    private static final int NAME_COLUMN = 0;
//    private static final int SCHOOL_COLUMN = 1;
//    private static final int SUBSCHOOL_COLUMN = 2;
//    private static final int DESCRIPTOR_COLUMN = 3;
//    private static final int SPELL_LEVEL_COLUMN = 4;
//    private static final int CASTING_TIME_COLUMN = 5;
//    private static final int COMPONENTS_COLUMN = 6;
//    private static final int COSTLY_COMPONENTS_COLUMN = 7;
//    private static final int RANGE_COLUMN = 8;
//    private static final int AREA_COLUMN = 9;
//    private static final int EFFECT_COLUMN = 10;
//    private static final int TARGETS_COLUMN = 11;
//    private static final int DURATION_COLUMN = 12;
//    private static final int DISMISSIBLE_COLUMN = 13;
//    private static final int SHAPEABLE_COLUMN = 14;
//    private static final int SAVING_THROW_COLUMN = 15;
//    private static final int SPELL_RESISTANCE_COLUMN = 16;
//    private static final int DESCRIPTION_COLUMN = 17;
//    private static final int DESCRIPTION_HTML_COLUMN = 18;
//    private static final int SOURCE_COLUMN = 19;
//
//
//    private static Spell transformToData(Row row) {
//        String source = tryReadString(row.getCell(SOURCE_COLUMN)).orElse("");
//        source = NameUtils.sanitize(source);
//        if (Sources.findSourceByNameOrCode(source) == null) {
//            return null;
//        }
//
//        Function<Integer, String> textCol = col -> StringUtils.sanitize(tryReadString(row.getCell(col)).orElse(""));
//
//        String name = textCol.apply(NAME_COLUMN);
//        name = NameUtils.fixNameOrder(name);
//        String id = NameToIdConverter.generateId(AttributeType.SPELL, name);
//        String description = textCol.apply(DESCRIPTION_COLUMN);
//        String type = Type.SP;
//        String school = textCol.apply(SCHOOL_COLUMN);
//        String castingTime = textCol.apply(CASTING_TIME_COLUMN);
//        String components = textCol.apply(COMPONENTS_COLUMN);
//        String range = textCol.apply(RANGE_COLUMN);
//        String area = textCol.apply(AREA_COLUMN);
//        String targets = textCol.apply(TARGETS_COLUMN);
//        String effect = textCol.apply(EFFECT_COLUMN);
//        String duration = textCol.apply(DURATION_COLUMN);
//        String savingThrow = textCol.apply(SAVING_THROW_COLUMN);
//        String spellResistance = textCol.apply(SPELL_RESISTANCE_COLUMN);
//        List<Level> level = parseLevels(textCol.apply(SPELL_LEVEL_COLUMN));
//
//        return Spell.builder()
//                .id(id)
//                .name(name)
//                .type(type)
//                .school(school)
//                .castingTime(castingTime)
//                .components(components)
//                .range(range)
//                .area(area)
//                .targets(targets)
//                .effect(effect)
//                .duration(duration)
//                .savingThrow(savingThrow)
//                .description(description)
//                .spellResistance(spellResistance)
//                .level(level)
//                .source(Sources.findSourceByNameOrCode(source))
//                .build();
//    }
//
//    private static List<Level> parseLevels(String text) {
//        return Arrays.stream(text.trim().split(","))
//                .flatMap(entry -> parseLevel(text.trim()))
//                .toList();
//    }
//
//    private static Stream<Level> parseLevel(String text) {
//        Matcher matcher = SPELL_LEVEL_PATTERN.matcher(text);
//        if (!matcher.find()) {
//            throw new IllegalArgumentException("Bad spell level: " + text);
//        }
//
//        String[] classes = matcher.group(1).split("/");
//        int level = Integer.parseInt(matcher.group(2));
//        return Arrays.stream(classes).map(c -> new Level(NameToIdConverter.classId(c), level));
//    }
}
