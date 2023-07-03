package pathfinder.v6.generator;

import java.util.stream.Stream;
import pathfinder.model.NamedEntity;

public interface NamedFeatureSource {

    Stream<? extends NamedEntity> namedFeatures();
}
