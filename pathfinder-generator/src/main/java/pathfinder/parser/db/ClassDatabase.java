package pathfinder.parser.db;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.IntStream;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import pathfinder.parser.NameToIdConverter;
import pathfinder.parser.db.ClassEntry.Level;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class ClassDatabase implements AutoCloseable {
    private static final int FIRST_LEVEL_ROW = 2;
    private static final int BAB_COLUMN = 1;
    private static final int FORT_SAVE_COLUMN = 2;
    private static final int REF_SAVE_COLUMN = 3;
    private static final int WILL_SAVE_COLUMN = 4;
    private static final int SPECIAL_COLUMN = 5;
    private static final int SPELLS_PER_DAY_FIRST_COLUMN = 6;
    private static final int MAX_SPELL_LEVEL = 9;

    private final Workbook workbook;

    public static ClassDatabase load() throws IOException {
        try (InputStream is = ClassLoader.getSystemResourceAsStream("ClassDatabase.xlsx")) {
            if (is == null) {
                throw new IOException("Unable to open ClassDatabase.xlsx");
            }
            Workbook workbook = new XSSFWorkbook(is);
            return new ClassDatabase(workbook);
        }
    }

    public void close() throws IOException {
        workbook.close();
    }

    public Optional<ClassEntry> findById(String classId) {
        return stream()
                .filter(classEntry -> classEntry.id().equalsIgnoreCase(classId))
                .findFirst();
    }

    public Stream<ClassEntry> stream() {
        return StreamSupport.stream(workbook.spliterator(), false)
                        .map(this::createClassEntryFromSheet);
    }

    private ClassEntry createClassEntryFromSheet(Sheet sheet) {
        String id = NameToIdConverter.classId(sheet.getSheetName());
        String name = sheet.getSheetName();

        List<Level> levels = IntStream.range(0, 20)
                .mapToObj(index -> {
                    int level = index + 1;
                    Row row = sheet.getRow(FIRST_LEVEL_ROW + index);

                    int bab = readIntCell(row.getCell(BAB_COLUMN)).orElseThrow();
                    int fortSave = readIntCell(row.getCell(FORT_SAVE_COLUMN)).orElseThrow();
                    int refSave = readIntCell(row.getCell(REF_SAVE_COLUMN)).orElseThrow();
                    int willSave = readIntCell(row.getCell(WILL_SAVE_COLUMN)).orElseThrow();
                    List<String> special = parseSpecial(row.getCell(SPECIAL_COLUMN).getStringCellValue());
                    Map<Integer, Integer> spellsPerDay = new HashMap<>();
                    for (int spellLevel = 0; spellLevel <= MAX_SPELL_LEVEL; spellLevel++) {
                        int column = SPELLS_PER_DAY_FIRST_COLUMN + spellLevel;
                        if (row.getCell(column) != null && row.getCell(column).getCellType() == CellType.NUMERIC) {
                            spellsPerDay.put(spellLevel, Double.valueOf(row.getCell(column).getNumericCellValue()).intValue());
                        }
                    }
                    return new ClassEntry.Level(level, bab, fortSave, refSave, willSave, special, spellsPerDay);
                })
                .toList();
        return new ClassEntry(id, name, levels);
    }

    private List<String> parseSpecial(String specialText) {
        return Arrays.stream(specialText.split(","))
                .map(String::trim)
                .filter(part -> !"—".equals(part))
                .filter(part -> !part.isBlank())
                .toList();
    }

    private Optional<Integer> readIntCell(Cell cell) {
        return switch (cell.getCellType()) {
            case NUMERIC -> Optional.of(Double.valueOf(cell.getNumericCellValue()).intValue());
            case STRING -> Optional.of(Integer.parseInt(cell.getStringCellValue()));
            case FORMULA -> switch (cell.getCachedFormulaResultType()) {
                case NUMERIC -> Optional.of(Double.valueOf(cell.getNumericCellValue()).intValue());
                case STRING -> Optional.of(Integer.parseInt(cell.getStringCellValue()));
                default -> Optional.empty();
            };
            default -> Optional.empty();
        };
    }
}
