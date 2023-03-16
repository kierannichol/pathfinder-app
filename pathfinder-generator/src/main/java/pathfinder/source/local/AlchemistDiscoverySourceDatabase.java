package pathfinder.source.local;

import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Feature;

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