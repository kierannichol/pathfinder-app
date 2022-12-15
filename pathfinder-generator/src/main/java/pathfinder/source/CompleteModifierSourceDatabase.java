package pathfinder.source;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import pathfinder.NotCached;
import pathfinder.model.CharacterModifier;

@Primary
@Component
@RequiredArgsConstructor
@NotCached
public class CompleteModifierSourceDatabase implements ModifierSourceDatabase {
    private final ObjectProvider<ModifierSourceDatabase> sources;

    @Override
    public Stream<CharacterModifier> streamModifiers() {
        return sources.stream()
                .flatMap(source -> {
                    try {
                        return source.streamModifiers();
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                });
    }

}
