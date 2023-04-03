package pathfinder.generator.db.local;

import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Feature;

@Component
public class MagusArcanaSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource, FeatureSourceDatabase {

    @Override
    public Stream<Feature> streamFeatures() {
        return load("magus_arcana_database.yml", Feature[].class);
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamFeatures();
    }
}
