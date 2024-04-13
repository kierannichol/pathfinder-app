package pathfinder.scraper;

import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.model.pathfinder.Spell;
import pathfinder.model.pathfinder.Spell.Level;

@Component
@Slf4j
public class ScrollItemDataGenerator extends AbstractSpellItemDataGenerator {

    public ScrollItemDataGenerator(PathfinderDatabase database) {
        super(database);
    }

    @Override
    protected String itemName(Spell spell) {
        return "Scroll of " + spell.name();
    }

    @Override
    protected String itemDescription(Spell spell) {
        return spell.description().text();
    }

    @Override
    protected String itemType() {
        return "Scroll";
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
                    return 12.5;
                case "cleric_1":
                case "druid_1":
                case "wizard_1":
                case "sorcerer_1":
                case "bard_1":
                case "paladin_1":
                case "ranger_1":
                    return 25;

                case "cleric_2":
                case "druid_2":
                case "wizard_2":
                    return 150;
                case "sorcerer_2":
                case "bard_2":
                case "paladin_2":
                case "ranger_2":
                    return 200;

                case "cleric_3":
                case "druid_3":
                case "wizard_3":
                    return 375;
                case "sorcerer_3":
                    return 450;
                case "bard_3":
                case "paladin_3":
                case "ranger_3":
                    return 525;

                case "cleric_4":
                case "druid_4":
                case "wizard_4":
                    return 700;
                case "sorcerer_4":
                    return 800;
                case "bard_4":
                case "paladin_4":
                case "ranger_4":
                    return 1000;

                case "cleric_5":
                case "druid_5":
                case "wizard_5":
                    return 1125;
                case "sorcerer_5":
                    return 1250;
                case "bard_5":
                    return 1625;

                case "cleric_6":
                case "druid_6":
                case "wizard_6":
                    return 1650;
                case "sorcerer_6":
                    return 1800;
                case "bard_6":
                    return 2400;

                case "cleric_7":
                case "druid_7":
                case "wizard_7":
                    return 2275;
                case "sorcerer_7":
                    return 2450;

                case "cleric_8":
                case "druid_8":
                case "wizard_8":
                    return 3000;
                case "sorcerer_8":
                    return 3200;

                case "cleric_9":
                case "druid_9":
                case "wizard_9":
                    return 3825;
                case "sorcerer_9":
                    return 4050;
            }
        }
        return 0;
    }
}
