package pathfinder.v7.generator;

import java.util.stream.Stream;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.v7.model.FeatureV7;

public interface FeatureProviderV7 {
    Stream<FeatureV7> features(SourceId sourceId);
}
