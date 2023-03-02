package pathfinder.model;

import java.util.List;
import java.util.Optional;

public class Skills {

    public static Optional<Skill> find(Id id) {
        return ALL.stream()
                .filter(skill -> id.equals(skill.id()))
                .findFirst();
    }
    
    public static final List<Skill> ALL = List.of(
            new Skill(Id.of("skill:acrobatics"), "Acrobatics", true, true, "dex"),
            new Skill(Id.of("skill:appraise"), "Appraise", true, false, "int"),
            new Skill(Id.of("skill:bluff"), "Bluff", true, false, "cha"),
            new Skill(Id.of("skill:climb"), "Climb", true, true, "str"),
            new Skill(Id.of("skill:craft"), "Craft", true, false, "int"),
            new Skill(Id.of("skill:diplomacy"), "Diplomacy", true, false, "cha"),
            new Skill(Id.of("skill:disable_device"), "Disable Device", false, true, "dex"),
            new Skill(Id.of("skill:disguise"), "Disguise", true, false, "cha"),
            new Skill(Id.of("skill:escape_artist"), "Escape Artist", true, true, "dex"),
            new Skill(Id.of("skill:fly"), "Fly", true, true, "dex"),
            new Skill(Id.of("skill:handle_animal"), "Handle Animal", false, false, "cha"),
            new Skill(Id.of("skill:heal"), "Heal", true, false, "wis"),
            new Skill(Id.of("skill:intimidate"), "Intimidate", true, false, "cha"),
            new Skill(Id.of("skill:knowledge_arcana"), "Knowledge (arcana)", false, false, "int"),
            new Skill(Id.of("skill:knowledge_dungeoneering"), "Knowledge (dungeoneering)", false, false, "int"),
            new Skill(Id.of("skill:knowledge_engineering"), "Knowledge (engineering)", false, false, "int"),
            new Skill(Id.of("skill:knowledge_geography"), "Knowledge (geography)", false, false, "int"),
            new Skill(Id.of("skill:knowledge_history"), "Knowledge (history)", false, false, "int"),
            new Skill(Id.of("skill:knowledge_local"), "Knowledge (local)", false, false, "int"),
            new Skill(Id.of("skill:knowledge_nature"), "Knowledge (nature)", false, false, "int"),
            new Skill(Id.of("skill:knowledge_nobility"), "Knowledge (nobility)", false, false, "int"),
            new Skill(Id.of("skill:knowledge_planes"), "Knowledge (planes)", false, false, "int"),
            new Skill(Id.of("skill:knowledge_religion"), "Knowledge (religion)", false, false, "int"),
            new Skill(Id.of("skill:linguistics"), "Linguistics", false, false, "int"),
            new Skill(Id.of("skill:perception"), "Perception", true, false, "wis"),
            new Skill(Id.of("skill:perform"), "Perform", true, false, "cha"),
            new Skill(Id.of("skill:profession"), "Profession", false, false, "wis"),
            new Skill(Id.of("skill:ride"), "Ride", true, true, "dex"),
            new Skill(Id.of("skill:sense_motive"), "Sense Motive", true, false, "wis"),
            new Skill(Id.of("skill:sleight_of_hand"), "Sleight of Hand", false, true, "dex"),
            new Skill(Id.of("skill:spellcraft"), "Spellcraft", false, false, "int"),
            new Skill(Id.of("skill:stealth"), "Stealth", true, true, "dex"),
            new Skill(Id.of("skill:survival"), "Survival", true, false, "wis"),
            new Skill(Id.of("skill:swim"), "Swim", true, true, "str"),
            new Skill(Id.of("skill:use_magic_device"), "Use Magic Device", false, false, "cha")
    );
}
