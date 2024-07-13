package pathfinder.model.pathfinder;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.fasterxml.jackson.dataformat.yaml.YAMLGenerator;
import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.util.Arrays;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import pathfinder.model.json.PathfinderJsonModule;
import pathfinder.util.StringUtils;

@Slf4j
public class Sources {
    public static final SourceId CORE = findSourceByCode("PZO1110");

    public static final SourceId ADVANCED_PLAYERS_GUIDE = findSourceByCode("PZO1115");
    public static final SourceId ADVANCED_CLASS_GUIDE = findSourceByCode("PZO1129");
    public static final SourceId ADVANCED_RACE_GUIDE = findSourceByCode("PZO1121");
    public static final SourceId ADVENTURERS_GUIDE = findSourceByCode("PZO1138");
    public static final SourceId GAMEMASTERY_GUIDE = findSourceByCode("PZO1114");
    public static final SourceId UNCHAINED = findSourceByCode("PZO1131");
    public static final SourceId ULTIMATE_COMBAT = findSourceByCode("PZO1118");
    public static final SourceId ULTIMATE_EQUIPMENT = findSourceByCode("PZO1123");
    public static final SourceId ULTIMATE_MAGIC = findSourceByCode("PZO1117");

    public static final SourceId COMPANION_HEROES_OF_THE_HIGH_COURT = findSourceByCode("PZO9476");
    public static final SourceId OCCULT_ADVENTURES = findSourceByCode("PZO1132");

    public static final SourceId THE_INNER_SEA_WORLD_GUIDE = findSourceByCode("PZO9226");

    public static SourceId findSourceByNameOrCode(String search) {
        if (search == null) {
            return null;
        }
        SourceId found = findSourceByName(search);
        if (found == null) {
            found = findSourceByCode(search);
        }
        return found;
    }

    private static SourceId findSourceByCode(String code) {
        if (code == null) {
            return null;
        }
        String sanitizedCode = StringUtils.sanitize(code);
        return initialize().stream()
                .filter(source -> source.code().equalsIgnoreCase(sanitizedCode))
                .findFirst()
                .orElse(null);
    }

    private static SourceId findSourceByName(String name) {
        if (name == null) {
            return null;
        }
        name = name
                .replace("Pathfinder Roleplaying Game: ", "")
                .replace("Pathfinder Roleplaying Game ", "")
                .replace("Pathfinder RPG ", "");
        String sanitizedName = StringUtils.sanitize(name);
        return initialize().stream()
                .filter(source -> source.name().equalsIgnoreCase(sanitizedName) || Arrays.stream(source.aliases())
                        .anyMatch(alias -> alias.equalsIgnoreCase(sanitizedName)))
                .findFirst()
                .orElse(null);
    }

    private static int generate(String sourceCode) {
        return Integer.parseInt(sourceCode.substring(3));
    }

    private static List<SourceId> sourceList;

    private static List<SourceId> initialize() {
        if (sourceList != null) {
            return sourceList;
        }

        final String path = "db/sources.yml";
        log.info("Initializing sources DB");

        var objectMapper = new ObjectMapper(new YAMLFactory()
                .disable(YAMLGenerator.Feature.WRITE_DOC_START_MARKER))
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
                .findAndRegisterModules()
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false)
                .registerModule(new PathfinderJsonModule());

        try (InputStream is = ClassLoader.getSystemResourceAsStream(path)) {
            if (is == null) {
                throw new IOException("Unable to open " + path);
            }

            SourceJson[] loaded = objectMapper.readValue(is, SourceJson[].class);
            sourceList = Arrays.stream(loaded).map(SourceJson::toId).toList();
            return sourceList;
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}
