package pathfinder.source.scraper.nethys;

import org.jsoup.nodes.Document;
import pathfinder.source.scraper.Element;

public class NethysPage extends Element.HtmlElement {

    public static NethysPage of(Document document) {
        return new NethysPage(document);
    }

    private NethysPage(Document document) {
        super(document);
    }
}
