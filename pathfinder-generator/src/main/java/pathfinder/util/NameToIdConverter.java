package pathfinder.util;

import pathfinder.model.AttributeType;
import pathfinder.model.Id;

public class NameToIdConverter {

    public static Id featId(String name) {
        return generateId(AttributeType.FEAT, name);
    }

    public static Id abilityId(String name) {
        return generateId(AttributeType.ABILITY, name);
    }

    public static Id raceId(String name) {
        return generateId(AttributeType.RACE, name);
    }

    public static Id classId(String name) {
        return generateId(AttributeType.CLASS, name);
    }

    public static Id proficiencyId(String name) {
        return generateId(AttributeType.PROFICIENCY, name);
    }

    public static Id skillId(String name) {
        return generateId(AttributeType.SKILL, name);
    }

    public static Id.Key weaponId(String name) {
        return partialId(name);
//        return generateId(AttributeType.WEAPON, name);
    }

    public static Id.Key partialId(String name) {
        return Id.partial(name
                .toLowerCase()
                .replaceAll(" \\(Su\\)", "")
                .replaceAll(" \\(Sp\\)", "")
                .replaceAll(" \\(Ex\\)", "")
                .replaceAll("/[$a-z0-9]/", "")
                .replaceAll("\'", "")
                .replace(' ', '_')
                .replaceAll(",", "")
                .replace("’", "")
                .replace('/', '_')
                .replaceAll("\\(", "")
                .replaceAll("\\)", "")
                .replaceAll("\\[", "")
                .replaceAll("]", "")
                .replaceAll("!", "")
                .replace('-', '_')
                .replace("&", "and"));
    }

    public static Id generateId(AttributeType type, String name) {
        return Id.of(type.key(), partialId(name));
    }
}
