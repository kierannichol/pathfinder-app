package pathfinder.scraper;

import java.io.IOException;
import java.io.OutputStream;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class SpreadsheetDatabase implements AutoCloseable {
    private final XSSFWorkbook workbook;
    private final XSSFCellStyle boldStyle;

    public SpreadsheetDatabase() {
        this(new XSSFWorkbook());
    }

    public SpreadsheetDatabase(XSSFWorkbook workbook) {
        this.workbook = workbook;

        boldStyle = workbook.createCellStyle();
        XSSFFont boldFont = workbook.createFont();
        boldFont.setBold(true);
        boldStyle.setFont(boldFont);
    }

    public SpreadsheetTable createTable(String tableName, String... columnNames) {
        XSSFSheet sheet = workbook.createSheet(tableName);
        SpreadsheetTable table = new SpreadsheetTable(sheet);
        table.create(boldStyle, columnNames);
        return table;
    }

    @Override
    public void close() throws IOException {
        workbook.close();
    }

    public void saveTo(OutputStream os) throws IOException {
        workbook.write(os);
    }
}
