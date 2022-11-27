package pathfinder.generator.db;

import static pathfinder.parser.db.WorkbookUtils.loadClasspathWorkbook;
import static pathfinder.parser.db.WorkbookUtils.tryReadInt;
import static pathfinder.parser.db.WorkbookUtils.tryReadString;

import java.io.IOException;
import java.util.HashSet;
import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;
import javax.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Component;
import pathfinder.generator.model.Race;
import pathfinder.generator.model.Size;
import pathfinder.util.CsvUtils;

@Component("Race Source Database")
@RequiredArgsConstructor
public class RaceSourceDatabase {
    private final Set<Race> races = new HashSet<>();

    @PostConstruct
    public void load() throws IOException {
        races.clear();
        try (Workbook workbook = loadClasspathWorkbook("RaceDatabase.xlsx")) {
            var raceSet = StreamSupport.stream(workbook.getSheetAt(0).spliterator(), false)
                    .skip(1)
                    .map(row -> {
                        try {
                            return transformToData(row);
                        } catch (NoSuchElementException e) {
                            e.printStackTrace();
                            throw e;
                        }
                    })
                    .collect(Collectors.toSet());

            races.addAll(raceSet);
        }
    }

    public Stream<Race> stream() {
        return races.stream();
    }

    private static Race transformToData(Row row) {
        String id = tryReadString(row.getCell(0)).orElseThrow();
        String name = tryReadString(row.getCell(1)).orElseThrow();
        String sizeText = tryReadString(row.getCell(2)).orElse("");
        String type = tryReadString(row.getCell(3)).orElse("");
        int speed = tryReadInt(row.getCell(4)).orElse(0);
        String languagesText = tryReadString(row.getCell(5)).orElse("");
        String traitsText = tryReadString(row.getCell(6)).orElse("");

        return new Race(
                "race:" + id,
                name,
                Size.findByLongName(sizeText).orElse(Size.NONE),
                type,
                speed,
                CsvUtils.split(languagesText)
                        .filter(s -> !s.isBlank())
                        .toList(),
                CsvUtils.split(traitsText)
                        .filter(s -> !s.isBlank())
                        .toList()
        );
    }
}
