package pathfinder.scraper.remote.nethys;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;

@Service
@Slf4j
@NotCached
@RequiredArgsConstructor
public class NethysSorcererBloodlineScraper {
//    private final FeatSourceDatabase featSourceDatabase;
//
//    @Override
//    public Stream<CharacterModifier> streamModifiers() throws IOException {
//        Element results = search("*", SearchTarget.CLASSES);
//        Elements content = selectSectionElements(
//                results.getElementsContainingOwnText("Sorcerer - Bloodlines").first());
//
//        return content.select("a").stream()
//                .map(a -> scrapeBloodline(a.text(), a.attr("href")))
//                .filter(Objects::nonNull);
//    }
//
//    @Override
//    public Stream<Ability> streamAbilities() throws IOException {
//        return streamModifiers()
//                .flatMap(modifier -> modifier.effects().stream())
//                .flatMap(CharacterEffect::abilities)
//                .distinct();
//    }
//
//    private CharacterModifier scrapeBloodline(String target, String href) {
//        Document document = fetchLink(href);
//
//        Element titleElement = document.select("h1.titleText:contains(%s)".formatted(target)).first();
//        Elements contents = titleElement.nextElementSiblings();
//
//        String name = nodeText(titleElement);
//        String id = NameToIdConverter.generateId(AttributeType.SORCERER_BLOODLINE, name);
//
//        String description = nodeText(titleElement.nextElementSiblings().select("br").first().nextSibling());
//
//        String sourceText = findLinedContent(contents, "Source");
//
//        List<CharacterEffect> effects = new ArrayList<>();
//        effects.addAll(parseSkills(contents));
//        effects.addAll(parseBonusFeats(contents));
//        effects.addAll(parseBloodlineArcana(contents, Id.of(id)));
//
//        return CharacterModifier.builder()
//                .name(name)
//                .id(id)
//                .descriptionText(description)
//                .source(parseSource(sourceText))
//                .effects(effects)
//                .build();
//    }
//
//    private List<IncrementFeatureEffect> parseSkills(Elements contents) {
//        String classSkillText = findLinedContent(contents, "Class Skill");
//        return Skills.ALL.stream()
//                .filter(skill -> classSkillText.contains(skill.name()))
//                .map(skill -> new IncrementFeatureEffect(1, "trained:" + skill.id(), 1))
//                .toList();
//    }
//
//    private List<CharacterEffect> parseBonusFeats(Elements contents) {
//        String bonusFeatText = findLinedContent(contents, "Bonus Feats");
//
//        List<String> bonusFeatIds = Arrays.stream(bonusFeatText.split(","))
//                .map(String::trim)
//                .map(text -> text.replace(": ", "").replace(".", "").replace("*", "").replace("APG", ""))
//                .flatMap(text -> featSourceDatabase.findIdByName(text).stream())
//                .toList();
//
////        return List.of(new ReplaceFeature("ability:bloodline_feat#sorcerer",
////                level -> new AddChoiceEffect(level, new FeatChoice("bloodline_feat", bonusFeatIds))));
//        return List.of();
//
////        List<CharacterEffect> bonusFeats = new ArrayList<>();
////        for (int level = 7; level <= 20; level += 6) {
////            bonusFeats.add(new CharacterEffect.AddChoiceEffect(level, new FeatChoice(
////                    "bloodline_feat",
////                    bonusFeatIds)));
////        }
////        return bonusFeats;
//    }
//
//    private List<CharacterEffect> parseBloodlineArcana(Elements contents, Id bloodlineId) {
//        String description = findLinedContent(contents, "Bloodline Arcana");
//
//        String name = "Bloodline Arcana";
//        String id = NameToIdConverter.abilityId(name) + "#" + bloodlineId.key;
//
//        return List.of(
//                new GrantAbility(1, id),
//                new CharacterEffect.AddNewAbility(1, Ability.builder()
//                        .id(id)
//                        .name(name)
//                        .type(Type.NONE)
//                        .description(description)
//                        .build())
//        );
//    }
}
