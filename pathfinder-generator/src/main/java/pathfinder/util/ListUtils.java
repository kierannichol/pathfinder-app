package pathfinder.util;

import java.util.List;
import java.util.function.Function;

public class ListUtils {

    public static <T,U> List<U> mapList(List<T> list, Function<T,U> mappingFn) {
        return list.stream().map(mappingFn).toList();
    }

    private ListUtils() {}
}
