package pathfinder.source.scraper.d20pfsrd;

import java.io.IOException;
import java.net.URL;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;
import pathfinder.model.Ability;
import pathfinder.model.Ability.Type;
import pathfinder.model.Sources;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.util.NameUtils;
import pathfinder.util.StringUtils;

@Component("Ability Page Scraper")
public class D20pfsrdAbilityPageScraper extends AbstractD20pfsrdScraper {

    public Ability scrape(AttributeType attributeType, URL url) throws IOException {
        Document document = fetch(url);
        Element main = document.selectFirst("main");
        if (main == null) {
            throw new IllegalStateException("<main> element missing from " + document.title());
        }

        String name = NameUtils.sanitize(selectText(main, "h1"));
        String description = selectText(main, ".description");
        String prerequisites = selectBlock(main, "Prerequisite").orElse("");
        String benefit = selectBlock(main, "Benefit").orElse("");
        String normal = selectBlock(main, "Normal").orElse("");
        String special = selectBlock(main, "Special").orElse("");
        String note = selectBlock(main,"Note").orElse("");
        String source = selectText(main, ".section15 p");
        source = source.replaceAll("^(.*?)(?:\\.| ©).*", "$1");

        Type type = Type.fromAbilityName(name);
        name = Type.removeTypeFromName(name);
        name = NameUtils.fixNameOrder(name);
        String id = NameToIdConverter.generateId(attributeType, name);

        return Ability.builder()
                .id(id)
                .name(name)
                .type(type)
                .description(StringUtils.sanitize(description))
                .prerequisites(StringUtils.sanitize(prerequisites))
                .benefit(StringUtils.sanitize(benefit))
                .normal(StringUtils.sanitize(normal))
                .special(StringUtils.sanitize(special))
                .note(StringUtils.sanitize(note))
                .source(Sources.findSourceByNameOrCode(source))
                .build();
    }
}
