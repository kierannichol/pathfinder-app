package pathfinder.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

public class StreamCache {
    private static final Map<String, List<?>> cache = new HashMap<>();

    @SuppressWarnings("unchecked")
    public static <T> Stream<T> cache(String id, Stream<T> stream) {
        if (cache.containsKey(id)) {
            return (Stream<T>) cache.get(id).stream();
        }
        List<T> collected = new ArrayList<>();
        return stream
                .peek(collected::add)
                .onClose(() -> {
                    cache.put(id, collected);
                });
    }
}
