package pathfinder.source.scraper.d20pfsrd;

import java.util.Optional;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import pathfinder.model.Source;
import pathfinder.model.Sources;
import pathfinder.source.scraper.AbstractWebScraper;
import pathfinder.util.StringUtils;

public abstract class AbstractD20pfsrdScraper extends AbstractWebScraper {

    protected Element contentElement(Document document) {
        Element content = document.getElementById("article-content");
        if (content == null) {
            throw new IllegalStateException("<div id=\"article-content\"> element missing from " + document.title());
        }
        return content;
    }

    protected Optional<String> selectBlock(Element root, String title) {
        Element found = root.getElementsContainingOwnText(title).stream()
                .filter(element -> element.is("b"))
                .findFirst()
                .orElse(null);

        if (found == null) {
            return Optional.empty();
        }
        Element block = found.parent();
        if (block == null) {
            return Optional.empty();
        }
        String text = block.text().replace(found.text() + ":", "");
        text = StringUtils.sanitize(text);
        return Optional.of(text);
    }

    protected Source scrapeSourceFromCopyrightSection(Document document) {
        String source = selectText(document, ".section15");
        source = source.replaceAll("Section 15: Copyright Notice", "");
        source = source.replaceAll("^(.*?)(?:\\.| ©).*", "$1");
        return Sources.findSourceByNameOrCode(source);
    }
}
