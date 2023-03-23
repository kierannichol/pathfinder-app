package pathfinder.scraper.remote.nethys;

import java.io.IOException;
import java.util.function.Predicate;
import lombok.extern.slf4j.Slf4j;
import pathfinder.scraper.remote.AbstractWebScraper;
import pathfinder.scraper.remote.Element;
import pathfinder.scraper.remote.Element.HtmlElement;
import pathfinder.scraper.remote.Elements;
import pathfinder.scraper.remote.WebPage;
import pathfinder.scraper.remote.WebPage.FormDataBody;

@Slf4j
public class AbstractNethysScraper2 extends AbstractWebScraper {
    enum SearchTarget {
        CLASSES(1),
        SPELLS(13);

        private final int code;

        SearchTarget(int code) {
            this.code = code;
        }
    }

    protected HtmlElement search(String searchTest, SearchTarget... targets) throws IOException {

        FormDataBody body = FormDataBody.create()
                .add("__VIEWSTATE", "/wEPDwUKMTYxOTY0NjY3OGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFhIFHmN0bDAwJE1haW5Db250ZW50JENoZWNrQm94X1BGUwUtY3RsMDAkTWFpbkNvbnRlbnQkQ2hlY2tCb3hMaXN0X1NlYXJjaEVuZ2luZSQwBS1jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDEFLWN0bDAwJE1haW5Db250ZW50JENoZWNrQm94TGlzdF9TZWFyY2hFbmdpbmUkMgUtY3RsMDAkTWFpbkNvbnRlbnQkQ2hlY2tCb3hMaXN0X1NlYXJjaEVuZ2luZSQzBS1jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDQFLWN0bDAwJE1haW5Db250ZW50JENoZWNrQm94TGlzdF9TZWFyY2hFbmdpbmUkNQUtY3RsMDAkTWFpbkNvbnRlbnQkQ2hlY2tCb3hMaXN0X1NlYXJjaEVuZ2luZSQ2BS1jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDcFLWN0bDAwJE1haW5Db250ZW50JENoZWNrQm94TGlzdF9TZWFyY2hFbmdpbmUkOAUtY3RsMDAkTWFpbkNvbnRlbnQkQ2hlY2tCb3hMaXN0X1NlYXJjaEVuZ2luZSQ5BS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDEwBS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDExBS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDEyBS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDEzBS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDE0BS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDE1BS5jdGwwMCRNYWluQ29udGVudCRDaGVja0JveExpc3RfU2VhcmNoRW5naW5lJDE1upgncIJl3RzV+xjA7WvmM1lMc1M=")
                .add("__EVENTARGUMENT", "")
                .add("__VIEWSTATEGENERATOR", "")
                .add("ctl00$MainContent$RadioButtonList_Format", "Separate results by commas")
                .add("ctl00$MainContent$Button_RunSearch", "Search")
                .add("ctl00$MainContent$TextBox_SearchString", searchTest);

        for (SearchTarget target : targets) {
            body.add("ctl00$MainContent$CheckBoxList_SearchEngine$" + target.code, "on");
        }

        WebPage webPage = WebPage.post("https://www.aonprd.com/SearchOld.aspx", body);
        return webPage.getElementById("ctl00_MainContent_Label_Output");
    }

    protected String findLinedContent(Element root, String label) {
        Element startElement = root.children().withExactText(label).first();
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

    protected Elements findFrameContentElements(Element root, String label) {
        Element startElement = root.children().withExactText(label)
                .filter(element -> element.is("h3.framing"))
                .first();

        if (startElement == null || !startElement.is("h3.framing")) {
            return Elements.empty();
        }
        return findElementsBetween(
                startElement,
                this::elementIsEndOfContent);
    }

    protected Elements selectSectionElements(Element start) {
        return findElementsBetween(start, this::elementIsEndOfContent);
    }

    protected String findFrameContent(Element root, String label) {
        Element startElement = root.children()
                .withExactText(label)
                .filter(element -> element.is("h3.framing"))
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
        Elements elements = Elements.empty();
        Element next = from.next();
        while (next != null && untilFn.test(next)) {
            elements.add(next);
            next = next.next();
        }
        return elements;
    }

    protected String findTextBetween(Element from, Predicate<Element> untilFn) {
        StringBuilder found = new StringBuilder();
        Element next = from.next();
        while (next != null && untilFn.test(next)) {
            found.append(next.text());
            next = next.next();
        }
        return found.toString();
    }

    protected WebPage fetchLink(String href) {
        return WebPage.get("https://www.aonprd.com/" + href.replace(" ", "+"));
    }

}
