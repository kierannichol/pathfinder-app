package pathfinder.util;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class ListUtils {

    public static <T,U> List<U> mapList(Collection<T> list, Function<T,U> mappingFn) {
        return list.stream().map(mappingFn).toList();
    }

    public static <T,U> Set<U> mapSet(Collection<T> list, Function<T,U> mappingFn) {
        return list.stream().map(mappingFn).collect(Collectors.toSet());
    }

    public static <T> Optional<T> find(List<T> list, Predicate<T> searchFn) {
        return list.stream()
                .filter(searchFn)
                .findFirst();
    }

    public static <T> List<T> filterList(List<T> list, Predicate<T> filterFn) {
        return list.stream()
                .filter(filterFn)
                .toList();
    }

    public static <T> List<T> intersectionOf(List<T> a, List<T> b) {
        return a.stream()
                .filter(b::contains)
                .toList();
    }

    public static <T> List<T> unionOf(List<T> a, List<T> b) {
        var set = new HashSet<T>(a);
        set.addAll(b);
        return List.copyOf(set);
    }

    public static <T> List<T> unionOf(List<T> a, List<T> b, List<T> c) {
        var set = new HashSet<T>(a);
        set.addAll(b);
        set.addAll(c);
        return List.copyOf(set);
    }

    private ListUtils() {}
}
