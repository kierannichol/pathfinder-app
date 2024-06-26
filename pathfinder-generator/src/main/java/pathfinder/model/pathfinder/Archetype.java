package pathfinder.model.pathfinder;

import java.util.List;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Archetype(Id id,
                        String name,
                        Description description,
                        List<ClassModification> modifications,
                        List<Feature> features,
                        String source) implements NamedEntity, FromSourceBook {

    @Override
    public List<String> sources() {
        return List.of(source);
    }
}
