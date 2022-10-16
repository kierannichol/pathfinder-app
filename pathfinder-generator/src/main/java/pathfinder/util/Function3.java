package pathfinder.util;

public interface Function3<T, U, R, S> {
    S apply(T t, U u, R r);
}
