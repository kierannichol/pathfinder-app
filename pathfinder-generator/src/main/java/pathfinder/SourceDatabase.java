package pathfinder;

import java.io.IOException;
import java.util.stream.Stream;

public interface SourceDatabase<T> {

    Stream<T> stream() throws IOException;
}
