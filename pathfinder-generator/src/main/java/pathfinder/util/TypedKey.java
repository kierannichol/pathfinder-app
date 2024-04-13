package pathfinder.util;

import java.util.Map;
import java.util.function.Function;
import org.apache.logging.log4j.util.Strings;

public class TypedKey<T> {

    public static TypedKey<String> text(String key) {
        return new TypedKey<>(key, str -> str);
    }

    public static TypedKey<Integer> number(String key) {
        return new TypedKey<>(key, str -> {
            if (Strings.isBlank(str) || str.equals("–")) {
                return null;
            }
            return Integer.parseInt(str);
        });
    }

    private final String key;
    private final Function<String, T> parseFn;

    protected TypedKey(String key, Function<String, T> parseFn) {
        this.key = key;
        this.parseFn = parseFn;
    }

    public void putInMap(Map<String, Object> map, String value) {
        map.put(key, parseFn.apply(value));
    }
}
