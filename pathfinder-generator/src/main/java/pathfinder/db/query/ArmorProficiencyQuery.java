package pathfinder.db.query;

import pathfinder.model.pathfinder.ArmorProficiency;

public class ArmorProficiencyQuery {

    private ArmorProficiency proficiency;
    private Boolean isShield;

    public ArmorProficiencyQuery proficiency(ArmorProficiency proficiency) {
        this.proficiency = proficiency;
        return this;
    }

    public ArmorProficiencyQuery shield() {
        this.isShield = true;
        return this;
    }

    public boolean matches(ArmorProficiency armor) {
        if (proficiency != null && !armor.equals(proficiency)) {
            return false;
        }

        if (isShield != null && !armor.isShield()) {
            return false;
        }

        return true;
    }

    ArmorProficiencyQuery() {

    }
}
