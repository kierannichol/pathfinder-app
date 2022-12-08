package pathfinder.source.scraper.nethys;

import static pathfinder.util.ElementUtils.nodeText;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import pathfinder.NotCached;
import pathfinder.model.Ability;
import pathfinder.model.Ability.Type;
import pathfinder.model.CharacterChoice;
import pathfinder.model.CharacterEffect;
import pathfinder.model.CharacterEffect.GrantAbility;
import pathfinder.model.CharacterEffect.ModifyFeatureEffect;
import pathfinder.model.CharacterModifier;
import pathfinder.model.Id;
import pathfinder.model.Skills;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.AbilitySourceDatabase;
import pathfinder.source.FeatSourceDatabase;
import pathfinder.source.SorcererBloodlineSourceDatabase;

@Service
@Slf4j
@NotCached
@RequiredArgsConstructor
public class NethysSorcererBloodlineScraper extends AbstractNethysScraper
        implements SorcererBloodlineSourceDatabase, AbilitySourceDatabase {
    private final FeatSourceDatabase featSourceDatabase;

    @Override
    public Stream<CharacterModifier> streamModifiers() throws IOException {
        Element results = search("*", SearchTarget.CLASSES);
        Elements content = selectSectionElements(
                results.getElementsContainingOwnText("Sorcerer - Bloodlines").first());

        return content.select("a").stream()
                .map(a -> scrapeBloodline(a.text(), a.attr("href")))
                .filter(Objects::nonNull);
    }

    @Override
    public Stream<Ability> streamAbilities() throws IOException {
        return streamModifiers()
                .flatMap(modifier -> modifier.effects().stream())
                .flatMap(CharacterEffect::abilities)
                .distinct();
    }

    private CharacterModifier scrapeBloodline(String target, String href) {
        Document document = fetchLink(href);

        Element titleElement = document.select("h1.title:contains(%s)".formatted(target)).first();
        Elements contents = titleElement.nextElementSiblings();

        String name = nodeText(titleElement);
        String id = NameToIdConverter.generateId(AttributeType.BLOODLINE, name);

        String description = nodeText(titleElement.nextElementSiblings().select("br").first().nextSibling());

        String sourceText = findLinedContent(contents, "Source");

        List<CharacterEffect> effects = new ArrayList<>();
        effects.addAll(parseSkills(contents));
        effects.addAll(parseBonusFeats(contents));
        effects.addAll(parseBloodlineArcana(contents, Id.parse(id)));

        return CharacterModifier.builder()
                .name(name)
                .id(id)
                .descriptionText(description)
                .source(parseSource(sourceText))
                .effects(effects)
                .build();
    }

    private List<ModifyFeatureEffect> parseSkills(Elements contents) {
        String classSkillText = findLinedContent(contents, "Class Skill");
        return Skills.ALL.stream()
                .filter(skill -> classSkillText.contains(skill.name()))
                .map(skill -> new CharacterEffect.ModifyFeatureEffect("trained:" + skill.id(), 1))
                .toList();
    }
    private List<CharacterEffect> parseBonusFeats(Elements contents) {
        String bonusFeatText = findLinedContent(contents, "Bonus Feats");

        List<String> bonusFeatIds = Arrays.stream(bonusFeatText.split(","))
                .map(String::trim)
                .map(text -> text.replace(": ", "").replace(".", "").replace("*", "").replace("APG", ""))
                .flatMap(text -> featSourceDatabase.findIdByName(text).stream())
                .toList();

        return List.of(new CharacterEffect.AddChoiceEffect(
                new CharacterChoice.FeatChoice("bloodline_feat", bonusFeatIds)));
    }

    private List<CharacterEffect> parseBloodlineArcana(Elements contents, Id bloodlineId) {
        String description = findLinedContent(contents, "Bloodline Arcana");

        String name = "Bloodline Arcana";
        String id = NameToIdConverter.abilityId(name) + "#" + bloodlineId.key;

        return List.of(
                new GrantAbility(id),
                new CharacterEffect.AddNewAbility(Ability.builder()
                        .id(id)
                        .name(name)
                        .type(Type.NONE)
                        .description(description)
                        .build())
        );
    }
}
