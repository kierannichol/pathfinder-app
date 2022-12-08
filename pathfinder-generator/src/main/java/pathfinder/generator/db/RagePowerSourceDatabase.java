package pathfinder.generator.db;

import static pathfinder.parser.db.WorkbookUtils.loadClasspathWorkbook;
import static pathfinder.parser.db.WorkbookUtils.tryReadString;

import java.io.IOException;
import java.util.HashSet;
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
import pathfinder.model.Ability;
import pathfinder.model.Ability.Type;
import pathfinder.model.Sources;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.AbilitySourceDatabase;
import pathfinder.util.NameUtils;

@Component("Rage Power Source Database")
@RequiredArgsConstructor
public class RagePowerSourceDatabase implements AbilitySourceDatabase {
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

    @Override
    public Stream<Ability> streamAbilities() {
        return abilities.stream();
    }

    private static Ability transformToData(Row row) {
        int column = 0;
        String name = tryReadString(row.getCell(column++)).orElseThrow();
        String prerequisites = tryReadString(row.getCell(column++)).orElse("");
        String description = tryReadString(row.getCell(column++)).orElse("");
        String source = tryReadString(row.getCell(column++)).orElse("");

        Type type = Ability.Type.fromAbilityName(name);
        name = Ability.Type.removeTypeFromName(name);
        name = NameUtils.fixNameOrder(name);
        name = name.replace("’", "'");

        String id = NameToIdConverter.generateId(AttributeType.RAGE_POWER, name);

        return Ability.builder()
                .id(id)
                .name(name)
                .type(type)
                .description(description)
                .prerequisites(prerequisites)
                .source(Sources.findSourceByNameOrCode(source))
                .build();
    }
}
