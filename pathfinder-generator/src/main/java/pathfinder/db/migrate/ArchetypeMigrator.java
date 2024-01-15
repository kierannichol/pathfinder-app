package pathfinder.db.migrate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.pathfinder.Archetype;
import pathfinder.model.pathfinder.ClassModification;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.IdAndLevel;

@Component
@Slf4j
public class ArchetypeMigrator extends AbstractMigrator {
//    private final PathfinderDatabase database;

//    public ArchetypeMigrator(PathfinderDatabase database) {
//        this.database = database;
//    }

    public void migrate() {
        List<Archetype> originalList = loadAll("db/archetype", Archetype.class).toList();
        for (var original : originalList) {
            var modified = migrateArchetype(original);
            save("archetype/" + modified.id().key + "_" + modified.id().option + ".yml", modified);
        }
    }

    private Archetype migrateArchetype(Archetype original) {
        Map<String, Set<String>> splitModifications = new HashMap<>();
        splitModifications.put("the_fighters_armor_proficiency", Set.of(
                "{type}:armor_proficiency#{option}"));
        splitModifications.put("the_fighters_bonus_feats", Set.of(
                "{type}:bonus_feat#{option}"));
        splitModifications.put("the_bonus_feat_gained_at_1st_level", Set.of(
                "{type}:bonus_feat#{option}@1"));
        splitModifications.put("the_bonus_feat_gained_at_4th_level", Set.of(
                "{type}:bonus_feat#{option}@4"));
        splitModifications.put("the_bonus_feat_gained_at_6th_level", Set.of(
                "{type}:bonus_feat#{option}@6"));
        splitModifications.put("the_bonus_feat_gained_at_8th_level", Set.of(
                "{type}:bonus_feat#{option}@8"));
        splitModifications.put("the_bonus_feat_gained_at_12th_level", Set.of(
                "{type}:bonus_feat#{option}@12"));
        splitModifications.put("the_bonus_feat_gained_at_16th_level", Set.of(
                "{type}:bonus_feat#{option}@16"));
        splitModifications.put("all_weapon_training", Set.of(
                "{type}:weapon_training#{option}"));
        splitModifications.put("the_bonus_feats_gained_at_8th_12th_16th", Set.of(
                "{type}:bonus_feat#{option}@8",
                "{type}:bonus_feat#{option}@12",
                "{type}:bonus_feat#{option}@16"));
        splitModifications.put("20th_level", Set.of(
                "{type}:bonus_feat#{option}@20"));
        splitModifications.put("the_fighters_2nd_level_bonus_feat", Set.of(
                "{type}:bonus_feat#{option}@2"));
        splitModifications.put("the_fighters_6th_level_bonus_feat", Set.of(
                "{type}:bonus_feat#{option}@6"));

        // "{type}:armor_training#{option}@3",
        // "{type}:armor_training#{option}@7",
        // "{type}:armor_training#{option}@11",
        // "{type}:armor_training#{option}@15",

        // "{type}:weapon_training#{option}@5",
        // "{type}:weapon_training#{option}@9",
        // "{type}:weapon_training#{option}@13",
        // "{type}:weapon_training#{option}@17"

        Set<String> missed = new HashSet<>();

        List<ClassModification> modifiedModifications = new ArrayList<>();
        List<Feature> modifiedFeatures = new ArrayList<>();
        for (var modification : original.modifications()) {
            Set<IdAndLevel> modifiedRemoves = new HashSet<>();
            for (var toRemove : modification.remove()) {
                Set<String> foundSubstitutions = splitModifications.get(toRemove.id().key);
                if (foundSubstitutions != null) {
                    foundSubstitutions.stream()
                            .map(sub -> sub.replaceAll("\\{type}", toRemove.id().type))
                            .map(sub -> sub.replaceAll("\\{option}", toRemove.id().option))
                            .map(IdAndLevel::parse)
                            .forEach(modifiedRemoves::add);
                    continue;
                }

//                if (database.query(Query.namedEntity(toRemove.id())).findFirst().isEmpty()) {
//                    missed.add(toRemove.id().key);
//                }

                modifiedRemoves.add(toRemove);
            }

            modifiedModifications.add(new ClassModification(
                    modification.add(),
                    modifiedRemoves
            ));
        }

        missed.forEach(log::warn);

        for (var feature : original.features()) {

            modifiedFeatures.add(feature);
        }

        return new Archetype(
                original.id(),
                original.name(),
                original.description(),
                modifiedModifications,
                modifiedFeatures,
                original.source());
    }
}
