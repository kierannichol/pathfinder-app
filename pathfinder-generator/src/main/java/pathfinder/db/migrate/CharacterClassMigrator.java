package pathfinder.db.migrate;

import java.util.List;
import org.springframework.stereotype.Component;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.CharacterClassLegacy;

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
        return new CharacterClass(
                original.id(),
                original.name(),
                original.category(),
                original.description(),
                original.source(),
                original.hit_die(),
                original.alignment(),
                original.class_skills(),
                original.skill_ranks_per_level(),
                original.bab(),
                original.fort(),
                original.ref(),
                original.will(),
                original.levels(),
                original.spell_caster_types(),
                original.class_features()
        );
    }
}
