package logic.parse.tree;

@FunctionalInterface
public interface TokenMapper<T> {
    T map(String token);
}