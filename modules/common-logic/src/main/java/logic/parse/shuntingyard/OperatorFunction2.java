package logic.parse.shuntingyard;

import logic.ResolvedValue;

public interface OperatorFunction2 {

    ResolvedValue execute(ResolvedValue a1, ResolvedValue a2);
}
