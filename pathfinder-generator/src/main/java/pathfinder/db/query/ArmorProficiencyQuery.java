package pathfinder.db.query;

import java.util.List;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.Armor;
import pathfinder.model.pathfinder.ArmorProficiency;

public class ArmorProficiencyQuery implements Query<ArmorProficiency> {

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

    @Override
    public Stream<ArmorProficiency> query(List<Source> sources,
            CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return Armor.PROFICIENCIES.stream()
                .filter(this::matches);
    }

    private boolean matches(ArmorProficiency armor) {
        if (proficiency != null && !armor.equals(proficiency)) {
            return false;
        }

        return isShield == null || armor.isShield();
    }

    ArmorProficiencyQuery() {

    }
}
