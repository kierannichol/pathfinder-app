package pathfinder.source.excel;

import static pathfinder.parser.db.WorkbookUtils.loadClasspathWorkbook;
import static pathfinder.parser.db.WorkbookUtils.tryReadInt;
import static pathfinder.parser.db.WorkbookUtils.tryReadString;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Service;
import pathfinder.model.Feat;
import pathfinder.model.Feat.Type;
import pathfinder.model.Sources;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.FeatSourceDatabase;
import pathfinder.util.NameUtils;

@Service("Excel Feat Source Database")
public class ExcelFeatSourceDatabase implements FeatSourceDatabase {
    private final Map<String, Feat> featsByName = new HashMap<>();

    @Override
    public Stream<Feat> streamFeats() throws IOException {
        if (featsByName.isEmpty()) {
            try (Workbook workbook = loadClasspathWorkbook("FeatDatabase.xlsx")) {
                var featsByName = StreamSupport.stream(workbook.getSheetAt(0).spliterator(), false)
                        .skip(1)
                        .map(row -> {
                            try {
                                return transformToData(row);
                            } catch (NoSuchElementException e) {
                                e.printStackTrace();
                                return null;
                            }
                        })
                        .filter(Objects::nonNull)
                        .collect(Collectors.toMap(
                                Feat::name,
                                feat -> feat,
                                (a, b) -> {
                                    int aSourceIndex = Optional.ofNullable(a.source()).map(Sources.SOURCES_LIST::indexOf).orElse(Integer.MAX_VALUE);
                                    int bSourceIndex = Optional.ofNullable(b.source()).map(Sources.SOURCES_LIST::indexOf).orElse(Integer.MAX_VALUE);
                                    return aSourceIndex < bSourceIndex ? a : b;
                                }
                        ));

                this.featsByName.putAll(featsByName);
            }
        }
        return featsByName.values().stream();
    }

    private static final int NAME_COLUMN = 1;
    private static final int TYPE_COLUMN = 2;
    private static final int DESCRIPTION_COLUMN = 3;
    private static final int PREREQUISITES_COLUMN = 4;
    private static final int BENEFIT_COLUMN = 6;
    private static final int NORMAL_COLUMN = 7;
    private static final int SPECIAL_COLUMN = 8;
    private static final int SOURCE_COLUMN = 9;
    private static final int TEAMWORK_COLUMN = 10;
    private static final int NOTE_COLUMN = 19;
    private static final int MULTIPLES_COLUMN = 21;

    private static Feat transformToData(Row row) {
        String source = tryReadString(row.getCell(SOURCE_COLUMN)).orElse("");
        source = NameUtils.sanitize(source);
        if (Sources.findSourceByNameOrCode(source) == null) {
            return null;
        }
//        if (!ALLOWED_SOURCES.contains(source)) {
//            return null;
//        }
        List<Feat.Type> types = parseTypes(tryReadString(row.getCell(TYPE_COLUMN)).orElse("unknown"));
        String name = tryReadString(row.getCell(NAME_COLUMN)).orElseThrow();
        String id = NameToIdConverter.featId(name);
        if (types.contains(Type.MYTHIC)) {
            id = id + "_mythic";
            name = name + " (Mythic)";
        }
        String description = tryReadString(row.getCell(DESCRIPTION_COLUMN)).orElse("");
        String prerequisites = tryReadString(row.getCell(PREREQUISITES_COLUMN)).orElse("");
        String benefit = tryReadString(row.getCell(BENEFIT_COLUMN)).orElseThrow();
        String normal = tryReadString(row.getCell(NORMAL_COLUMN)).orElse("");
        String special = tryReadString(row.getCell(SPECIAL_COLUMN)).orElse("");
        boolean teamwork = tryReadInt(row.getCell(TEAMWORK_COLUMN)).orElseThrow() > 0;
        String note = tryReadString(row.getCell(NOTE_COLUMN)).orElse("");
        boolean multiples = tryReadInt(row.getCell(MULTIPLES_COLUMN)).orElseThrow() > 0;

        return new Feat(
                id,
                name,
                types,
                description,
                prerequisites,
                benefit,
                normal,
                special,
                Sources.findSourceByNameOrCode(source),
                teamwork,
                note,
                List.of(),
                multiples
        );
    }

    private static List<Feat.Type> parseTypes(String type) {
        return Arrays.stream(type.toUpperCase().split(","))
                .map(String::trim)
                .map(part -> part.replace(' ', '_'))
                .map(Type::valueOf)
                .collect(Collectors.toList());
    }

}
