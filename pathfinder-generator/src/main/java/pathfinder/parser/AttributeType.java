package pathfinder.parser;

import lombok.Getter;

public enum AttributeType {
    NONE(""),
    FEAT("feat"),
    ABILITY("ability"),
    CLASS("class"),
    RACE("race"),
    PROFICIENCY("proficiency"),
    SKILL("skill"),
    WEAPON("weapon"),
    RAGE_POWER("ragepower"),
    ROGUE_TALENT("roguetalent"),
    MAGUS_ARCANA("magusarcana"),
    ALCHEMIST_DISCOVERY("alchemistdiscovery"),
    SPELL("spell"),
    ;

    @Getter private final String label;

    AttributeType(String label) {
        this.label = label;
    }
}
