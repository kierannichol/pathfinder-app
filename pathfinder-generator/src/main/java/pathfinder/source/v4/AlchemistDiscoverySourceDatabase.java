package pathfinder.source.v4;

import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.v4.NamedEntity;
import pathfinder.model.v4.NamedEntitySource;
import pathfinder.model.v4.pathfinder.Feature;

@Component
public class AlchemistDiscoverySourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource {

    public Stream<Feature> streamFeatures() {
        return load("alchemist_discovery_database.yml", Feature[].class);
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamFeatures();
    }
}
