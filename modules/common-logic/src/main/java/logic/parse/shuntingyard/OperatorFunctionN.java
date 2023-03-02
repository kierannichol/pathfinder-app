package logic.parse.shuntingyard;

import java.util.List;
import logic.ResolvedValue;

public interface OperatorFunctionN {

    ResolvedValue execute(List<ResolvedValue> values);
}
