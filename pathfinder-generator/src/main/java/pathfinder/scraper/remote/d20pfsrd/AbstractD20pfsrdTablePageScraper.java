package pathfinder.scraper.remote.d20pfsrd;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.Optional;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import pathfinder.util.StringUtils;

public abstract class AbstractD20pfsrdTablePageScraper<T> extends AbstractD20pfsrdScraper {

    protected abstract Optional<T> transformRow(Row row) throws IOException;
    protected abstract URL url() throws IOException;

    public Stream<T> stream() throws IOException {
        Document document = fetch(url());
        Element main = document.selectFirst("main");
        if (main == null) {
            throw new IllegalStateException("<main> element missing from " + document.title());
        }

        return scrape(main);
    }

    private Stream<T> scrape(Element root) {
        Elements tableRows = root.select("table[border=1] tbody tr");
        return tableRows.stream().flatMap(row -> {
            Elements columns = row.select("td");
            try {
                return transformRow(new Row(columns)).stream();
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
        });
    }

    @RequiredArgsConstructor
    public static class Row {
        private final Elements elements;

        public String text(int index) {
            String text = StringUtils.sanitize(element(index).text());
            return text.equals("--") ? "" : text;
        }

        public Element element(int index) {
            return elements.get(index);
        }

        public int size() {
            return elements.size();
        }
    }
}
