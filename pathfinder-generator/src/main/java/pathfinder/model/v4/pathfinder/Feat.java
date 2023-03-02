package pathfinder.model.v4.pathfinder;

import pathfinder.model.Id;
import pathfinder.model.v4.NamedEntity;

public record Feat(Id id, String name, String type, String description, String prerequisites, String prerequisiteFeats, String benefit, String normal, String special, String source, boolean teamwork, boolean critical, boolean grit, boolean style, boolean performance, boolean racial, boolean companion, String raceName, String note, String goal, String completionBenefit, boolean multiples, String suggestedTraits) implements
        NamedEntity {

    public enum FeatType {
        METAMAGIC,
        GRIT,
        CRITICAL,
        RACIAL,
        TEAMWORK,
        STYLE,
        PERFORMANCE,
        ITEM_CREATION
    }
}
