package pathfinder.generator.db;

import static pathfinder.parser.db.WorkbookUtils.loadClasspathWorkbook;
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
import pathfinder.SourceDatabase;
import pathfinder.model.Ability;
import pathfinder.model.Ability.Type;

@Component("Ability Source Database")
@RequiredArgsConstructor
public class AbilitySourceDatabase implements SourceDatabase<Ability> {
    private final Set<Ability> abilities = new HashSet<>();

    @PostConstruct
    public void load() throws IOException {
        abilities.clear();
        try (Workbook workbook = loadClasspathWorkbook("AbilityDatabase.xlsx")) {
            var abilitySet = StreamSupport.stream(workbook.getSheetAt(0).spliterator(), false)
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

            abilities.addAll(abilitySet);
        }
    }

    public Stream<Ability> stream() {
        return abilities.stream();
    }

    private static Ability transformToData(Row row) {
        String id = tryReadString(row.getCell(0)).orElseThrow();
        String name = tryReadString(row.getCell(1)).orElseThrow();
        String type = tryReadString(row.getCell(2)).orElse("");
        String description = tryReadString(row.getCell(3)).orElse("");

        return new Ability(
                id,
                name,
                parseAbilityType(type),
                description
        );
    }

    private static Ability.Type parseAbilityType(String abilityTypeString) {
        if (abilityTypeString.isBlank()) {
            return Type.NONE;
        }
        return Ability.Type.valueOf(abilityTypeString.toUpperCase());
    }
}
