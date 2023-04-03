package pathfinder.scraper.remote.d20pfsrd;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.pathfinder.Sources;
import pathfinder.model.pathfinder.WarpriestBlessing;

@Component
@Slf4j
public class D20pfsrdWarpriestBlessingScraper extends AbstractD20pfsrdHeadingListPageScraper {

    public List<WarpriestBlessing> scrape() {
        Page page = scrape("https://www.d20pfsrd.com/classes/hybrid-classes/warpriest/blessings/");
        return page.sections().stream()
                .flatMap(this::sectionToBlessings)
                .toList();
    }

    private Stream<WarpriestBlessing> sectionToBlessings(Section section) {
        String domain = section.heading();
        String source = Sources.ADVANCED_CLASS_GUIDE.code();

        List<String> parts = new ArrayList<>(section.parts().stream()
                .filter(text -> !text.isBlank())
                .toList());

        if (parts.size() > 0 && parts.get(0).startsWith("Source:")) {
            source = parts.get(0).substring("Source:".length()).trim();
            parts.remove(0);
        }

        final String finalSource = source;
        return parts.stream()
                .map(part -> parseBlessing(domain, part, finalSource))
                .filter(Objects::nonNull);
    }

    private static final Pattern BLESSING_TEXT_PATTERN = Pattern.compile("(?<name>\\w+) \\((?<type>\\w+)\\)[:;]? (?<description>.*)");
    private WarpriestBlessing parseBlessing(String domain, String actionText, String source) {
        Matcher matcher = BLESSING_TEXT_PATTERN.matcher(actionText);
        if (!matcher.find()) {
            log.warn("Invalid blessing: " + actionText);
            return null;
        }

        String name = matcher.group("name");
        String type = matcher.group("type").toUpperCase();
        String description = matcher.group("description");
        return new WarpriestBlessing(domain, name, type, description, source);
    }
}
