package pathfinder.db.migrate;

import java.util.Comparator;
import java.util.List;
import java.util.TreeSet;
import java.util.function.Function;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.CharacterClassLegacy;
import pathfinder.model.pathfinder.Feature;

@Component
public class CharacterClassMigrator extends AbstractMigrator {

    public void migrate() {
        List<CharacterClassLegacy> classList = loadAll("db/class", CharacterClassLegacy.class).toList();
        for (CharacterClassLegacy characterClass : classList) {
            var modified = migrateCharacterClass(characterClass);
            save("class/" + characterClass.id().key + ".yml", modified);
        }
    }

    private CharacterClass migrateCharacterClass(CharacterClassLegacy original) {
        var classFeatures = new TreeSet<>(Comparator.comparing(Feature::id));
        classFeatures.addAll(original.class_features());

        var classSkills = new TreeSet<Id>(Comparator.comparing(Function.identity()));
        classSkills.addAll(original.class_skills());

        return new CharacterClass(
                original.id(),
                original.name(),
                original.category(),
                original.description(),
                original.source(),
                original.hit_die(),
                original.alignment(),
                classSkills,
                original.skill_ranks_per_level(),
                original.bab(),
                original.fort(),
                original.ref(),
                original.will(),
                original.levels(),
                original.spell_caster_types(),
                classFeatures
        );
    }
}
