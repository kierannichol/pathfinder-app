package pathfinder.scraper.remote.nethys;

import static pathfinder.util.EncoderUtils.whenType;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.nodes.TextNode;
import org.jsoup.select.Elements;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;
import pathfinder.scraper.remote.AbstractWebScraper;
import pathfinder.util.StringUtils;

@Slf4j
public class AbstractNethysScraper extends AbstractWebScraper {
    enum SearchTarget {
        CLASSES(1),
        SPELLS(13);

        private final int code;

        SearchTarget(int code) {
            this.code = code;
        }
    }

    protected Element search(String searchTest, SearchTarget... targets) throws IOException {
        var connection = Jsoup.connect("https://www.aonprd.com/SearchOld.aspx")
                .data("__VIEWSTATE", "/wEPDwUKMTYxOTY0NjY3OGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFhIFHmN0bDAwJE1haW5Db250ZW50JENoZWNrQm94X1BGUwUtY3RsMDAkTWFpbkNvbnRlbnQkQ2hlY2tCb3hMaXN0X1NlYXJjaEVuZ2luZSQwBS1jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDEFLWN0bDAwJE1haW5Db250ZW50JENoZWNrQm94TGlzdF9TZWFyY2hFbmdpbmUkMgUtY3RsMDAkTWFpbkNvbnRlbnQkQ2hlY2tCb3hMaXN0X1NlYXJjaEVuZ2luZSQzBS1jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDQFLWN0bDAwJE1haW5Db250ZW50JENoZWNrQm94TGlzdF9TZWFyY2hFbmdpbmUkNQUtY3RsMDAkTWFpbkNvbnRlbnQkQ2hlY2tCb3hMaXN0X1NlYXJjaEVuZ2luZSQ2BS1jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDcFLWN0bDAwJE1haW5Db250ZW50JENoZWNrQm94TGlzdF9TZWFyY2hFbmdpbmUkOAUtY3RsMDAkTWFpbkNvbnRlbnQkQ2hlY2tCb3hMaXN0X1NlYXJjaEVuZ2luZSQ5BS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDEwBS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDExBS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDEyBS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDEzBS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDE0BS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDE1BS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDE1upgncIJl3RzV+xjA7WvmM1lMc1M=")
                .data("__EVENTARGUMENT", "")
                .data("__VIEWSTATEGENERATOR", "")
                .data("ctl00$MainContent$RadioButtonList_Format", "Separate results by commas")
                .data("ctl00$MainContent$Button_RunSearch", "Search")
                .data("ctl00$MainContent$TextBox_SearchString", searchTest);

        for (SearchTarget target : targets) {
            connection = connection.data("ctl00$MainContent$CheckBoxList_SearchEngine$" + target.code, "on");
        }

        Document document = connection.post();
        return document.getElementById("ctl00_MainContent_Label_Output");
    }

    protected String findLinedContent(Elements root, String label) {
        Element startElement = findElementsWithExactText(root, label)
                .first();
        if (startElement == null || !startElement.is("b")) {
            return "";
        }
        String text = findTextBetween(
                startElement,
                this::elementIsEndOfContent)
                .trim();

        if (text.endsWith(";")) {
            text = text.substring(0, text.length()-1);
        }
        return text;
    }

    protected Elements findFrameContentElements(Elements root, String label) {
        Element startElement = findElementsWithExactText(root, label)
                .select("h3.framing")
                .first();
        if (startElement == null || !startElement.is("h3.framing")) {
            return new Elements();
        }
        return findElementsBetween(
                startElement,
                this::elementIsEndOfContent);
    }

    protected Elements findTitledContentElements(Element root, String label) {
        return findTitledContentElements(new Elements(root), label);
    }

    protected Elements findTitledContentElements(Elements root, String label) {
        Element startElement = findElementsWithExactText(root, label)
                .select("h2.titleText")
                .first();
        if (startElement == null || !startElement.is("h2.titleText")) {
            return new Elements();
        }
        return findElementsBetween(
                startElement,
                this::elementIsEndOfContent);
    }

    protected Elements selectSectionElements(Element start) {
        return findElementsBetween(start, this::elementIsEndOfContent);
    }

    protected Elements findFrameContentElements(Element root, String label) {
        return findFrameContentElements(new Elements(root), label);
    }

    protected String findFrameContent(Elements root, String label) {
        Element startElement = findElementsWithExactText(root, label)
                .select("h3.framing")
                .first();
        if (startElement == null || !startElement.is("h3.framing")) {
            return "";
        }
        return findTextBetween(
                startElement,
                this::elementIsEndOfContent);
    }

    public boolean elementIsEndOfContent(Element element) {
        return element.is("br")
                || element.is("h3")
                || element.is("h2")
                || element.is("h1")
                || element.is("b");
    }

    protected Elements findElementsBetween(Element from, Predicate<Element> untilFn) {
        List<Element> elements = new ArrayList<>();
        Element next = from.nextElementSibling();
        while (next != null) {
            if (untilFn.test(next)) {
                break;
            }
            elements.add(next);
            next = next.nextElementSibling();
        }

        return new Elements(elements);
    }

    protected String findTextBetween(Element from, Predicate<Element> untilFn) {
        StringBuilder found = new StringBuilder("");
        Node next = from.nextSibling();
        while (next != null) {
            if (next instanceof Element nextElement && untilFn.test(nextElement)) {
                break;
            }
            whenType(next, TextNode.class, casted -> found.append(casted.text()));
            whenType(next, Element.class, casted -> found.append(casted.text()));
            next = next.nextSibling();
        }
        return StringUtils.sanitize(found.toString());
    }

    protected Elements findElementsWithExactText(Elements elements, String text) {
        List<Element> filtered = elements.stream()
                .filter(element -> element.text().equals(text))
                .toList();
        return new Elements(filtered);
    }

    protected Document fetchLink(String href) {
        try {
            return fetch(new URL("https://www.aonprd.com/" + href.replace(" ", "+")));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    protected Source parseSource(String sourceText) {
        return Sources.findSourceByNameOrCode(sourceText.replaceAll("(.*?) pg. \\d+", "$1"));
    }
}
