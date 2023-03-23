package pathfinder.scraper.remote;

import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.UncheckedIOException;
import org.jsoup.nodes.Document;
import pathfinder.scraper.remote.Element.HtmlElement;

public class WebPage extends HtmlElement {
    private static final int TIMEOUT_MS = 20000;

    public static WebPage get(String url) {
        try {
            Document document = Jsoup.parse(new URL(url), TIMEOUT_MS);
            return new WebPage(document);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    public static WebPage post(String url, PostBody body) {
        try {
            Connection connection = Jsoup.connect(url)
                    .timeout(TIMEOUT_MS);
            body.applyTo(connection);
            Document document = connection.post();
            return new WebPage(document);
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    private WebPage(Document document) {
        super(document);
    }

    public interface PostBody {
        void applyTo(Connection connection);
    }

    public static class FormDataBody implements PostBody {
        private final Map<String, String> data = new HashMap<>();

        public static FormDataBody create() {
            return new FormDataBody();
        }

        public FormDataBody add(String key, String value) {
            this.data.put(key, value);
            return this;
        }

        @Override
        public void applyTo(Connection connection) {
            connection.header("Content-Type", "application/x-www-form-urlencoded");
            connection.data(this.data);
        }

        protected FormDataBody() {}
    }
}
