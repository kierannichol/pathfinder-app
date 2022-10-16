package logic.parse.shuntingyard;

import logic.ResolvedValue;

public record Function1(String name, OperatorFunction1 fn) implements Function, OperatorFunction1 {

    public ResolvedValue execute(ResolvedValue a1) {
        return fn.execute(a1);
    }

    @Override
    public String toString() {
        return name + "(a)";
    }
}
