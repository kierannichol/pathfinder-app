package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import pathfinder.model.AttackModification;
import pathfinder.model.Description;
import pathfinder.model.FeatureOptions;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.Stack;

public record Feat(Id id,
                   String name,
                   String type,
                   Description description,
                   String prerequisites,
                   @JsonProperty("prerequisite_feats") String prerequisiteFeats,
                   String enabled_formula,
                   String benefit,
                   String normal,
                   String special,
                   String source,
                   boolean teamwork,
                   boolean critical,
                   boolean grit,
                   boolean style,
                   boolean performance,
                   boolean racial,
                   boolean companion,
                   @JsonProperty("race_name") String raceName,
                   String note,
                   String goal,
                   @JsonProperty("completion_benefit") String completionBenefit,
                   boolean multiples,
                   @JsonProperty("suggested_traits") String suggestedTraits,
                   List<String> effects,
                   @JsonProperty("repeating_stack") Stack repeatingStack,
                   @JsonProperty("fixed_stacks") List<Stack> fixedStacks,
                   @JsonProperty("options") FeatureOptions options,
                   @JsonProperty("metamagic") MetamagicOptions metamagic,
                   @JsonProperty("attack_mod") AttackModification attackModifier) implements
        NamedEntity {

    public enum FeatType {
        METAMAGIC,
        GRIT,
        CRITICAL,
        RACIAL,
        TEAMWORK,
        STYLE,
        PERFORMANCE,
        ITEM_CREATION,
        GENERAL,
        COMBAT,
        COMPANION,
        PANACHE
    }
}
