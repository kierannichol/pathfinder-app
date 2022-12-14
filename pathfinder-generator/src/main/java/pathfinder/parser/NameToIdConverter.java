package pathfinder.parser;

public class NameToIdConverter {

    public static String featId(String name) {
        return generateId(AttributeType.FEAT, name);
    }

    public static String abilityId(String name) {
        return generateId(AttributeType.ABILITY, name);
    }

    public static String raceId(String name) {
        return generateId(AttributeType.RACE, name);
    }

    public static String classId(String name) {
        return generateId(AttributeType.CLASS, name);
    }

    public static String proficiencyId(String name) {
        return generateId(AttributeType.PROFICIENCY, name);
    }

    public static String skillId(String name) {
        return generateId(AttributeType.SKILL, name);
    }

    public static String weaponId(String name) {
        return partialId(name);
//        return generateId(AttributeType.WEAPON, name);
    }

    public static String partialId(String name) {
        return name
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
                .replace("&", "and");
    }

    public static String generateId(AttributeType type, String name) {
        return type.key() + ":" + partialId(name);
    }
}
