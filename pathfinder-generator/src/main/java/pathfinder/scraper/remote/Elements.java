package pathfinder.scraper.remote;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

public class Elements extends ArrayList<Element> {

    public static Elements of(org.jsoup.select.Elements elements) {
        return of(elements.stream().map(Element::of).toList());
    }

    public static Elements of(Element... elements) {
        return of(Arrays.asList(elements));
    }

    public static Elements of(List<Element> elements) {
        return new Elements(elements);
    }

    private Elements(List<Element> elements) {
        super(elements);
    }

    public static Elements empty() {
        return of();
    }

    public Elements filter(Predicate<Element> predicateFn) {
        return Elements.of(stream().filter(predicateFn).toList());
    }

    public <T> List<T> map(Function<Element, T> mapFn) {
        return stream().map(mapFn).toList();
    }

    public Elements containingText(String text) {
        return filter(element -> element.text().contains(text));
    }

    public Elements withExactText(String text) {
        return filter(element -> element.text().equals(text));
    }

    public Element first() {
        if (size() == 0) {
            return null;
        }
        return get(0);
    }
}
