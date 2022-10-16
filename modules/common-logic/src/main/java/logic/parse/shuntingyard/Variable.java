package logic.parse.shuntingyard;

import logic.Resolvable;
import logic.ResolvedValue;
import logic.context.DataContext;

public record Variable(String key, Resolver resolver) implements Resolvable, Node {

    @Override
    public ResolvedValue resolve(DataContext context) {
        return resolver.resolve(context, key);
    }
}
