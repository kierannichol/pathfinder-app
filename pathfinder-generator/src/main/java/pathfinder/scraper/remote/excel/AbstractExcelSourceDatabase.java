package pathfinder.scraper.remote.excel;

import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.util.CellAddress;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.SheetUtil;
import pathfinder.parser.db.WorkbookUtils;
import pathfinder.util.StringUtils;

public abstract class AbstractExcelSourceDatabase {

    protected String cellText(Sheet sheet, String address) {
        CellAddress cellAddress = new CellAddress(address);
        Cell cell = SheetUtil.getCell(sheet,
                        cellAddress.getRow(),
                        cellAddress.getColumn());
        return WorkbookUtils.tryReadString(cell)
                .map(StringUtils::sanitize)
                .orElse("");
    }

    protected Optional<Integer> cellNumber(Sheet sheet, String address) {
        CellAddress cellAddress = new CellAddress(address);
        Cell cell = SheetUtil.getCell(sheet,
                cellAddress.getRow(),
                cellAddress.getColumn());
        return WorkbookUtils.tryReadInt(cell);
    }

    protected Stream<String> expandCellText(Sheet sheet, String address) {
        return Arrays.stream(cellText(sheet, address).split(";"))
                .map(String::trim);
    }

    protected Stream<String> cellRangeText(Sheet sheet, String range) {
        CellRangeAddress cellRange = CellRangeAddress.valueOf(range);

        return StreamSupport.stream(cellRange.spliterator(), false)
                .map(cellAddress -> SheetUtil.getCell(sheet,
                        cellAddress.getRow(),
                        cellAddress.getColumn()))
                .flatMap(cell -> WorkbookUtils.tryReadString(cell).stream())
                .map(StringUtils::sanitize);
    }
}
