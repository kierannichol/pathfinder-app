package pathfinder.scraper.remote.excel;

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
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.Feature;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.AbilitySourceDatabase;
import pathfinder.util.NameUtils;

@Component("Excel Rage Power Source Database")
@RequiredArgsConstructor
public class ExcelRagePowerSourceDatabase implements AbilitySourceDatabase {
    private final Set<Feature> abilities = new HashSet<>();

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
    public Stream<Feature> streamAbilities() {
        return abilities.stream();
    }

    private static Feature transformToData(Row row) {
        int column = 0;
        String name = tryReadString(row.getCell(column++)).orElseThrow();
        String prerequisites = tryReadString(row.getCell(column++)).orElse("");
        String description = tryReadString(row.getCell(column++)).orElse("");
        String source = tryReadString(row.getCell(column++)).orElse("");

        String type = Feature.Type.fromFeatureName(name);
        name = Feature.Type.removeTypeFromName(name);
        name = NameUtils.fixNameOrder(name);
        name = name.replace("’", "'");

        Id id = NameToIdConverter.generateId(AttributeType.RAGE_POWER, name);

        return Feature.builder()
                .id(id)
                .name(name)
                .type(type)
                .description(Description.create(description))
                .prerequisites(prerequisites)
                .source(source)
                .build();
    }
}
