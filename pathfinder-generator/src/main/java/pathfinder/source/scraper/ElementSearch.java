package pathfinder.source.scraper;

import java.util.List;
import java.util.stream.Stream;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class ElementSearch {
    private final Stream<Element> elements;

    public static ElementSearch descendantsOf(Element element) {
        return new ElementSearch(element.children().stream()
                .flatMap(child -> Stream.concat(Stream.of(child), child.children().stream())));
    }

    public ElementSearch containsText(String text) {
        return new ElementSearch(elements.filter(e -> e.text().contains(text)));
    }

    public ElementSearch hasText(String text) {
        return new ElementSearch(elements.filter(e -> e.text().equals(text)));
    }

    public ElementSearch is(String cssQuery) {
        return new ElementSearch(elements.filter(e -> e.is(cssQuery)));
    }

    public Element first() {
        return elements.findFirst().orElse(null);
    }

    public List<Element> all() {
        return elements.toList();
    }
}
