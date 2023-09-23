package pathfinder.generator;

import java.util.List;
import org.springframework.stereotype.Component;
import pathfinder.model.CharacterTemplate;
import pathfinder.model.CharacterTemplate.Builder;
import pathfinder.model.Effect;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.FeatureSelectCategory;
import pathfinder.model.FeatureSelectSortBy;
import pathfinder.model.TextChoice;
import pathfinder.model.pathfinder.AbilityScore;

@Component
public class CharacterTemplateGenerator {
    private static final int DEFAULT_BASE_ABILITY_SCORE = 10;

    private static final List<FeatureSelectCategory> CLASS_CATEGORIES = List.of(
            new FeatureSelectCategory("Core", "core"),
            new FeatureSelectCategory("Base", "base"),
            new FeatureSelectCategory("Hybrid", "hybrid"),
            new FeatureSelectCategory("Unchained", "unchained")
    );

    private static final List<FeatureSelectCategory> FEAT_CATEGORIES = List.of(
            new FeatureSelectCategory("General", "general"),
            new FeatureSelectCategory("Combat", "combat")
    );

    public CharacterTemplate generate() {
        Builder builder = new Builder();

        builder.level(0, level -> {
            for (AbilityScore abilityScore : AbilityScore.values()) {
                level.addEffect(Effect.setNumber(
                        "%s:base".formatted(abilityScore.shortName()),
                        DEFAULT_BASE_ABILITY_SCORE));
                level.addEffect(Effect.setFormula(
                        "%s_score".formatted(abilityScore.shortName()),
                        "sum(@%s:*)".formatted(abilityScore.shortName())));
                level.addEffect(Effect.setFormula(
                        "%s_mod".formatted(abilityScore.shortName()),
                        "floor(@%s_score / 2) - 5".formatted(abilityScore.shortName())));
                level.addEffect(Effect.setFormula(
                        "ability_point_cost:%s".formatted(abilityScore.shortName()),
                        "if(@%s:base==7,-4,0) + if(@%s:base==8,-2,0) + if(@%s:base==9,-1,0) + if(@%s:base==10,0,0) + if(@%s:base==11,1,0) + if(@%s:base==12,2,0) + if(@%s:base==13,3,0) + if(@%s:base==14,5,0) + if(@%s:base==15,7,0) + if(@%s:base==16,10,0) + if(@%s:base==17,13,0) + if(@%s:base==18,17,0)".formatted(abilityScore.shortName(), abilityScore.shortName(), abilityScore.shortName(), abilityScore.shortName(), abilityScore.shortName(), abilityScore.shortName(), abilityScore.shortName(), abilityScore.shortName(), abilityScore.shortName(), abilityScore.shortName(), abilityScore.shortName(), abilityScore.shortName())));
            }
            level.addEffect(Effect.setFormula("ability_point_cost", "sum(@ability_point_cost:*)"));

            level.addChoice(new TextChoice("character_name", "Character Name", "name"));
            level.addChoice(new FeatureSelectByTagChoice("race", "Race", "race", List.of("race"), List.of(), List.of(), FeatureSelectSortBy.NAME));
            level.addChoice(new FeatureSelectByTagChoice("favored_class", "Favored Class", "favored_class", List.of("favored_class"), List.of(), CLASS_CATEGORIES, FeatureSelectSortBy.NAME));
            level.addChoice(new FeatureSelectByTagChoice("alignment", "Alignment", "alignment", List.of("alignment"), List.of(), List.of(), FeatureSelectSortBy.NONE));
            for (AbilityScore abilityScore : AbilityScore.values()) {
                level.addChoice(new TextChoice("%s:base".formatted(abilityScore.shortName()),
                        abilityScore.longName(),
                        "ability_score"));
            }
        });

        for (int levelNumber = 1; levelNumber <= 20; levelNumber++) {
            builder.level(levelNumber, level -> {
                level.addChoice(new FeatureSelectByTagChoice("class", "Class", "class", List.of("class"), List.of(), CLASS_CATEGORIES, FeatureSelectSortBy.NAME));
                if (level.levelNumber() % 2 == 1) {
                    level.addChoice(new FeatureSelectByTagChoice("feat", "Feat", "feat", List.of("feat"), List.of(), FEAT_CATEGORIES, FeatureSelectSortBy.NAME));
                }
            });
        }

        return builder.build();
    }
}