package logic.parse.shuntingyard;

import logic.ResolvedValue;
import logic.context.DataContext;

public interface Resolver {
    ResolvedValue resolve(DataContext context, String key);
}
