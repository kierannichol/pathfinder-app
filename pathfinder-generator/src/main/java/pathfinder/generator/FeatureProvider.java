package pathfinder.generator;

import java.util.stream.Stream;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.Feature;

public interface FeatureProvider {
    Stream<Feature> features(SourceId sourceId);
}
