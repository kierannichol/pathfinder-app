package pathfinder.scraper;

import java.io.IOException;
import java.util.Optional;
import java.util.regex.Pattern;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.nodes.TextNode;

@Slf4j
public abstract class D20pfsrdBaseScraper extends AbstractScraper {
    private static final Pattern COLON_KEY_VALUE = Pattern.compile("\\w+: (\\w+)\\.?");

    protected static String liftColonKeyValue(String text) throws IOException {
        var matcher = COLON_KEY_VALUE.matcher(text);
        if (!matcher.find()) {
            throw new IOException("Invalid colon key-value: " + text);
        }
        return matcher.group(1);
    }

    protected static Optional<String> liftBoldKeyValue(Element root, String key) {
        Element keyElement = root.select("b:contains(" + key + ")").first();
        if (keyElement == null) {
            return Optional.empty();
        }

        Node valueNode = keyElement.nextSibling();
        if (valueNode instanceof TextNode textNode && !textNode.isBlank()) {
            return Optional.of(textNode.text().trim());
        }
        Element valueElement = keyElement.nextElementSibling();
        if (valueElement != null) {
            return Optional.of(valueElement.text().trim());
        }

        return Optional.empty();
//        if (valueNode instanceof TextNode textValueNode) {
//            return Optional.of(textValueNode.text());
//        }
//        if (valueNode instanceof Element elementNode) {
//            return Optional.of(elementNode.text());
//        }
//        throw new IllegalArgumentException("Unknown value node type: " + valueNode);
    }
}
