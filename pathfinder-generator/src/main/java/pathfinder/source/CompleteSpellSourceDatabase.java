package pathfinder.source;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import pathfinder.NotCached;
import pathfinder.model.Spell;

@Primary
@Component
@RequiredArgsConstructor
@NotCached
public class CompleteSpellSourceDatabase implements SpellSourceDatabase {
    private final ObjectProvider<SpellSourceDatabase> sources;

    @Override
    public Stream<Spell> streamSpells() throws IOException {
        return sources.stream()
                .flatMap(source -> {
                    try {
                        return source.streamSpells();
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                });
    }
}
