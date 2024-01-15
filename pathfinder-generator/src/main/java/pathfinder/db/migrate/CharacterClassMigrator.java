package pathfinder.db.migrate;

import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.ComplexFeature.ComplexFeatureBuilder;

@Component
@Slf4j
public class CharacterClassMigrator extends AbstractMigrator {

    public void migrate() {
        List<CharacterClass> classList = loadAll("db/class", CharacterClass.class).toList();
        for (CharacterClass characterClass : classList) {
            var modified = migrateCharacterClass(characterClass);
            save("class/" + characterClass.id().key + ".yml", modified);
        }
    }

    private ComplexFeature migrateCharacterClass(CharacterClass original) {
        ComplexFeatureBuilder complexFeature = ComplexFeature.builder();

        complexFeature.id(original.id());
        complexFeature.name(original.name());
        complexFeature.description(original.description());
        complexFeature.addTag("class");
        complexFeature.addTag(original.category().toLowerCase());
        complexFeature.source(original.source());

        StackBuilder level1 = complexFeature.fixedStack();

        return complexFeature.build();
    }
}
