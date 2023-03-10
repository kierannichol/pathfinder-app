package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Feat(Id id,
                   String name,
                   String type,
                   String description,
                   String prerequisites,
                   @JsonProperty("prerequisite_feats") String prerequisiteFeats,
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
                   @JsonProperty("suggested_traits") String suggestedTraits) implements
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
