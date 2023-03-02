package pathfinder.generator.v4;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.data.v4.EntityDatabaseDbo;
import pathfinder.data.v4.EntityDbo;
import pathfinder.data.v4.EntitySummaryDbo;
import pathfinder.generator.db.parse.PrerequisiteParserV4;
import pathfinder.model.ArmorProficiency;
import pathfinder.model.Id;
import pathfinder.model.Sources;
import pathfinder.model.Weapons;
import pathfinder.model.v4.ChildEntity;
import pathfinder.model.v4.Description;
import pathfinder.model.v4.Effect;
import pathfinder.model.v4.Entity;
import pathfinder.model.v4.NamedEntity;
import pathfinder.model.v4.Tag;
import pathfinder.model.v4.Tags;
import pathfinder.model.v4.pathfinder.Feat;
import pathfinder.parser.db.WeaponType;
import pathfinder.source.v4.FeatSourceDatabase;
import pathfinder.util.ListUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class FeatDatabaseGenerator extends AbstractDatabaseGenerator<Entity, EntitySummaryDbo, EntityDbo> {

    private static final Map<Id, List<? extends NamedEntity>> explodedIds = new HashMap<>();

    static {
        List<? extends NamedEntity> shields = Arrays.stream(ArmorProficiency.values())
                .map(armor -> NamedEntity.of(Id.of(armor.id().key), armor.getName()))
                .toList();

        explodedIds.put(Id.of("feat:close_quarters_thrower"), Weapons.ALL_RANGED);
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
        explodedIds.put(Id.of("feat:greater_whip_mastery"), List.of(Weapons.WHIP, Weapons.WHIP_SCORPION));
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
        explodedIds.put(Id.of("feat:whip_mastery"), List.of(Weapons.WHIP));

        explodedIds.put(Id.of("feat:critical_mastery"), List.of());
        explodedIds.put(Id.of("feat:seize_the_moment"), List.of());
        explodedIds.put(Id.of("feat:sneaking_precision"), List.of());
    }

    private static final String DATABASE_ID = "feat";

    private final FeatSourceDatabase featSourceDatabase;
    private final PrerequisiteParserV4 prerequisiteParser;

    @Override
    protected Stream<Entity> streamModels() throws IOException {
        return featSourceDatabase.streamFeats()
                .parallel()
                .filter(feat -> Sources.findSourceByNameOrCode(feat.source()) != null)
                .flatMap(this::createFeatEntities);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "v4/feat";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "v4/FeatDatabase";
    }

    @Override
    protected EntitySummaryDbo encodedSummary(Entity model) {
        return model.toSummaryDbo();
    }

    @Override
    protected EntityDbo encodedDetailed(Entity model, EntitySummaryDbo entitySummaryDbo) {
        return model.toDbo();
    }

    @Override
    protected Message createSummaryDatabase(List<EntitySummaryDbo> summaries) {
        return EntityDatabaseDbo.newBuilder()
                .setDatabaseId(DATABASE_ID)
                .addAllSummaries(summaries)
                .build();
    }

    private Stream<Entity> createFeatEntities(Feat feat) {
        Tags tags = createFeatTags(feat);
        String prerequisiteFormula = prerequisiteParser.extractPrerequisiteFormula(feat.prerequisites());

        Entity entity = Entity.builder()
                .id(feat.id())
                .name(feat.name())
                .tags(tags)
                .prerequisiteFormula(prerequisiteFormula)
                .description(Description.create(feat.description())
                        .addSection("Goal", feat.goal())
                        .addSection("Benefit", feat.benefit())
                        .addSection("Completion Benefit", feat.completionBenefit())
                        .addSection("Normal", feat.normal())
                        .addSection("Special", feat.special())
                        .addSection("Note", feat.note())
                )
                .effect(Effect.addNumber(feat.id(), 1))
                .build();

        return tryExplodeEntity(entity);
    }

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
        List<String> source = new ArrayList<>();
        explodedIds.forEach((key, value) -> {
            if (entity.prerequisiteFormula().contains(key.string())) {
                namedEntities.addAll(value);

                source.add(entity.prerequisiteFormula());
            }
        });

        if (!explodedIds.containsKey(entity.id())) {
            log.info("explodedIds.put(Id.of(\"%s\"), \"%s\");".formatted(
                    entity.id().withoutOption().string(),
                    String.join(", ", source)));
        }

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
                    .condition(prerequisiteFormula)
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
            tags.add(Tag.of("critical"));
        }
        if (feat.style()) {
            tags.add(Tag.of("style"));
        }
        if (feat.performance()) {
            tags.add(Tag.of("performance"));
        }
        if (feat.teamwork()) {
            tags.add(Tag.of("teamwork"));
        }
        if (feat.grit()) {
            tags.add(Tag.of("grit"));
        }
        if (feat.racial()) {
            tags.add(Tag.of("racial"));
        }
        return tags;
    }
}
