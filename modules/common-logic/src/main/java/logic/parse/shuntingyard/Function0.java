package logic.parse.shuntingyard;

import logic.ResolvedValue;

public record Function0(String name, OperatorFunction0 fn) implements Function, OperatorFunction0 {

    public ResolvedValue execute() {
        return fn.execute();
    }

    @Override
    public String toString() {
        return name + "()";
    }
}
