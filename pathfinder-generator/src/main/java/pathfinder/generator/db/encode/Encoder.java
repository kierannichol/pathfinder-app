package pathfinder.generator.db.encode;

import java.util.List;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

public interface Encoder<T,U> {

    U encode(T t);

    default List<U> encodeAll(Iterable<T> ts) {
        return encodeStream(StreamSupport.stream(ts.spliterator(), false))
                .toList();
    }

    default Stream<U> encodeStream(Stream<T> stream) {
        return stream.map(this::encode);
    }
}
