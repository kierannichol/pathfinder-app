package pathfinder.source.scraper.d20pfsrd;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;
import pathfinder.model.CharacterEffect;
import pathfinder.model.CharacterEffect.ModifyFeatureEffect;
import pathfinder.model.CharacterModifier;
import pathfinder.model.Skill;
import pathfinder.model.Skills;
import pathfinder.model.Spell;
import pathfinder.parser.AttributeType;
import pathfinder.parser.NameToIdConverter;
import pathfinder.source.OracleMysterySourceDatabase;
import pathfinder.source.SpellSourceDatabase;
import pathfinder.util.NameUtils;
import pathfinder.util.StringUtils;

@Service("d20pfsrd Oracle Mystery Scraper")
@RequiredArgsConstructor
public class D20pfsrdOracleMysteryScraper extends AbstractD20pfsrdScraper implements
        OracleMysterySourceDatabase {
    private final SpellSourceDatabase spellSourceDatabase;

    @Override
    public Stream<CharacterModifier> streamModifiers() throws IOException {
        Document document = fetch(
                new URL("https://www.d20pfsrd.com/classes/base-classes/oracle/mysteries/paizo-oracle-mysteries/"));

        Element content = contentElement(document);

        return content.select("a").stream()
                .map(a -> a.attr("href"))
                .map(href -> {
                    try {
                        return scrapeMysteryPage(new URL(href));
                    } catch (IOException e) {
                        throw new UncheckedIOException(e);
                    }
                });
    }

    private CharacterModifier scrapeMysteryPage(URL url) throws IOException {
        Document document = fetch(url);
        Element content = contentElement(document);

        String name = selectText(content, "h1");
        name = NameUtils.fixNameOrder(name);
        String id = NameToIdConverter.generateId(AttributeType.ORACLE_MYSTERY, name);

        String classSkillsText = selectBlock(content, "Class Skill").orElse("");
        String bonusSpellsText = selectBlock(content, "Bonus Spell").orElse("");

        List<CharacterEffect> effects = new ArrayList<>();
        effects.addAll(findAddSkillEffectsFromText(1, classSkillsText));
        effects.addAll(findAddSpellsFromText(bonusSpellsText));

//        return new CharacterModifier(id, name, description, effectText, effects);
        return CharacterModifier.builder()
                .id(id)
                .name(name)
                .effects(effects)
                .build();
    }

    private List<CharacterEffect> findAddSkillEffectsFromText(int level, String text) {
        List<CharacterEffect> found = new ArrayList<>();
        for (Skill skill : Skills.ALL) {
            if (text.contains(skill.name())) {
                found.add(new ModifyFeatureEffect(level,"trained:" + skill.id(), 1));
            }
        }
        return found;
    }

    private List<CharacterEffect> findAddSpellsFromText(String text) throws IOException {
        List<CharacterEffect> found = new ArrayList<>();

        String[] parts = text.split("[,.]");
        for (String part : parts) {
            part = part.trim();
            if (part.isBlank()) {
                continue;
            }
            List<String> spellAndLevel = NameUtils.extractNameAndParentheses(part);
            String spellName = spellAndLevel.get(0);
            int level = spellAndLevel.size() > 1
                    ? StringUtils.parseLevel(spellAndLevel.get(1))
                    : 1;

            String spellId = spellSourceDatabase.streamSpells()
                    .filter(spell -> spell.name().equalsIgnoreCase(spellName))
                    .findFirst()
                    .map(Spell::id)
                    .orElseThrow(() -> new IllegalStateException("Spell not found: " + spellName));

            found.add(new CharacterEffect.ModifyFeatureEffect(1, spellId, 1));
        }

        return found;
    }
}
