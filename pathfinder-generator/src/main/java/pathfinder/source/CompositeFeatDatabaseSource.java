package pathfinder.source;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import pathfinder.model.Feat;

@Primary
@Component
@RequiredArgsConstructor
public class CompositeFeatDatabaseSource implements FeatSourceDatabase {
    private final ObjectProvider<FeatSourceDatabase> sources;

    @Override
    public Stream<Feat> stream() throws IOException {
        return sources.stream()
                .flatMap(source -> {
                    try {
                        return source.stream();
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                });
    }
}
