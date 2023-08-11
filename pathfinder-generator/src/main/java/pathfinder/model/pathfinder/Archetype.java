package pathfinder.model.pathfinder;

import java.util.List;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record Archetype(Id id,
                        String name,
                        Description description,
                        List<ArchetypeModification> modifications,
                        List<Feature> features,
                        String source) implements NamedEntity, FromSourceBook {

}
