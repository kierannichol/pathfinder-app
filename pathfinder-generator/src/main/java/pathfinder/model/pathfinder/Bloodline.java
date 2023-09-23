package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Bloodline(Id id,
                        String name,
                        Description description,
                        Id classId,
                        @JsonProperty("bonus_feats") List<String> bonusFeats,
                        @JsonProperty("bonus_spells") List<String> bonusSpells,
                        @JsonProperty("bloodline_powers") List<Feature> bloodlinePowers,
                        String source) implements NamedEntity, FromSourceBook, ClassSpecific {
}
