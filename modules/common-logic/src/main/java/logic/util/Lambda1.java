package logic.util;

@FunctionalInterface
public interface Lambda1<A,U> {
    U execute(A a);
}
