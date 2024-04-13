package pathfinder.scraper;

import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.model.pathfinder.Spell;
import pathfinder.model.pathfinder.Spell.Level;

@Component
@Slf4j
public class PotionItemDataGenerator extends AbstractSpellItemDataGenerator {

    public PotionItemDataGenerator(PathfinderDatabase database) {
        super(database);
    }

    @Override
    protected String itemName(Spell spell) {
        return "Potion of " + spell.name();
    }

    @Override
    protected String itemDescription(Spell spell) {
        return spell.description().text();
    }

    @Override
    protected String itemType() {
        return "Potion";
    }

    @Override
    protected String itemWeight() {
        return "0";
    }

    @Override
    protected double itemCost(List<Level> spellLevels) {
        for (var level : spellLevels) {
            String key = level.classId().key + "_" + level.level();

            switch (key) {
                case "cleric_0":
                case "druid_0":
                case "wizard_0":
                case "sorcerer_0":
                case "bard_0":
                    return 375;
                case "cleric_1":
                case "druid_1":
                case "wizard_1":
                case "sorcerer_1":
                case "bard_1":
                case "paladin_1":
                case "ranger_1":
                    return 750;

                case "cleric_2":
                case "druid_2":
                case "wizard_2":
                    return 4500;
                case "sorcerer_2":
                case "bard_2":
                case "paladin_2":
                case "ranger_2":
                    return 6000;

                case "cleric_3":
                case "druid_3":
                case "wizard_3":
                    return 11250;
                case "sorcerer_3":
                    return 13500;
                case "bard_3":
                case "paladin_3":
                case "ranger_3":
                    return 15750;

                case "cleric_4":
                case "druid_4":
                case "wizard_4":
                    return 21000;
                case "sorcerer_4":
                    return 24000;
                case "bard_4":
                case "paladin_4":
                case "ranger_4":
                    return 30000;
            }
        }
        return 0;
    }
}
