package pathfinder.scraper;

import java.io.IOException;

public interface WebScraper<T> {

    T scrape() throws IOException;
}
