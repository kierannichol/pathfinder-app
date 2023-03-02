package pathfinder.source.scraper.d20pfsrd;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component("Spell Page Scraper")
@Slf4j
public class D20pfsrdSpellPageScraper extends AbstractD20pfsrdScraper {

//    public Spell.SpellBuilder scrape(AttributeType attributeType, URL url) throws IOException {
//        Document document = fetch(url);
//        Element main = document.getElementById("article-content");
//        if (main == null) {
//            throw new IllegalStateException("<div id=\"article-content\"> element missing from " + document.title());
//        }
//
//        String name = NameUtils.sanitize(selectText(main, "h1"));
//        String description = selectText(main, ".description");
//        String prerequisites = selectLineBlock(main, "Prerequisite").orElse("");
//        String effect = selectLineBlock(main, "Effect").orElse("");
//        String use = selectLineBlock(main, "Use").orElse("");
//        String activation = selectLineBlock(main, "Activation").orElse("");
//        String cost = selectLineBlock(main, "Cost").orElse("");
//        String note = selectLineBlock(main,"Note").orElse("");
//        String source = selectText(main, ".section15 p");
//        source = source.replaceAll("^(.*?)(?:\\.| ©).*", "$1");;
//
//        Type type = Type.fromAbilityName(name);
//        name = Type.removeTypeFromName(name);
//        name = NameUtils.fixNameOrder(name);
//        String id = NameToIdConverter.generateId(attributeType, name);
//
//        return Spell.builder()
//                .id(id)
//                .name(name)
//                .type(type)
//                .description(StringUtils.sanitize(description))
//                .prerequisites(StringUtils.sanitize(prerequisites))
//                .effect(effect)
//                .use(use)
//                .activation(activation)
//                .cost(cost)
//                .note(StringUtils.sanitize(note))
//                .source(Sources.findSourceByNameOrCode(StringUtils.sanitize(source)));
//    }
}
