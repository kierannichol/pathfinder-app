package logic.parse.shuntingyard;

import logic.ResolvedValue;

public record Operator2(String name, int precedence, Associativity associativity, OperatorFunction2 fn) implements Operator, OperatorFunction2 {

    @Override
    public ResolvedValue execute(ResolvedValue a1, ResolvedValue a2) {
        return fn.execute(a1, a2);
    }

    @Override
    public String toString() {
        return associativity == Associativity.LEFT
                ? "a " + name + " b"
                : "b " + name + " a";
    }
}
