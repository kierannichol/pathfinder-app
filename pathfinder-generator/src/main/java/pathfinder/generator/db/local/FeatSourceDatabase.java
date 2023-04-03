package pathfinder.generator.db.local;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Feat;

@Component("Feat Source Database")
public class FeatSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource {

    private final Map<String, Feat> featsByName = new HashMap<>();
    private boolean loaded = false;

    private synchronized void load() {
        if (loaded) {
            return;
        }
        loaded = true;
        load("feat_database.yml", Feat[].class)
                .forEach(feat -> featsByName.put(feat.name().toLowerCase(), feat));
    }

    public Stream<Feat> streamFeats() {
        load();
        return featsByName.values().stream();
    }

    public Optional<Feat> findFeatByName(String name) {
        return Optional.ofNullable(featsByName.get(name.toLowerCase()));
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamFeats();
    }
}
