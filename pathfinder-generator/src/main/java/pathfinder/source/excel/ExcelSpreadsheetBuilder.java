package pathfinder.source.excel;

import java.io.IOException;
import java.io.OutputStream;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelSpreadsheetBuilder implements AutoCloseable {
    private final XSSFWorkbook workbook;
    private final XSSFCellStyle boldStyle;
    private Sheet currentSheet;
    private int row;
    private int column;
    private int startColumn = 0;

    public ExcelSpreadsheetBuilder() {
        this(new XSSFWorkbook());
    }

    public ExcelSpreadsheetBuilder(XSSFWorkbook workbook) {
        this.workbook = workbook;

        boldStyle = workbook.createCellStyle();
        XSSFFont boldFont = workbook.createFont();
        boldFont.setBold(true);
        boldStyle.setFont(boldFont);
    }

    public void createSheet(String name) {
        currentSheet = workbook.createSheet(name);
        currentSheet.createRow(0);
        row = 0;
        column = 0;
    }

    public void moveTo(int row, int column) {
        this.row = row;
        this.column = column;
        this.startColumn = column;
    }

    public void writeField(String label, String value) {
        writeBold(label);
        write(value);
        nextLine();
    }

    public void writeBold(String text) {
        Cell cell = currentSheet.getRow(row).createCell(column++);
        cell.setCellValue(text);
        cell.setCellStyle(boldStyle);
    }

    public void writeBold(int number) {
        Cell cell = currentSheet.getRow(row).createCell(column++);
        cell.setCellValue(number);
        cell.setCellStyle(boldStyle);
    }

    public void write() {
        Cell cell = currentSheet.getRow(row).createCell(column++);
        cell.setBlank();
    }

    public void write(String text) {
        Cell cell = currentSheet.getRow(row).createCell(column++);
        cell.setCellValue(text);
    }

    public void write(int number) {
        Cell cell = currentSheet.getRow(row).createCell(column++);
        cell.setCellValue(number);
    }

    public void nextLine() {
        currentSheet.createRow(++row);
        column = startColumn;
    }

    @Override
    public void close() throws IOException {
        workbook.close();
    }

    public void saveTo(OutputStream os) throws IOException {
        workbook.write(os);
    }
}
