package pathfinder.generator.db.local;

import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Bloodline;

@Component
public class BloodragerBloodlineSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource {

    public Stream<Bloodline> streamBloodlines() {
        return load("bloodrager_bloodline_database.yml", Bloodline[].class);
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamBloodlines();
    }
}
