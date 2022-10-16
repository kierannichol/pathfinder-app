package logic;

import java.util.Optional;
import logic.context.DataContext;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(staticName = "of")
public class StaticResolvable implements Resolvable {
    private final ResolvedValue resolved;

    @Override
    public ResolvedValue resolve() {
        return Optional.ofNullable(resolved).orElse(ResolvedValue.none());
    }

    @Override
    public ResolvedValue resolve(DataContext context) {
        return resolve();
    }
}
