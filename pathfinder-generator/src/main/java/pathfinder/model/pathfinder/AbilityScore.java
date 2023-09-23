package pathfinder.model.pathfinder;

public enum AbilityScore {
    STR("str", "Strength"),
    DEX("dex", "Dexterity"),
    CON("con", "Constitution"),
    INT("int", "Intelligence"),
    WIS("wis", "Wisdom"),
    CHA("cha", "Charisma");

    private final String shortName;
    private final String longName;

    AbilityScore(String shortName, String longName) {
        this.shortName = shortName;
        this.longName = longName;
    }

    public String shortName() {
        return shortName;
    }

    public String longName() {
        return longName;
    }
}
