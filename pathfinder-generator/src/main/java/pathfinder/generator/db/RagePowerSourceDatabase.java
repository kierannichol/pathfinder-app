package pathfinder.generator.db;

import static pathfinder.parser.db.WorkbookUtils.loadClasspathWorkbook;
import static pathfinder.parser.db.WorkbookUtils.tryReadString;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
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
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.util.NameUtils;

@Component("Rage Power Source Database")
@RequiredArgsConstructor
public class RagePowerSourceDatabase implements SourceDatabase<Ability> {

    private static final List<String> EXCLUDED_SOURCES = List.of();//"PZO1115");
    private final Set<Ability> abilities = new HashSet<>();

    @PostConstruct
    public void load() throws IOException {
        abilities.clear();
        try (Workbook workbook = loadClasspathWorkbook("RagePowerDatabase.xlsx")) {
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
                    .filter(Objects::nonNull)
                    .collect(Collectors.toSet());

            abilities.addAll(abilitySet);
        }
    }

    public Stream<Ability> stream() {
        return abilities.stream();
    }

    private static Ability transformToData(Row row) {
        int column = 0;
        String name = tryReadString(row.getCell(column++)).orElseThrow();
        String prerequisites = tryReadString(row.getCell(column++)).orElse("");
        String description = tryReadString(row.getCell(column++)).orElse("");
        String source = tryReadString(row.getCell(column++)).orElse("");

        if (EXCLUDED_SOURCES.contains(source)) {
            return null;
        }

        Type type = parseAbilityType(name);
        name = name.replaceAll(" \\((Sp|Su|Ex)\\)", "");
        name = NameUtils.fixNameOrder(name);
        name = name.replace("’", "'");

        String id = NameToIdConverter.generateId(AttributeType.RAGE_POWER, name);

        return new Ability(
                id,
                name,
                type,
                description,
                prerequisites
        );
    }

    private static Ability.Type parseAbilityType(String abilityName) {
        return Type.fromAbilityName(abilityName);
    }
}
