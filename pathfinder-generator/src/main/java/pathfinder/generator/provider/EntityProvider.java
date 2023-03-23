package pathfinder.generator.provider;

import java.util.stream.Stream;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Source;

public interface EntityProvider {

    Stream<Entity> streamEntities(Source source);
}
