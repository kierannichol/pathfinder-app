package pathfinder.generator.db.parse;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Feat.FeatType;
import pathfinder.model.pathfinder.Size;
import pathfinder.model.pathfinder.Skills;
import pathfinder.model.pathfinder.Weapons;

@Component("ID Lookup")
@RequiredArgsConstructor
@Slf4j
public class IdLookup {
    private final List<NamedEntitySource> namedEntitySources;

    private final Map<String, List<Id>> specialNameToId = new HashMap<>();

    private void add(NamedEntity entity) {
        add(entity.name(), entity.id());
    }

    private void add(String name, Id id) {
        specialNameToId.computeIfAbsent(name, key -> new ArrayList<>()).add(id);
    }

    private synchronized void init() {
        if (!specialNameToId.isEmpty()) {
            return;
        }

        log.info("Initializing prerequisite parser");

        // generic terms
        add("proficiency", Id.partial("@proficiency"));

        namedEntitySources.stream()
                .flatMap(NamedEntitySource::namedEntities)
                .forEach(this::add);

        // Weapon Types
        Weapons.ALL_WEAPONS.forEach(weaponType -> add(
                weaponType.name(),
                weaponType.id()));

        // Races
        add("naga", Id.of("race:naga"));
        add("serpentfolk", Id.of("race:serpentfolk"));
        add("wayang", Id.of("race:wayang"));
        add("vishkanya", Id.of("race:vishkanya"));
//        specialNameToId.put("Aasimar", "race:aasimar");
//        specialNameToId.put("goblin", "race:goblin");

        Arrays.stream(Size.values()).forEach(size -> add(size.longName(), Id.partial(Integer.toString(size.id()))));

        List<String> abilityScores = List.of("strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma");
        for (String abilityScore : abilityScores) {
            String firstThree = abilityScore.substring(0, 3);
            add(abilityScore, Id.of(firstThree + "_score"));
            add(firstThree, Id.of(firstThree + "_score"));
        }

        Skills.ALL.forEach(skill -> add(skill.name(), skill.id()));

        // Style feat support
        addFeatTypeToSpecialIds(FeatType.STYLE, "style feat", "style feats");
        addFeatTypeToSpecialIds(FeatType.METAMAGIC, "metamagic feat", "metamagic feats");
        addFeatTypeToSpecialIds(FeatType.CRITICAL, "critical feat", "critical feats");
        addFeatTypeToSpecialIds(FeatType.PERFORMANCE, "performance feat", "performance feats");
        addFeatTypeToSpecialIds(FeatType.TEAMWORK, "teamwork feat", "teamwork feats", "other teamwork feat");
        addFeatTypeToSpecialIds(FeatType.ITEM_CREATION, "item creation feat", "item creation feats");

        add("summon monster", Id.partial(summonMonsterSpellClause()));
        add("summon nature's ally spells", Id.partial(summonNaturesAllyClause()));
        add("summon nature's ally", Id.partial(summonNaturesAllyClause()));

        log.info("Finished initializing prerequisite parser");
    }

    private void addFeatTypeToSpecialIds(FeatType type, String... names) {
        String featsOfType = namedEntities()
                .filter(entity -> entity instanceof Feat)
                .map(Feat.class::cast)
                .filter(feat -> switch (type) {
                    case GRIT -> feat.grit();
                    case CRITICAL -> feat.critical();
                    case RACIAL -> feat.racial();
                    case TEAMWORK -> feat.teamwork();
                    case STYLE -> feat.style();
                    case PERFORMANCE -> feat.performance();
                    default -> false;
                })
                .map(feat -> "@" + feat.id())
                .collect(Collectors.joining(" + "));
        if (featsOfType.isBlank()) {
            featsOfType = "0";
        }

        for (String name : names) {
            add(name, Id.partial("(" + featsOfType + ")"));
        }
    }

    private Stream<NamedEntity> namedEntities() {
        return namedEntitySources.stream()
                .flatMap(NamedEntitySource::namedEntities);
    }

    private String summonNaturesAllyClause() {
        String spells = namedEntities()
                .filter(spell -> spell.name().toLowerCase().startsWith("summon nature's ally"))
                .map(spell -> "@" + spell.id())
                .collect(Collectors.joining(", "));
        if (spells.isBlank()) {
            spells = "0";
        }
        return "any(" + spells + ")";
    }

    private String summonMonsterSpellClause() {
        String spells = namedEntities()
                .filter(spell -> spell.name().toLowerCase().startsWith("summon monster"))
                .map(spell -> "@" + spell.id())
                .collect(Collectors.joining(", "));
        if (spells.isBlank()) {
            spells = "0";
        }
        return "any(" + spells + ")";
    }
}
