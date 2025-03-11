package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record RangerCombatStyle(Id id,
                                String name,
                                @JsonProperty("feats_to_add_at_level_1") List<String> featsToAddAtLevel1,
                                @JsonProperty("feats_to_add_at_level_6") List<String> featsToAddAtLevel6,
                                @JsonProperty("feats_to_add_at_level_10") List<String> featsToAddAtLevel10,
                                String source) implements NamedEntity, FromSourceBook {

    @Override
    public List<String> sources() {
        return List.of(source);
    }
}
