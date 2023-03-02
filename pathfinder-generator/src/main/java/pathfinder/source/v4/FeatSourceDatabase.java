package pathfinder.source.v4;

import static pathfinder.parser.db.WorkbookUtils.loadClasspathWorkbook;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Component;
import pathfinder.model.v4.NamedEntity;
import pathfinder.model.v4.NamedEntitySource;
import pathfinder.model.v4.pathfinder.Feat;
import pathfinder.parser.NameToIdConverter;

@Component("Feat Source Database (v4)")
public class FeatSourceDatabase extends AbstractExcelSourceDatabase implements NamedEntitySource {
    private static final String DATABASE_FILE = "FeatDatabase.xlsx";

    public Stream<Feat> streamFeats() throws IOException {
        Workbook workbook = loadClasspathWorkbook(DATABASE_FILE);
        return StreamSupport.stream(workbook.getSheetAt(0).spliterator(), false)
                .skip(1L)
                .map(row -> {
                    try {
                        return transformToData(row);
                    } catch (NoSuchElementException e) {
                        e.printStackTrace();
                        return null;
                    }
                })
                .filter(Objects::nonNull)
                .onClose(() -> {
                    try {
                        workbook.close();
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                });
        }

    private Feat transformToData(Row row) {
        int column = 1;
        String name = cellText(row, column++);
        return new Feat(
                NameToIdConverter.featId(name),
                name,
                cellText(row, column++),
                cellText(row, column++),
                cellText(row, column++),
                cellText(row, column++),
                cellText(row, column++),
                cellText(row, column++),
                cellText(row, column++),
                cellText(row, column++),
                cellNumber(row, column++).map(num -> num > 0).orElse(false),
                cellNumber(row, column++).map(num -> num > 0).orElse(false),
                cellNumber(row, column++).map(num -> num > 0).orElse(false),
                cellNumber(row, column++).map(num -> num > 0).orElse(false),
                cellNumber(row, column++).map(num -> num > 0).orElse(false),
                cellNumber(row, column++).map(num -> num > 0).orElse(false),
                cellNumber(row, column++).map(num -> num > 0).orElse(false),
                cellText(row, column++),
                cellText(row, column++),
                cellText(row, column++),
                cellText(row, column++),
                cellNumber(row, column++).map(num -> num > 0).orElse(false),
                cellText(row, column)
        );
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        try {
            return streamFeats();
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
