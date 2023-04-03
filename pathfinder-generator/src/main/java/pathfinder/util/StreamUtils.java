package pathfinder.util;

import java.util.HashSet;
import java.util.Set;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;

public class StreamUtils {

    public static <T> Stream<T> concat(Iterable<Stream<T>> streams) {
        Stream<T> combined = Stream.empty();
        for (Stream<T> stream : streams) {
            combined = Stream.concat(combined, stream);
        }
        return combined;
    }

    public static <T,U> Predicate<T> duplicates(Function<T,U> byFn) {
        return new DuplicatePredicate<>(byFn);
    }

    @RequiredArgsConstructor
    private static class DuplicatePredicate<T,U> implements Predicate<T> {
        private final Set<U> existing = new HashSet<>();
        private final Function<T,U> byFn;

        @Override
        public boolean test(T t) {
            U by = byFn.apply(t);
            if (existing.contains(by)) {
                return false;
            }
            existing.add(by);
            return true;
        }
    }
}
