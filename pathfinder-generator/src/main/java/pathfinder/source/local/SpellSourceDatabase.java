package pathfinder.source.local;

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
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Spell;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;

@Component("Spell Source Database (v4)")
public class SpellSourceDatabase extends AbstractExcelSourceDatabase implements NamedEntitySource {
    private static final String DATABASE_FILE = "SpellDatabase.xlsx";

    public Stream<Spell> streamSpells() {
        try {
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
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private Spell transformToData(Row row) {
        int column = 0;
        String name = cellText(row, column++);
        Id id = NameToIdConverter.generateId(AttributeType.SPELL, name);

        return new Spell(id, name);
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamSpells();
    }
}
