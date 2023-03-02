package pathfinder.scraper;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;

public class SpreadsheetTable {
    private final Sheet sheet;

    public SpreadsheetTable(Sheet sheet) {
        this.sheet = sheet;
    }

    public void create(CellStyle style, String... columnNames) {
        Row row = sheet.createRow(0);
        for (String columnName : columnNames) {
            Cell cell = row.createCell(Math.max(0, row.getLastCellNum()));
            cell.setCellValue(columnName);
            cell.setCellStyle(style);
        }
        sheet.setFitToPage(true);
    }

    public void insert(Object... columnValues) {
        Row row = sheet.createRow(sheet.getLastRowNum() + 1);
        for (Object value : columnValues) {
            Cell cell = row.createCell(Math.max(0, row.getLastCellNum()));
            if (value instanceof String stringValue) {
                cell.setCellValue(stringValue);
            } else if (value instanceof Number numberValue) {
                cell.setCellValue(numberValue.doubleValue());
            } else if (value == null) {
                cell.setBlank();
            } else {
                throw new IllegalArgumentException("Unable to write value of type " + value.getClass());
            }
        }
    }
}
