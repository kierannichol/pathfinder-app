package pathfinder.util;

import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.nodes.TextNode;

public class ElementUtils {

    public static String nodeText(Node node) {
        if (node instanceof Element element) {
            return StringUtils.sanitize(element.text());
        }
        if (node instanceof TextNode textNode) {
            return StringUtils.sanitize(textNode.getWholeText());
        }
        return "";
    }
}
