package pathfinder.scraper.remote.d20pfsrd;

import java.util.ArrayList;
import java.util.List;
import pathfinder.scraper.remote.Element;
import pathfinder.scraper.remote.Element.HtmlElement;
import pathfinder.scraper.remote.Elements;
import pathfinder.scraper.remote.WebPage;

public class AbstractD20pfsrdHeadingListPageScraper extends AbstractD20pfsrdScraper {

    public record Page(String title, String description, List<Section> sections) {}

    public record Section(String heading, List<String> parts) {}

    public Page scrape(String url) {
        WebPage webPage = WebPage.get(url);
        HtmlElement content = webPage.getElementById("article-content");

        String title = content.search().is("h1").first().text();

        Element descriptionElement = content.search().is("p").first();
        String description = String.join("\n\n", scrapeParagraphs(descriptionElement));

        List<Section> sections = new ArrayList<>();

        Elements headings = content.search().is("h4").all();
        for (Element heading : headings) {
            String sectionTitle = heading.text();
            List<String> sectionContent = scrapeParagraphs(heading.next());

            sections.add(new Section(sectionTitle, sectionContent));
        }

        return new Page(title, description, sections);
    }

    private List<String> scrapeParagraphs(Element startingAt) {
        List<String> paragraphs = new ArrayList<>();
        Element next = startingAt;
        while (next != null && !next.is("h4")) {
            paragraphs.add(next.text());
            next = next.next();
        }
        return paragraphs;
    }
}
