package pathfinder.scraper.remote.excel;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import pathfinder.parser.db.WorkbookUtils;
import pathfinder.util.StringUtils;

@RequiredArgsConstructor
public class SpreadsheetDatabase {
    private final Workbook workbook;

    public Stream<Row> query(String table) {
        Sheet sheet = workbook.getSheet(table);
        var tableDefRow = sheet.getRow(0);

        return StreamSupport.stream(sheet.spliterator(), false)
                .skip(1)
                .map(tableRow -> {
                    Map<String, Cell> cellsByName = new HashMap<>();
                    for (int i = 0; i < tableRow.getPhysicalNumberOfCells(); i++) {
                        cellsByName.put(
                                WorkbookUtils.tryReadString(tableDefRow.getCell(i)).orElseThrow(),
                                tableRow.getCell(i));
                    }
                    return new Row(cellsByName);
                });
    }

    public static class Row {
        private final Map<String, Cell> columns;

        public Row(Map<String, Cell> columns) {
            this.columns = columns;
        }

        public String getText(String column) {
            return WorkbookUtils.tryReadString(columns.get(column))
                    .map(StringUtils::sanitize)
                    .orElse("");
        }

        public Integer getInteger(String column) {
            return WorkbookUtils.tryReadInt(columns.get(column))
                    .orElse(0);
        }
    }
}
