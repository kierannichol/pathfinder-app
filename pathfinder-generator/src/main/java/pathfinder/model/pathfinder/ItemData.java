package pathfinder.model.pathfinder;

import java.util.List;
import java.util.Map;
import pathfinder.model.AttackModification;
import pathfinder.model.Effect;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record ItemData(Id id,
                       String name,
                       String description,
                       String item_type,
                       String price,
                       String weight,
                       String slot,
                       Integer armor_bonus,
                       String armor_type,
                       Integer armor_max_dex,
                       Integer armor_check_penalty,
                       Integer arcane_spell_failure_chance,
                       String armor_enhancement_bonus,
                       Integer caster_level,
                       String magic_aura,
                       String weapon_proficiency_group,
                       String weapon_type,
                       String weapon_damage,
                       String weapon_crit_range,
                       String weapon_damage_type,
                       String weapon_enhancement_bonus,
                       String weapon_range,
                       String weapon_groups,
                       List<String> sources,
                       String destruction,
                       String weapon_special,
                       String armor_special_material,
                       String weapon_special_material,
                       List<Effect> effects,
                       AttackModification attack_mod,
                       Map<String, Integer> stats) implements NamedEntity, FromSourceBook {
}
