package pathfinder.generator.db.local;

import java.util.stream.Stream;
import pathfinder.model.pathfinder.Feature;

public interface FeatureSourceDatabase {

    Stream<Feature> streamFeatures();
}
