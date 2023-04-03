package pathfinder.generator.convert;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;
import logic.parse.FormulaOptimizer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.generator.parse.PrerequisiteParser;
import pathfinder.model.ChildEntity;
import pathfinder.model.Description;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.Tag;
import pathfinder.model.Tags;
import pathfinder.model.pathfinder.ArmorProficiency;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Sources;
import pathfinder.model.pathfinder.WeaponType;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.util.ListUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class FeatEntityConverter {

    public Stream<Entity> toEntities(Feat feat) {
        try {
            Tags tags = createFeatTags(feat);
            String prerequisiteFormula = prerequisiteParser.extractPrerequisiteFormula(feat.prerequisites());
            if (!feat.multiples()) {
                prerequisiteFormula = prerequisiteFormula.length() > 0
                    ? "(%s) AND !@%s".formatted(prerequisiteFormula, feat.id())
                    : "!@%s".formatted(feat.id());
            }

            Entity entity = Entity.builder()
                    .id(feat.id())
                    .name(feat.name())
                    .tags(tags)
                    .prerequisiteFormula(FormulaOptimizer.optimize(prerequisiteFormula))
                    .description(Description.create(feat.description())
                            .addSection("Goal", feat.goal())
                            .addSection("Benefit", feat.benefit())
                            .addSection("Completion Benefit", feat.completionBenefit())
                            .addSection("Normal", feat.normal())
                            .addSection("Special", feat.special())
                            .addSection("Note", feat.note())
                    )
                    .effect(Effect.addNumber(feat.id(), 1))
                    .source(Sources.findSourceByNameOrCode(feat.source()))
                    .build();

            return tryExplodeEntity(entity);
        } catch (Exception e) {
            log.error("Failed to create feat entity: " + feat.id(), e);
            return Stream.empty();
        }
    }

    private static final Map<Id, List<? extends NamedEntity>> explodedIds = new HashMap<>();

    static {
        List<? extends NamedEntity> shields = Arrays.stream(ArmorProficiency.values())
                .map(armor -> NamedEntity.of(Id.of(armor.id().key), armor.getName()))
                .toList();

        explodedIds.put(Id.of("feat:close_quarters_thrower"), Weapons.ALL_THROWN);
        explodedIds.put(Id.of("feat:crusaders_flurry"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:dazzling_display"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:deadly_stroke"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:disposable_weapon"), ListUtils.unionOf(Weapons.ALL_MELEE, Weapons.ALL_THROWN));
        explodedIds.put(Id.of("feat:dramatic_display"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:false_opening"), Weapons.ALL_RANGED);
        explodedIds.put(Id.of("feat:feral_combat_training"), Weapons.ALL_NATURAL);
        explodedIds.put(Id.of("feat:gory_finish"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:greater_penetrating_strike"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:greater_shield_specialization"), shields);
        explodedIds.put(Id.of("feat:greater_snap_shot"), Weapons.ALL_RANGED);
        explodedIds.put(Id.of("feat:greater_weapon_focus"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:greater_weapon_specialization"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:heros_display"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:impaling_critical"), ListUtils.intersectionOf(Weapons.ALL_PIERCING, Weapons.ALL_MELEE));
        explodedIds.put(Id.of("feat:improved_critical"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:improved_impaling_critical"), ListUtils.intersectionOf(Weapons.ALL_PIERCING, Weapons.ALL_MELEE));
        explodedIds.put(Id.of("feat:improved_snap_shot"), Weapons.ALL_RANGED);
        explodedIds.put(Id.of("feat:improved_whip_mastery"), List.of(Weapons.WHIP, Weapons.WHIP_SCORPION));
        explodedIds.put(Id.of("feat:intimidating_bane"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:master_combat_performer"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:masterful_display"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:penetrating_strike"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:performing_combatant"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:point_blank_master"), Weapons.ALL_RANGED);
        explodedIds.put(Id.of("feat:prone_shooter"), Weapons.ALL_CROSSBOWS);
        explodedIds.put(Id.of("feat:quarterstaff_master"), List.of(Weapons.QUARTERSTAFF));
        explodedIds.put(Id.of("feat:savage_display"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:shatter_defenses"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:shield_specialization"), shields);
        explodedIds.put(Id.of("feat:sling_flail"), List.of(Weapons.SLING));
        explodedIds.put(Id.of("feat:snap_shot"), Weapons.ALL_RANGED);
        explodedIds.put(Id.of("feat:splintering_weapon"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:stage_combatant"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:sword_and_pistol"), Weapons.ALL_RANGED);
        explodedIds.put(Id.of("feat:terrorizing_display"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:tripping_staff"), List.of(Weapons.QUARTERSTAFF));
        explodedIds.put(Id.of("feat:tripping_twirl"), List.of(Weapons.QUARTERSTAFF));
        explodedIds.put(Id.of("feat:twin_thunders"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:twin_thunders_flurry"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:twin_thunders_master"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:weapon_focus"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:weapon_specialization"), Weapons.ALL_WEAPONS);
        explodedIds.put(Id.of("feat:whip_mastery"), List.of(Weapons.WHIP, Weapons.WHIP_SCORPION));
        explodedIds.put(Id.of("feat:greater_whip_mastery"), List.of(Weapons.WHIP, Weapons.WHIP_SCORPION));

        explodedIds.put(Id.of("feat:critical_mastery"), List.of());
        explodedIds.put(Id.of("feat:seize_the_moment"), List.of());
        explodedIds.put(Id.of("feat:sneaking_precision"), List.of());
    }

    private final PrerequisiteParser prerequisiteParser;

    private Stream<Entity> tryExplodeEntity(Entity entity) {
        String prerequisiteFormula = entity.prerequisiteFormula();

        if (explodedIds.containsKey(entity.id())) {
            return explodeForEachNamedEntity(entity);
        }
        if (explodedIds.keySet().stream().anyMatch(featId -> prerequisiteFormula.contains(featId.string()))) {
            return explodeForEachNamedEntity(entity);
        }
        if (prerequisiteFormula.contains("selected_weapon")) {
            return explodeForEachWeaponType(entity, "selected_weapon", Weapons.ALL_WEAPONS);
        }
        if (prerequisiteFormula.contains("selected_shield")) {
            return explodeForEachWeaponType(entity, "selected_shield", List.of(
                    Weapons.SHIELD_LIGHT,
                    Weapons.SHIELD_HEAVY
            ));
        }
        if (prerequisiteFormula.contains("selected_ranged_weapon")) {
            return explodeForEachWeaponType(entity, "selected_ranged_weapon",
                    ListUtils.filterList(Weapons.ALL_WEAPONS, weaponType -> weaponType.range().isRanged()));
        }
        if (prerequisiteFormula.contains("selected_piercing_melee_weapon")) {
            return explodeForEachWeaponType(entity, "selected_piercing_melee_weapon",
                    ListUtils.filterList(Weapons.ALL_WEAPONS, weaponType -> weaponType.range().isMelee()));
        }

        return Stream.of(entity);
    }

    private Stream<Entity> explodeForEachNamedEntity(Entity entity) {
        List<NamedEntity> namedEntities = new ArrayList<>(explodedIds.getOrDefault(entity.id(), List.of()));
//        List<String> source = new ArrayList<>();
//        explodedIds.forEach((key, value) -> {
//            if (entity.prerequisiteFormula().contains(key.string())) {
//                source.add(entity.prerequisiteFormula());
//            }
//        });

//        if (!explodedIds.containsKey(entity.id())) {
//            log.info("explodedIds.put(Id.of(\"%s\"), \"%s\");".formatted(
//                    entity.id().withoutOption().string(),
//                    String.join(", ", source)));
//        }

        return Stream.of(explode(entity, namedEntities));
    }

    private Stream<Entity> explodeForEachWeaponType(Entity entity, String wildcardText, List<WeaponType> weaponTypes) {
        if (!explodedIds.containsKey(entity.id())) {
            log.info("explodedIds.put(Id.of(\"%s\"), \"%s\");".formatted(
                    entity.id().withoutOption().string(), wildcardText));
        }

        return Stream.of(explode(entity, weaponTypes));
    }

    private Entity explode(Entity entity, List<? extends NamedEntity> namedEntities) {
        if (namedEntities.isEmpty()) {
            return entity;
        }

        List<ChildEntity> children = new ArrayList<>();

        for (NamedEntity namedEntity : namedEntities) {
            String searchFormat = "@%s(#\\w*)?";
            Map<String, String> prerequisiteReplacements = new HashMap<>();
            explodedIds.keySet().forEach(key -> prerequisiteReplacements
                    .put(searchFormat.formatted(key),
                            "@" + key.withOption(namedEntity.id().string()).string()));

            prerequisiteReplacements.put("@proficiency:(\\w+)", "@proficiency:" + namedEntity.id().string());

            String prerequisiteFormula = entity.prerequisiteFormula();

            prerequisiteFormula = prerequisiteReplacements.entrySet().stream()
                    .reduce(prerequisiteFormula, (formula, next) ->
                                    formula.replaceAll(next.getKey(), next.getValue()),
                            (a, b) -> a);

            Id id = entity.id().withOption(namedEntity.id().string());
//            exploded.add(
//                    Entity.builder()
//                            .id(id)
//                            .name(entity.name() + ": " + namedEntity.name())
//                            .tags(entity.tags())
//                            .prerequisiteFormula(prerequisiteFormula)
//                            .description(entity.description())
//                            .effect(Effect.addNumber(id, 1))
//                            .build()
//            );

            children.add(ChildEntity.builder()
                    .optionId(namedEntity.id().key)
                    .name(namedEntity.name())
                    .effect(Effect.addNumber(id, 1))
                    .condition(FormulaOptimizer.optimize(prerequisiteFormula))
                    .build());
        }

        return Entity.builder(entity)
                .prerequisiteFormula("")
                .children(children)
                .effects(List.of())
                .build();
//        return exploded.stream();
    }

    private static Tags createFeatTags(Feat feat) {
        Tags tags = Tags.of("feat", feat.type());
        if (feat.critical()) {
            tags = tags.add(Tag.of("critical"));
        }
        if (feat.style()) {
            tags = tags.add(Tag.of("style"));
        }
        if (feat.performance()) {
            tags = tags.add(Tag.of("performance"));
        }
        if (feat.teamwork()) {
            tags = tags.add(Tag.of("teamwork"));
        }
        if (feat.grit()) {
            tags = tags.add(Tag.of("grit"));
        }
        if (feat.racial()) {
            tags = tags.add(Tag.of("racial"));
        }
        if (feat.companion()) {
            tags = tags.add(Tag.of("companion"));
        }
        return tags;
    }
}
