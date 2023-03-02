package pathfinder.model.v4;

import java.util.stream.Stream;

public interface NamedEntitySource {

    Stream<? extends NamedEntity> namedEntities();
}
