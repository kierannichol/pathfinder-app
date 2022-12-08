package pathfinder.source.scraper;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.jsoup.nodes.Node;
import org.jsoup.nodes.TextNode;

public abstract class Element {
    public static Element of(org.jsoup.nodes.Element element) {
        if (element == null) {
            return null;
        }
        return new HtmlElement(element);
    }

    public static Element of(org.jsoup.nodes.Node node) {
        if (node == null) {
            return null;
        }
        if (node instanceof org.jsoup.nodes.Element element) {
            return new HtmlElement(element);
        }
        if (node instanceof TextNode textNode) {
            return new TextNodeElement(textNode);
        }
        return new EmptyNode(node);
    }

    public abstract String text();
    public abstract Element next();
    public abstract Element parent();
    public abstract boolean is(String cssQuery);
    public abstract List<Element> children();

    public ElementSearch search() {
        return ElementSearch.descendantsOf(this);
    }

    @RequiredArgsConstructor
    public static class HtmlElement extends Element {
        private final org.jsoup.nodes.Element element;

        @Override
        public String text() {
            return element.text();
        }

        @Override
        public Element next() {
            return Element.of(element.nextSibling());
        }

        @Override
        public Element parent() {
            return Element.of(element.parent());
        }

        @Override
        public boolean is(String cssQuery) {
            return element.is(cssQuery);
        }

        @Override
        public List<Element> children() {
            return element.childNodes().stream()
                    .map(Element::of)
                    .toList();
        }

        @Override
        public String toString() {
            return element.toString();
        }
    }

    @RequiredArgsConstructor
    private static class TextNodeElement extends Element {
        private final TextNode textNode;

        @Override
        public String text() {
            return textNode.text();
        }

        @Override
        public Element next() {
            return Element.of(textNode.nextSibling());
        }

        @Override
        public Element parent() {
            return Element.of(textNode.parent());
        }

        @Override
        public boolean is(String cssQuery) {
            return false;
        }

        @Override
        public List<Element> children() {
            return textNode.childNodes().stream()
                    .map(Element::of)
                    .toList();
        }

        @Override
        public String toString() {
            return textNode.toString();
        }
    }

    @RequiredArgsConstructor
    private static class EmptyNode extends Element {
        private final Node node;

        @Override
        public String text() {
            return "";
        }

        @Override
        public Element next() {
            return Element.of(node.nextSibling());
        }

        @Override
        public boolean is(String cssQuery) {
            return false;
        }

        @Override
        public List<Element> children() {
            return node.childNodes().stream()
                    .map(Element::of)
                    .toList();
        }

        @Override
        public Element parent() {
            return Element.of(node.parent());
        }

        @Override
        public String toString() {
            return node.toString();
        }
    }
}
