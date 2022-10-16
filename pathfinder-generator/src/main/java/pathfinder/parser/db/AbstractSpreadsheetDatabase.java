package pathfinder.parser.db;

import java.io.IOException;
import java.io.InputStream;
import java.util.Optional;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

@RequiredArgsConstructor(access = AccessLevel.PROTECTED)
public abstract class AbstractSpreadsheetDatabase implements AutoCloseable {
    protected final Workbook workbook;

    protected static Workbook loadClasspathWorkbook(String path) throws IOException {
        try (InputStream is = ClassLoader.getSystemResourceAsStream(path)) {
            if (is == null) {
                throw new IOException("Unable to open " + path);
            }
            return new XSSFWorkbook(is);
        }
    }

    protected Optional<String> tryReadString(Cell cell) {
        if (cell == null) {
            return Optional.empty();
        }
        return switch (cell.getCellType()) {
            case NUMERIC -> Optional.of(String.valueOf(cell.getNumericCellValue()));
            case STRING -> Optional.of(cell.getStringCellValue());
            case FORMULA -> switch (cell.getCachedFormulaResultType()) {
                case NUMERIC -> Optional.of(String.valueOf(cell.getNumericCellValue()));
                case STRING -> Optional.of(cell.getStringCellValue());
                default -> Optional.empty();
            };
            default -> Optional.empty();
        };
    }

    protected Optional<Integer> tryReadInt(Cell cell) {
        if (cell == null) {
            return Optional.empty();
        }
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

    @Override
    public void close() throws IOException {
        workbook.close();
    }
}
