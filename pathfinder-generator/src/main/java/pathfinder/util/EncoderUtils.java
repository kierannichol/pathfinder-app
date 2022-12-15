package pathfinder.util;

import java.util.Optional;
import java.util.function.Consumer;
import java.util.function.Function;

public class EncoderUtils {

    public static <T> void whenType(Object model, Class<T> type, Consumer<T> actionFn) {
        if (model.getClass().isAssignableFrom(type)) {
            T casted = type.cast(model);
            actionFn.accept(casted);
        }
    }

    public static <T,U> Optional<U> mapType(Object model, Class<T> type, Function<T,U> mapFn) {
        if (model.getClass().isAssignableFrom(type)) {
            T casted = type.cast(model);
            return Optional.of(mapFn.apply(casted));
        }
        return Optional.empty();
    }

    private EncoderUtils() {}
}
