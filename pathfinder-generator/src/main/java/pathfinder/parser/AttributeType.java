package pathfinder.parser;

import lombok.Getter;

public enum AttributeType {
    NONE(""),
    FEAT("feat"),
    ABILITY("ability"),
    CLASS("class"),
    PROFICIENCY("proficiency"),
    WEAPON("weapon"),
    RAGE_POWER("ragepower"),
    ;

    @Getter private final String label;

    AttributeType(String label) {
        this.label = label;
    }
}
