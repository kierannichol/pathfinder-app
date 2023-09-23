package pathfinder.db;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.fasterxml.jackson.dataformat.yaml.YAMLGenerator;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Stream;
import java.util.stream.Stream.Builder;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.Source;
import pathfinder.model.json.PathfinderJsonModule;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.BloodlineWithoutClassId;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.FromSourceBook;
import pathfinder.model.pathfinder.Race;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Sources;
import pathfinder.model.pathfinder.Spell;

@Component
public class LocalPathfinderDatabaseLoader {

    private final ObjectMapper objectMapper;

    public PathfinderDatabase load() {
        Set<SourceId> sourceSet = new HashSet<>();
        Map<SourceId, List<CharacterClass>> classesBySource = new HashMap<>();
        Map<SourceId, List<Feat>> featsBySource = new HashMap<>();
        Map<SourceId, List<Bloodline>> bloodlinesBySource = new HashMap<>();

        loadFeats().forEach(featData -> {
                    SourceId sourceId = Sources.findSourceByNameOrCode(featData.source());
                    if (sourceId != null) {
                        sourceSet.add(sourceId);
                        featsBySource.computeIfAbsent(sourceId, key -> new ArrayList<>()).add(featData);
                    }
                });

        loadClasses().forEach(classData -> {
            SourceId sourceId = Sources.findSourceByNameOrCode(classData.source());
            if (sourceId != null) {
                sourceSet.add(sourceId);
                classesBySource.computeIfAbsent(sourceId, key -> new ArrayList<>()).add(classData);
            }
        });

        Map<SourceId, List<Archetype>> archetypesBySource = new HashMap<>();
        Map<SourceId, List<Spell>> spellsBySource = new HashMap<>();
        Map<SourceId, List<Race>> racesBySource = new HashMap<>();
        Map<SourceId, List<ClassFeature>> classFeaturesBySource = new HashMap<>();

        loadAllBySource("db/archetype", Archetype.class, archetypesBySource);
        loadAllBySource("db/spell", Spell.class, spellsBySource);
        loadAllBySource("db/witch_hex", Spell.class, spellsBySource);
        loadAllBySource("db/race", Race.class, racesBySource);

        loadAllClassFeaturesBySource("db/discovery", Id.of("class:alchemist"), classFeaturesBySource, Sources.ADVANCED_PLAYERS_GUIDE);
        loadAllClassFeaturesBySource("db/arcanist_exploit", Id.of("class:arcanist"), classFeaturesBySource, Sources.ADVANCED_PLAYERS_GUIDE);
        loadAllClassFeaturesBySource("db/magus_arcana", Id.of("class:magus"), classFeaturesBySource, Sources.ULTIMATE_MAGIC);
        loadAllClassFeaturesBySource("db/mercy", Id.of("class:paladin"), classFeaturesBySource, Sources.CORE);
        loadAllClassFeaturesBySource("db/rage_power", Id.of("class:barbarian"), classFeaturesBySource, Sources.CORE);
        loadAllClassFeaturesBySource("db/rogue_talent", Id.of("class:rogue"), classFeaturesBySource, Sources.CORE);
        loadAllClassFeaturesBySource("db/slayer_talent", Id.of("class:slayer"), classFeaturesBySource, Sources.ADVANCED_CLASS_GUIDE);

        loadAllBySourceThenMap("db/sorcerer_bloodline", BloodlineWithoutClassId.class, bloodlinesBySource,
                bloodline -> bloodline.withClassId(Id.of("class:sorcerer")));
        loadAllBySourceThenMap("db/bloodrager_bloodline", BloodlineWithoutClassId.class, bloodlinesBySource,
                bloodline -> bloodline.withClassId(Id.of("class:bloodrager")));

        List<Source> sources = new ArrayList<>();
        sourceSet.forEach(sourceId -> sources.add(new Source(
                sourceId,
                classesBySource.getOrDefault(sourceId, List.of()),
                classFeaturesBySource.getOrDefault(sourceId, List.of()),
                archetypesBySource.getOrDefault(sourceId, List.of()),
                spellsBySource.getOrDefault(sourceId, List.of()),
                featsBySource.getOrDefault(sourceId, List.of()),
                racesBySource.getOrDefault(sourceId, List.of()),
                bloodlinesBySource.getOrDefault(sourceId, List.of())
        )));

        return new PathfinderDatabase(sources);
    }

    private Stream<Feat> loadFeats() {
        return loadAll("db/feat", Feat.class);
    }

    private Stream<CharacterClass> loadClasses() {
        return loadAll("db/class", CharacterClass.class);
    }

    public LocalPathfinderDatabaseLoader() {

        this.objectMapper = new ObjectMapper(new YAMLFactory()
                .disable(YAMLGenerator.Feature.WRITE_DOC_START_MARKER))
                .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
                .findAndRegisterModules()
                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
                .configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false)
                .registerModule(new PathfinderJsonModule());
    }

    private void loadAllClassFeaturesBySource(String path, Id classId, Map<SourceId, List<ClassFeature>> bySource, SourceId sourceId) {
        loadAll(path, Feature.class).forEach(data -> {
            SourceId actualSourceId = sourceId;

            if (data.source() != null) {
                actualSourceId = Sources.findSourceByNameOrCode(data.source());
            }
            if (actualSourceId != null) {
                var classFeature = new ClassFeature(
                        data.id(),
                        data.name(),
                        data.label(),
                        data.type(),
                        classId,
                        data.description(),
                        data.prerequisites(),
                        data.effects(),
                        actualSourceId.code()
                );
                bySource.computeIfAbsent(actualSourceId, key -> new ArrayList<>()).add(classFeature);
            }
        });
    }

    private void loadClassFeaturesBySource(String path, Id classId, Map<SourceId, List<ClassFeature>> bySource, SourceId sourceId) {
        load(path, Feature[].class).forEach(data -> {
            SourceId actualSourceId = sourceId;

            if (data.source() != null) {
                actualSourceId = Sources.findSourceByNameOrCode(data.source());
            }
            if (actualSourceId != null) {
                var classFeature = new ClassFeature(
                        data.id(),
                        data.name(),
                        data.label(),
                        data.type(),
                        classId,
                        data.description(),
                        data.prerequisites(),
                        data.effects(),
                        actualSourceId.code()
                );
                bySource.computeIfAbsent(actualSourceId, key -> new ArrayList<>()).add(classFeature);
            }
        });
    }

    private <T extends FromSourceBook> void loadBySource(String path, Class<T[]> type, Map<SourceId, List<T>> bySource) {
        load(path, type).forEach(classData -> {
            SourceId sourceId = Sources.findSourceByNameOrCode(classData.source());
            if (sourceId != null) {
                bySource.computeIfAbsent(sourceId, key -> new ArrayList<>()).add(classData);
            }
        });
    }

    private <T extends FromSourceBook> void loadAllBySource(String path, Class<T> type, Map<SourceId, List<T>> bySource) {
        loadAll(path, type).forEach(classData -> {
            SourceId sourceId = Sources.findSourceByNameOrCode(classData.source());
            if (sourceId != null) {
                bySource.computeIfAbsent(sourceId, key -> new ArrayList<>()).add(classData);
            }
        });
    }

    private <T extends FromSourceBook, U> void loadBySourceThenMap(String path, Class<T[]> type, Map<SourceId, List<U>> bySource, Function<T,U> mapper) {
        load(path, type).forEach(classData -> {
            SourceId sourceId = Sources.findSourceByNameOrCode(classData.source());
            if (sourceId != null) {
                bySource.computeIfAbsent(sourceId, key -> new ArrayList<>()).add(mapper.apply(classData));
            }
        });
    }

    private <T extends FromSourceBook, U> void loadAllBySourceThenMap(String path, Class<T> type, Map<SourceId, List<U>> bySource, Function<T,U> mapper) {
        loadAll(path, type).forEach(classData -> {
            SourceId sourceId = Sources.findSourceByNameOrCode(classData.source());
            if (sourceId != null) {
                bySource.computeIfAbsent(sourceId, key -> new ArrayList<>()).add(mapper.apply(classData));
            }
        });
    }

    @SuppressWarnings("unchecked")
    protected <T> Stream<T> load(String path, Class<T[]> type) {
        try (InputStream is = ClassLoader.getSystemResourceAsStream(path)) {
            if (is == null) {
                throw new IOException("Unable to open " + path);
            }

            T[] loaded = objectMapper.readValue(is, type);
            return Arrays.stream(loaded);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    protected <T> Stream<T> loadAll(String path, Class<T> type) {
        File current = null;
        try {
            var dir = new File(ClassLoader.getSystemResource(path).toURI());
            Builder<T> stream = Stream.builder();
            for (File file : Objects.requireNonNull(dir.listFiles())) {
                current = file;
                stream.accept(objectMapper.readValue(file, type));
            }
            return stream.build();
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new UncheckedIOException("Failed to load " + current, e);
        }
    }
}
