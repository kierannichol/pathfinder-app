package pathfinder.generator.v5.provider;

import java.util.stream.Stream;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Source;

public interface EntityProvider {

    Stream<Entity> streamEntities(Source source);
}
