package pathfinder.model;

import java.io.Serializable;
import java.util.List;
import pathfinder.model.v4.NamedEntity;

public record D20pfsrdRace(
        Id id,
        String name,
        List<String> abilityScorePlus,
        List<String> abilityScoreMinus,
        String size,
        String type,
        int speed,
        List<String> languages,
        List<String> senses,
        List<String> defensiveTraits,
        List<String> offensiveTraits,
        List<String> skillBonuses,
        List<String> bonusFeats,
        List<String> spsuAbilities) implements
        Serializable, NamedEntity {
}
