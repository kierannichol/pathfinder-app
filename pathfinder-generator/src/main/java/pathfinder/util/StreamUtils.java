package pathfinder.util;

import java.util.stream.Stream;

public class StreamUtils {

    public static <T> Stream<T> concat(Iterable<Stream<T>> streams) {
        Stream<T> combined = Stream.empty();
        for (Stream<T> stream : streams) {
            combined = Stream.concat(combined, stream);
        }
        return combined;
    }
}
