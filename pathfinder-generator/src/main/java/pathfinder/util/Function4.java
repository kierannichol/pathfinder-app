package pathfinder.util;

public interface Function4<T, U, R, S, V> {
    V apply(T t, U u, R r, S s);
}
