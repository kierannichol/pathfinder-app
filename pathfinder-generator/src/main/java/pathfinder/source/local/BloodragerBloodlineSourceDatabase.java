package pathfinder.source.local;

import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.BloodragerBloodline;

@Component
public class BloodragerBloodlineSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource {

    public Stream<BloodragerBloodline> streamBloodlines() {
        return load("bloodrager_bloodline_database.yml", BloodragerBloodline[].class);
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamBloodlines();
    }
}
