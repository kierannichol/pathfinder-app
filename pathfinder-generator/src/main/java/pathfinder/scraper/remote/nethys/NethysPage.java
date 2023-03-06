package pathfinder.scraper.remote.nethys;

import org.jsoup.nodes.Document;
import pathfinder.scraper.remote.Element;

public class NethysPage extends Element.HtmlElement {

    public static NethysPage of(Document document) {
        return new NethysPage(document);
    }

    private NethysPage(Document document) {
        super(document);
    }
}
