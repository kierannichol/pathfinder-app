package pathfinder.source;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import pathfinder.NotCached;
import pathfinder.model.Ability;

@Primary
@Component("Complete Ability Source Database")
@RequiredArgsConstructor
@NotCached
public class CompleteAbilitySourceDatabase implements AbilitySourceDatabase {
    private final ObjectProvider<AbilitySourceDatabase> sources;

    @Override
    public Stream<Ability> streamAbilities() throws IOException {
        return sources.stream()
                .flatMap(source -> {
                    try {
                        return source.streamAbilities();
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                });
    }
}
