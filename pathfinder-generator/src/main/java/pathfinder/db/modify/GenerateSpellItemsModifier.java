package pathfinder.db.modify;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.AbstractLocalPathfinderDatabaseModifier;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.ItemData;
import pathfinder.model.pathfinder.Spell;

@Slf4j
@Component
@RequiredArgsConstructor
public class GenerateSpellItemsModifier extends AbstractLocalPathfinderDatabaseModifier {
    private final PathfinderDatabase database;

    private static final List<SpellItemClass> POTION_AND_OIL_CLASSES = List.of(
            new SpellItemClass("class:cleric", 25, 50, 300, 750),
            new SpellItemClass("class:druid", 25, 50, 300, 750),
            new SpellItemClass("class:wizard", 25, 50, 300, 750),
            new SpellItemClass("class:sorcerer", 25, 50, 400, 900),
            new SpellItemClass("class:bard", 25, 50, 400, 1050),
            new SpellItemClass("class:paladin", null, 50, 400, 1050),
            new SpellItemClass("class:ranger", null, 50, 400, 1050)
    );

    private static final List<SpellItemClass> SCROLL_CLASSES = List.of(
            new SpellItemClass("class:cleric", 12.5, 25, 150, 375, 700, 1125, 1650, 2275, 3000, 3825),
            new SpellItemClass("class:druid", 12.5, 25, 150, 375, 700, 1125, 1650, 2275, 3000, 3825),
            new SpellItemClass("class:wizard", 12.5, 25, 150, 375, 700, 1125, 1650, 2275, 3000, 3825),
            new SpellItemClass("class:sorcerer", 12.5, 25, 200, 450, 800, 1250, 1800, 2450, 3200, 4050),
            new SpellItemClass("class:bard", 12.5, 25, 200, 525, 1000, 1625, 2400),
            new SpellItemClass("class:paladin", null, 25, 200, 525, 1000),
            new SpellItemClass("class:ranger", null, 25, 200, 525, 1000)
    );

    @Override
    protected void modify() {
        database.query(Query.spells())
                .forEach(spell -> {
                    createPotion(spell).ifPresent(item -> {
                        save("item/" + item.id().key + ".yml", item);
                    });

                    createOil(spell).ifPresent(item -> {
                        save("item/" + item.id().key + ".yml", item);
                    });

                    createScroll(spell).ifPresent(item -> {
                        save("item/" + item.id().key + ".yml", item);
                    });
                });
    }

    private Optional<ItemData> createPotion(Spell spell) {
        return POTION_AND_OIL_CLASSES.stream()
                .flatMap(spellClass -> spellClass.costForSpell(spell).stream())
                .reduce((a, b) -> a.gp.doubleValue() < b.gp.doubleValue() ? a : b)
                .map(cost -> createSpellItem(
                        Id.of("item", "potion_of_" + spell.id().key),
                        "Potion of " + spell.name(),
                        spell.description().text(),
                        "Potion",
                        cost
                ));
    }

    private Optional<ItemData> createOil(Spell spell) {
        return POTION_AND_OIL_CLASSES.stream()
                .flatMap(spellClass -> spellClass.costForSpell(spell).stream())
                .reduce((a, b) -> a.gp.doubleValue() < b.gp.doubleValue() ? a : b)
                .map(cost -> createSpellItem(
                        Id.of("item", "oil_of_" + spell.id().key),
                        "Oil of " + spell.name(),
                        spell.description().text(),
                        "Oil",
                        cost
                ));
    }

    private Optional<ItemData> createScroll(Spell spell) {
        return SCROLL_CLASSES.stream()
                .flatMap(spellClass -> spellClass.costForSpell(spell).stream())
                .reduce((a, b) -> a.gp.doubleValue() < b.gp.doubleValue() ? a : b)
                .map(cost -> createSpellItem(
                        Id.of("item", "scroll_of_" + spell.id().key),
                        "Scroll of " + spell.name(),
                        spell.description().text(),
                        "Scroll",
                        cost
                ));
    }

    private ItemData createSpellItem(Id itemId, String itemName, String description, String itemType, SpellItemCost cost) {
        return new ItemData(
                itemId,
                itemName,
                description,
                itemType,
                cost.gp + " gp",
                "0",
                "None",
                null,
                null,
                null,
                null,
                null,
                null,
                cost.spellLevel,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                cost.sources,
                null,
                null,
                null,
                null,
                List.of(),
                null,
                Map.of()
        );
    }

    private static class SpellItemClass {
        private final Id classId;
        private final Number[] costsPerLevel;

        public SpellItemClass(String classId, Number... costsPerLevel) {
            this.classId = Id.of(classId);
            this.costsPerLevel = costsPerLevel;
        }

        public Optional<SpellItemCost> costForSpell(Spell spell) {
            return spell.levels().stream()
                    .filter(level -> level.classId().equals(classId))
                    .findFirst()
                    .flatMap(level -> {
                        int spellLevel = level.level();
//                        if (costsPerLevel.length <= spellLevel) {
//                            return Optional.empty();
//                        }
                        return Optional.ofNullable(costsPerLevel[spellLevel])
                                .map(cost -> new SpellItemCost(classId,
                                        level.level(),
                                        cost,
                                        spell.sources()));
                    });

//            return spell.levels().stream()
//                    .filter(level -> level.classId().equals(classId))
//                    .findFirst()
//                    .flatMap(level -> {
//                        int spellLevel = level.level();
//                        if (costsPerLevel.length <= spellLevel) {
//                            return Optional.empty();
//                        }
//                        return Optional.ofNullable(costsPerLevel[spellLevel])
//                                .map(cost -> new SpellItemCost(classId,
//                                        level.level(),
//                                        cost,
//                                        spell.sources()));
//                    });
        }
    }

    private record SpellItemCost(Id classId, int spellLevel, Number gp, List<String> sources) {

    }
}
