package pathfinder.generator.db;

import static pathfinder.parser.db.WorkbookUtils.loadClasspathWorkbook;
import static pathfinder.parser.db.WorkbookUtils.tryReadInt;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;
import javax.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Component;
import pathfinder.generator.model.CharacterClass;
import pathfinder.generator.model.CharacterClass.Type;
import pathfinder.generator.model.Special;
import pathfinder.parser.NameToIdConverter;

@Component("Class Source Database")
@RequiredArgsConstructor
public class ClassSourceDatabase {
    private static final int FIRST_LEVEL_ROW = 2;
    private static final int BAB_COLUMN = 1;
    private static final int FORT_SAVE_COLUMN = 2;
    private static final int REF_SAVE_COLUMN = 3;
    private static final int WILL_SAVE_COLUMN = 4;
    private static final int SPECIAL_COLUMN = 5;
    private static final int SPELLS_PER_DAY_FIRST_COLUMN = 6;
    private static final int MAX_SPELL_LEVEL = 9;

    private final Set<CharacterClass> classes = new HashSet<>();

    @PostConstruct
    public void load() throws IOException {
        classes.clear();
        try (Workbook workbook = loadClasspathWorkbook("ClassDatabase.xlsx")) {
            var classSet = StreamSupport.stream(workbook.spliterator(), false)
                    .map(sheet -> {
                        try {
                            return transformToData(sheet);
                        } catch (NoSuchElementException e) {
                            e.printStackTrace();
                            throw e;
                        }
                    })
                    .collect(Collectors.toSet());

            classes.addAll(classSet);
        }
    }

    public Optional<CharacterClass> findById(String classId) {
        return stream()
                .filter(classEntry -> classEntry.id().equalsIgnoreCase(classId))
                .findFirst();
    }

    public Stream<CharacterClass> stream() {
        return classes.stream();
    }

    private static CharacterClass transformToData(Sheet sheet) {
        String id = NameToIdConverter.classId(sheet.getSheetName());
        String name = sheet.getSheetName();

        List<CharacterClass.Level> levels = IntStream.range(0, 20)
                .mapToObj(index -> {
                    int level = index + 1;
                    Row row = sheet.getRow(FIRST_LEVEL_ROW + index);

                    int bab = tryReadInt(row.getCell(BAB_COLUMN)).orElseThrow();
                    int fortSave = tryReadInt(row.getCell(FORT_SAVE_COLUMN)).orElseThrow();
                    int refSave = tryReadInt(row.getCell(REF_SAVE_COLUMN)).orElseThrow();
                    int willSave = tryReadInt(row.getCell(WILL_SAVE_COLUMN)).orElseThrow();
                    List<Special> special = parseSpecial(row.getCell(SPECIAL_COLUMN).getStringCellValue());
                    Map<Integer, Integer> spellsPerDay = new HashMap<>();
                    for (int spellLevel = 0; spellLevel <= MAX_SPELL_LEVEL; spellLevel++) {
                        int column = SPELLS_PER_DAY_FIRST_COLUMN + spellLevel;
                        if (row.getCell(column) != null && row.getCell(column).getCellType() == CellType.NUMERIC) {
                            spellsPerDay.put(spellLevel, Double.valueOf(row.getCell(column).getNumericCellValue()).intValue());
                        }
                    }
                    return new CharacterClass.Level(level, bab, fortSave, refSave, willSave, special, spellsPerDay);
                })
                .toList();
        return new CharacterClass(id, name, "", Type.CORE, levels);
    }

    private static List<Special> parseSpecial(String specialText) {
        return Arrays.stream(specialText.split(","))
                .map(String::trim)
                .filter(part -> !"—".equals(part))
                .filter(part -> !part.isBlank())
                .map(name -> new Special(NameToIdConverter.abilityId(name), name, ""))
                .toList();
    }
}
