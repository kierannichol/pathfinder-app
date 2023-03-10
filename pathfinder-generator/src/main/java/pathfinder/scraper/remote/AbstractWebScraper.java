package pathfinder.scraper.remote;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Optional;
import org.jsoup.HttpStatusException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import pathfinder.util.StringUtils;

public abstract class AbstractWebScraper implements WebScraper {
    private static final Path CACHED_BASE_PATH = Path.of(System.getProperty("java.io.tmpdir"), "pf-gen/scraped");
    protected static final int TIMEOUT_MS = 20000;

    protected Document fetch(URL url) throws IOException {
        Document cached = cacheRead(url).orElse(null);
        if (cached != null) {
            return cached;
        }

        return cacheWrite(url, Jsoup.parse(url, TIMEOUT_MS));
    }

    protected Document fetchAllow404(URL url) throws IOException {
        Document cached = cacheRead(url).orElse(null);
        if (cached != null) {
            return cached;
        }

        var connection = Jsoup.connect(url.toString())
                .timeout(TIMEOUT_MS)
                .ignoreHttpErrors(true)
                .execute();

        if (connection.statusCode() != 200 && connection.statusCode() != 404) {
            throw new HttpStatusException(connection.statusMessage(), connection.statusCode(), url.toString());
        }
        return cacheWrite(url, connection.parse());
    }

    protected Element findLinkAnchor(Element linkElement) {
        Document document = linkElement.ownerDocument();
        String href = linkElement.attr("href");
        if (document == null || !href.startsWith("#")) {
            return null;
        }
        String anchorName = href.substring(1);
        Element targetElement = document.getElementById(anchorName);
        if (targetElement == null) {
            targetElement = document.selectFirst("a[name=\"%s\"]".formatted(anchorName));
        }
        if (targetElement == null) {
            targetElement = document.selectFirst("a[name=\"%s\"]".formatted(anchorName.substring(0, anchorName.length() - 1)));
        }
        return targetElement;
    }

    protected String selectText(Element root, String selector) {
        Element found = root.selectFirst(selector);
        if (found == null) {
            return "";
        }
        return StringUtils.sanitize(found.text());
    }

    private Optional<Document> cacheRead(URL url) throws IOException {
        Path cachePath = cachePath(url);
        File cacheFile = cachePath.toFile();
        if (!cacheFile.exists()) {
            return Optional.empty();
        }

        String html = Files.readString(cachePath);
        Document document = Document.createShell(url.toString());
        document.html(html);
        return Optional.of(document);
    }

    private Document cacheWrite(URL url, Document document) throws IOException {
        CACHED_BASE_PATH.toFile().mkdirs();
        Path cachePath = cachePath(url);
        Files.writeString(cachePath, document.html());
        return document;
    }

    private Path cachePath(URL url) {
        String fileName = url.toString();
        fileName = fileName.replaceAll("[^a-zA-Z0-9]", "_");
        return CACHED_BASE_PATH.resolve(fileName);
    }
}
