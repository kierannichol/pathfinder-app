package pathfinder.scraper.remote.d20pfsrd;

import java.io.IOException;
import java.net.URL;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Feature.Type;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.util.NameUtils;
import pathfinder.util.StringUtils;

@Component("Ability Page Scraper")
public class D20pfsrdAbilityPageScraper extends AbstractD20pfsrdScraper {

    public Feature scrape(AttributeType attributeType, URL url) throws IOException {
        Document document = fetch(url);
        Element main = document.selectFirst("main");
        if (main == null) {
            throw new IllegalStateException("<main> element missing from " + document.title());
        }

        String name = NameUtils.sanitize(selectText(main, "h1"));
        String description = selectText(main, ".description");
        String prerequisites = selectLineBlock(main, "Prerequisite").orElse("");
        String benefit = selectLineBlock(main, "Benefit").orElse("");
        String normal = selectLineBlock(main, "Normal").orElse("");
        String special = selectLineBlock(main, "Special").orElse("");
        String note = selectLineBlock(main,"Note").orElse("");
        String source = selectText(main, ".section15 p");
        source = source.replaceAll("^(.*?)(?:\\.| ©).*", "$1");

        String type = Type.fromFeatureName(name);
        name = Type.removeTypeFromName(name);
        name = NameUtils.fixNameOrder(name);
        Id id = NameToIdConverter.generateId(attributeType, name);

        return Feature.builder()
                .id(id)
                .name(name)
                .type(type)
                .prerequisites(StringUtils.sanitize(prerequisites))
                .description(Description.create(StringUtils.sanitize(description))
                        .addSection("Benefit", StringUtils.sanitize(benefit))
                        .addSection("Normal", StringUtils.sanitize(normal))
                        .addSection("Special", StringUtils.sanitize(special))
                        .addSection("Note", StringUtils.sanitize(note))
                )
                .source(source)
                .build();
    }
}
