package pathfinder.scraper.remote.d20pfsrd;

import java.io.IOException;
import java.net.URL;
import java.util.Optional;
import java.util.function.Function;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class D20pfsrdTablePageScraper<T> extends AbstractD20pfsrdTablePageScraper<T> {
    private final String url;
    private final Function<Row, T> transformFn;

    @Override
    protected Optional<T> transformRow(Row row) {
        return Optional.ofNullable(transformFn.apply(row));
    }

    @Override
    protected URL url() throws IOException {
        return new URL(url);
    }
}
