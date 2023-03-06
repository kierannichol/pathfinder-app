package pathfinder.scraper.remote.d20pfsrd;

import static pathfinder.util.EncoderUtils.whenType;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Stream;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.nodes.TextNode;
import org.jsoup.select.Elements;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;
import pathfinder.scraper.remote.AbstractWebScraper;
import pathfinder.util.StringUtils;

public abstract class AbstractD20pfsrdScraper extends AbstractWebScraper {

    protected Element contentElement(Document document) {
        Element content = document.getElementById("article-content");
        if (content == null) {
            throw new IllegalStateException("<div id=\"article-content\"> element missing from " + document.title());
        }
        return content;
    }

    protected Optional<String> selectLineBlock(Element root, String title) {
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

    protected Optional<Block> selectSection(Element root, String title) {
        return selectSection(root, "h4", title);
    }

    protected Optional<Block> selectSection(Element root, String tag, String title) {
        Element found = root.getElementsContainingText(title).stream()
                .filter(element -> element.is(tag))
                .findFirst()
                .orElse(null);

        if (found == null) {
            return Optional.empty();
        }

        Elements contentElements = findElementsBetween(found, this::elementIsEndOfSection);
        String contentText = findTextBetween(found, this::elementIsEndOfSection);
        return Optional.of(new Block(
                StringUtils.sanitize(found.text()),
                StringUtils.sanitize(contentText),
                contentElements));
    }

    protected Source scrapeSourceFromCopyrightSection(Document document) {
        String source = selectText(document, ".section15");
        source = source.replaceAll("Section 15: Copyright Notice", "");
        source = source.replaceAll("^(.*?)(?:\\.| ©).*", "$1");
        return Sources.findSourceByNameOrCode(source);
    }

    protected Stream<Block> sections(Element root, String tag) {
        Elements titles = root.select(tag);
        return titles.stream().map(titleElement -> {
            Elements contentElements = findElementsBetween(titleElement, this::elementIsEndOfSection);
            String contentText = findTextBetween(titleElement, this::elementIsEndOfSection);
            return new Block(
                    StringUtils.sanitize(titleElement.text()),
                    StringUtils.sanitize(contentText),
                    contentElements);
        });
    }

    protected Stream<Block> sections(Element root) {
        return sections(root, "h4");
    }

    protected Stream<Block> lineBlocks(Elements section) {
        Elements titles = section.select("b");
        return titles.stream().map(titleElement -> {
            Elements contentElements = findElementsBetween(titleElement, this::elementIsEndOfLineBlock);
            String contentText = findTextBetween(titleElement, this::elementIsEndOfLineBlock);
            return new Block(
                    StringUtils.sanitize(titleElement.text()),
                    StringUtils.sanitize(contentText).replaceFirst("^:\\s+", ""),
                    contentElements);
        });
    }

    protected Optional<String> blockText(List<Block> blocks, String title) {
        return blocks.stream()
                .filter(section -> section.titleText().equalsIgnoreCase(title))
                .findFirst()
                .map(Block::contentText);
    }

    protected Optional<String> blockTextNoPeriod(List<Block> blocks, String title) {
        return blockText(blocks, title)
                .map(StringUtils::trimPeriod);
    }

    protected Optional<String> blockText(Elements content, String title) {
        return lineBlocks(content)
                .filter(section -> section.titleText().equalsIgnoreCase(title))
                .findFirst()
                .map(Block::contentText);
    }

    protected Optional<String> blockTextNoPeriod(Elements content, String title) {
        return blockText(content, title)
                .map(StringUtils::trimPeriod);
    }

    public boolean elementIsEndOfSection(Element element) {
        return element.is("br")
                || element.is("h4")
                || element.is("h3")
                || element.is("h2")
                || element.is("h1")
                || element.is("b")
                || element.is("div.section15")
                || element.is("table")
                || element.is(".table-wrapper");
//                || !element.select("b").isEmpty();
    }

    public boolean elementIsEndOfLineBlock(Element element) {
        return elementIsEndOfSection(element)
                || !element.select("b").isEmpty();
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
        StringBuilder found = new StringBuilder();
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

    public record Block(String titleText, String contentText, Elements contentElements) {}
}
