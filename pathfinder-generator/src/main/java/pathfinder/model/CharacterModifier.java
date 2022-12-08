package pathfinder.model;

import java.util.List;
import lombok.Builder;
import lombok.Value;
import pathfinder.model.v3.Sourced;

@Value
@Builder
public class CharacterModifier implements FeatureModel, Sourced {
    @Builder.Default String id = "";
    @Builder.Default String name = "";
    @Builder.Default String descriptionText = "";
    @Builder.Default String effectText = "";
    @Builder.Default Source source = null;
    @Builder.Default List<CharacterEffect> effects = List.of();
}
