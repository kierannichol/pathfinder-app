package pathfinder.v6.generator;

import java.util.stream.Stream;
import pathfinder.model.pathfinder.Source;
import pathfinder.v6.model.Feature;

public interface FeatureProvider {
    Stream<Feature> features(Source source);
}
