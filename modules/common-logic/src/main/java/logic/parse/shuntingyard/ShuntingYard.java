package logic.parse.shuntingyard;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;
import logic.Resolvable;
import logic.ResolveException;
import logic.ResolvedValue;
import logic.context.DataContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Slf4j
public class ShuntingYard implements Resolvable {
    private final List<Object> stack;

    @Override
    public ResolvedValue resolve(DataContext context) {
        Stack<Object> localStack = new Stack<>();
        for (Object next : stack) {
            if (next instanceof OperatorFunction0 func) {
                localStack.push(func.execute());
            } else if (next instanceof OperatorFunction1 func) {
                ResolvedValue a = (ResolvedValue) checkedPopParameter(next, 1, localStack);
                localStack.push(func.execute(a));
            } else if (next instanceof OperatorFunction2 func) {
                ResolvedValue b = (ResolvedValue) checkedPopParameter(next, 1, localStack);
                ResolvedValue a = (ResolvedValue) checkedPopParameter(next, 2, localStack);
                localStack.push(func.execute(a, b));
            } else if (next instanceof OperatorFunction3 func) {
                ResolvedValue c = (ResolvedValue) checkedPopParameter(next, 1, localStack);
                ResolvedValue b = (ResolvedValue) checkedPopParameter(next, 2, localStack);
                ResolvedValue a = (ResolvedValue) checkedPopParameter(next, 3, localStack);
                localStack.push(func.execute(a, b, c));
            } else if (next instanceof OperatorFunctionN func) {
                if (localStack.isEmpty()) {
                    throw new ResolveException("Missing arity count for \"" + func + "\"");
                }
                int arity = ((Arity) localStack.pop()).arity();
                List<ResolvedValue> params = new ArrayList<>();
                while (arity-- > 0) {
                    params.add((ResolvedValue) checkedPopParameter(next, arity, localStack));
                }
                localStack.push(func.execute(params));
            } else if (next instanceof Comment comment) {
                localStack.push(comment.fn().execute((ResolvedValue) localStack.pop(), comment.text()));
            } else {
                while (next instanceof Resolvable resolvable) {
                    next = resolvable.resolve(context);
                }
                localStack.push(next);
            }
        }

        if (localStack.isEmpty()) {
            return ResolvedValue.none();
        }

        return (ResolvedValue) localStack.pop();
    }

    private Object checkedPopParameter(Object func, int parameterIndex, Stack<Object> stack) {
        if (stack.isEmpty()) {
            throw new ResolveException("Missing parameter #" + parameterIndex + " for \"" + func + "\"");
        }
        return stack.pop();
    }
}
