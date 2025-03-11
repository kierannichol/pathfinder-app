package pathfinder.v7.generator;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import pathfinder.db.LocalPathfinderDatabaseLoader;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.generator.PrerequisiteParser;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Sources;

@Slf4j
class PrerequisiteParserTest {
    private static PathfinderDatabase database;
    private static PrerequisiteParser prerequisiteParser;

    @BeforeAll
    static void beforeAll() {
        database = new LocalPathfinderDatabaseLoader().load();
        prerequisiteParser = new PrerequisiteParser(database);
    }

    private Feat feat(String name) {
        return database.query(Query.feat(name))
                .findFirst().orElseThrow();
    }

    private void assertParses(Feat feat, String expectedFormula) {
        log.info("'{}' prerequisites: {}", feat.name(), feat.prerequisites());
        String actualFormula = prerequisiteParser.prerequisites(feat);
        assertThat(actualFormula).isEqualTo(expectedFormula);
    }

    private static Stream<Arguments> featProvider() {
        return database.query(Query.feats())
                .filter(feat -> Sources.findSourceByNameOrCode(feat.source()) != null)
                .filter(feat -> Sources.findSourceByNameOrCode(feat.source()).enabled())
                .map(feat -> Arguments.of(feat.name(), feat));
    }

    @Test
    void all_classFeatures() {
        database.query(Query.classFeatures()).forEach(feature -> {
            if (Sources.findSourceByNameOrCode(feature.source()) != null) {
                prerequisiteParser.prerequisites(feature);
            }
        });
    }

    @ParameterizedTest(name = "{0}")
    @MethodSource("featProvider")
    void feat(String name, Feat feat) {
        prerequisiteParser.prerequisites(feat);
    }

//    @Test
//    void all_feats() {
//        AtomicBoolean failed = new AtomicBoolean(false);
//        database.query(Query.feats()).forEach(feat -> {
//            try {
//                prerequisiteParser.prerequisites(feat);
//            } catch (Exception e) {
//                log.error(e.getMessage(), e);
//                failed.set(true);
//            }
//        });
//
//        assertThat(failed.get())
//                .as("One or more feats failed to parse")
//                .isFalse();
//    }

    @Test
    void all_mercies() {
        database.query(Query.classFeatures().idMatches("mercy:.*")).forEach(mercy ->
                prerequisiteParser.prerequisites(mercy));
    }

    @Test
    void classFeature() {
        var extraRogueTalent = database.query(Query.feat("Extra Rogue Talent"))
                .findFirst().orElseThrow();
        for (int i = 0; i < 10; i++) {
            String result = prerequisiteParser.prerequisites(extraRogueTalent);
            assertThat(result).isEqualTo("sum(@ability:rogue_talent#*)[Rogue Talent]");
        }
    }

    @Test
    void featDimensionalAgility() {
        var feat = database.query(Query.feat("Dimensional Agility"))
                .findFirst().orElseThrow();

        var formula = prerequisiteParser.prerequisites(feat);
        assertThat(formula).isEqualTo("any(sum(@ability:abundant_step#*)[Abundant Step],@spell:dimension_door)");
    }

    @Test
    void fortifiedArmorTraining() {
        assertParses(
                feat("Fortified Armor Training"),
                "any(@proficiency:light_armor,@proficiency:medium_armor,@proficiency:heavy_armor,@proficiency:shield)");
    }

    @Test
    void combatStyleMaster() {
        assertParses(
                feat("Combat Style Master"),
                "all(@feat:improved_unarmed_strike,(@feat:pummeling_bully+@feat:jabbing_dancer+@feat:jabbing_style+@feat:pummeling_style+@feat:jabbing_master+@feat:grabbing_style+@feat:grabbing_drag+@feat:pummeling_charge+@feat:grabbing_master+@feat:sisterhood_style+@feat:perfect_style+@feat:sisterhood_dedication+@feat:sisterhood_rampart+@feat:unblinking_flame_feint+@feat:kitsune_tricks+@feat:kitsune_style+@feat:kitsune_vengeance+@feat:beastmaster_ire+@feat:crashing_wave_fist+@feat:indomitable_mountain_style+@feat:wolf_savage+@feat:crashing_wave_style+@feat:wolf_style+@feat:wolf_trip+@feat:indomitable_mountain_avalanche+@feat:indomitable_mountain_peak+@feat:beastmaster_style+@feat:beastmaster_salvation+@feat:crashing_wave_buffet+@feat:boar_ferocity+@feat:marid_spirit+@feat:mantis_style+@feat:snake_sidewind+@feat:efreeti_touch+@feat:earth_child_style+@feat:earth_child_binder+@feat:janni_tempest+@feat:panther_style+@feat:dragon_roar+@feat:earth_child_topple+@feat:snapping_turtle_style+@feat:djinni_style+@feat:kirin_strike+@feat:crane_riposte+@feat:snapping_turtle_clutch+@feat:djinni_spirit+@feat:mantis_torment+@feat:dragon_style+@feat:monkey_moves+@feat:tiger_claws+@feat:monkey_shine+@feat:shaitan_earthblast+@feat:shaitan_skin+@feat:kirin_path+@feat:snapping_turtle_shell+@feat:shaitan_style+@feat:monkey_style+@feat:boar_shred+@feat:djinni_spin+@feat:dragon_ferocity+@feat:janni_rush+@feat:panther_claw+@feat:efreeti_style+@feat:mantis_wisdom+@feat:snake_fang+@feat:panther_parry+@feat:tiger_pounce+@feat:marid_style+@feat:tiger_style+@feat:crane_wing+@feat:kirin_style+@feat:snake_style+@feat:marid_coldsnap+@feat:boar_style+@feat:efreeti_stance+@feat:janni_style+@feat:crane_style)[style feat(s)]>=2,any(@bab>=6,@class:monk>=5))");
    }

    @Test
    void pinningRend() {
        assertParses(feat("Pinning Rend"),
                "all(@dex_score>=13,@feat:greater_grapple,@feat:improved_grapple,@feat:improved_unarmed_strike,any(@bab>=9,@class:monk>=9))");
    }
}