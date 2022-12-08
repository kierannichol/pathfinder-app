package pathfinder.source.scraper.d20pfsrd;

import java.io.IOException;
import java.net.URL;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Component;
import pathfinder.model.Ability.Type;
import pathfinder.model.Sources;
import pathfinder.model.Spell;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.util.NameUtils;
import pathfinder.util.StringUtils;

@Component("Spell Page Scraper")
@Slf4j
public class D20pfsrdSpellPageScraper extends AbstractD20pfsrdScraper {

    public Spell.SpellBuilder scrape(AttributeType attributeType, URL url) throws IOException {
        Document document = fetch(url);
        Element main = document.getElementById("article-content");
        if (main == null) {
            throw new IllegalStateException("<div id=\"article-content\"> element missing from " + document.title());
        }

        String name = NameUtils.sanitize(selectText(main, "h1"));
        String description = selectText(main, ".description");
        String prerequisites = selectBlock(main, "Prerequisite").orElse("");
        String effect = selectBlock(main, "Effect").orElse("");
        String use = selectBlock(main, "Use").orElse("");
        String activation = selectBlock(main, "Activation").orElse("");
        String cost = selectBlock(main, "Cost").orElse("");
        String note = selectBlock(main,"Note").orElse("");
        String source = selectText(main, ".section15 p");
        source = source.replaceAll("^(.*?)(?:\\.| ©).*", "$1");;

        Type type = Type.fromAbilityName(name);
        name = Type.removeTypeFromName(name);
        name = NameUtils.fixNameOrder(name);
        String id = NameToIdConverter.generateId(attributeType, name);

        return Spell.builder()
                .id(id)
                .name(name)
                .type(type)
                .description(StringUtils.sanitize(description))
                .prerequisites(StringUtils.sanitize(prerequisites))
                .effect(effect)
                .use(use)
                .activation(activation)
                .cost(cost)
                .note(StringUtils.sanitize(note))
                .source(Sources.findSourceByNameOrCode(StringUtils.sanitize(source)));
    }
}
