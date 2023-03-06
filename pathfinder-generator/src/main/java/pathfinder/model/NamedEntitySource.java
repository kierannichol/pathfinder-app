package pathfinder.model;

import java.util.stream.Stream;

public interface NamedEntitySource {

    Stream<? extends NamedEntity> namedEntities();
}
