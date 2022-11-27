package pathfinder.scraper;

import java.io.IOException;
import java.net.URL;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public abstract class AbstractWebScraper<T> implements WebScraper<T> {
    private static final int TIMEOUT_MS = 5000;

    protected Document fetch(URL url) throws IOException {
        return Jsoup.parse(url, TIMEOUT_MS);
    }
}
