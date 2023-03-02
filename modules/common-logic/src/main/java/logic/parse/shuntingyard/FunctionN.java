package logic.parse.shuntingyard;

import java.util.List;
import logic.ResolvedValue;

public record FunctionN(String name, OperatorFunctionN fn) implements Function, OperatorFunctionN {

    public ResolvedValue execute(List<ResolvedValue> values) {
        return fn.execute(values);
    }

    @Override
    public String toString() {
        return name + "(0..n)";
    }
}
