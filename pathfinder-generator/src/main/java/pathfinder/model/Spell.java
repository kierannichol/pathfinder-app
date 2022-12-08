package pathfinder.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import lombok.Builder;
import lombok.Value;
import pathfinder.model.Ability.Type;
import pathfinder.model.v3.Sourced;

@Builder
@Value
public class Spell implements Serializable, FeatureModel, Sourced {
    String id;
    String name;
    @Builder.Default Ability.Type type = Type.NONE;
    @Builder.Default String school = "";
    @Builder.Default String castingTime = "";
    @Builder.Default String components = "";
    @Builder.Default String range = "";
    @Builder.Default String area = "";
    @Builder.Default String targets = "";
    @Builder.Default String effect = "";
    @Builder.Default String use = "";
    @Builder.Default String activation = "";
    @Builder.Default String cost = "";
    @Builder.Default String duration = "";
    @Builder.Default String savingThrow = "";
    @Builder.Default String description = "";
    @Builder.Default String note = "";
    @Builder.Default String prerequisites = "";
    @Builder.Default String spellResistance = "";
    @Builder.Default List<Level> level = new ArrayList<>();
    Source source;

    public record Level(String classId, int level) implements Serializable { }
}
