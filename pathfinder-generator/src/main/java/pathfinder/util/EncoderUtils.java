package pathfinder.util;

import java.util.function.Consumer;

public class EncoderUtils {

    public static <T> void whenType(Object model, Class<T> type, Consumer<T> actionFn) {
        if (model.getClass().isAssignableFrom(type)) {
            T casted = type.cast(model);
            actionFn.accept(casted);
        }
    }

    private EncoderUtils() {}
}
