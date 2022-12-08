package pathfinder.source.scraper.d20pfsrd;

import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;
import pathfinder.source.scraper.ScrapedFeature;
import pathfinder.util.NameUtils;
import pathfinder.util.StringUtils;

@Component("Feature Page Scraper")
public class D20pfsrdFeaturePageScraper extends AbstractD20pfsrdScraper {

    public Optional<ScrapedFeature> scrape(URL url) throws IOException {
        Document document = fetch(url);
        Element content = contentElement(document);

        String name = NameUtils.sanitize(selectText(content, "h1"));
        String description = selectText(content, ".description");
        String source = selectText(content, ".section15 p");
        source = source.replaceAll("^(.*?)(?:\\.| ©).*", "$1");

        Map<String, String> blocks = new HashMap<>();
        for (Element element : content.select("b")) {
            Element paragraph = element.parent();
            if (paragraph == null || !paragraph.is("p")) {
                continue;
            }

            String heading = element.text();

            String text = paragraph.text()
                    .replace( heading+ ":", "");

            heading = heading
                    .replaceAll("\\(s\\)$", "")
                    .replaceAll("s$", "")
                    .trim();

            heading = StringUtils.sanitize(heading);
            text = StringUtils.sanitize(text);

            blocks.put(heading.toLowerCase(), text);
        }

        if (blocks.isEmpty() && description.isEmpty()) {
            Element nameElement = content.selectFirst("h1");
            if (nameElement != null) {
                Element nextElement = nameElement.nextElementSibling();
                if (nextElement != null) {
                    description = nextElement.text();
                }
            }
        }

        return Optional.of(new ScrapedFeature(
                NameUtils.sanitize(name),
                NameUtils.sanitize(source),
                NameUtils.sanitize(description),
                blocks));
    }
}
