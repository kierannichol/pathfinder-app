package pathfinder.db.migrate;

import java.util.List;
import org.springframework.stereotype.Component;
import pathfinder.model.Effect;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.ComplexFeature.ComplexFeatureBuilder;
import pathfinder.model.pathfinder.Race;
import pathfinder.model.pathfinder.Size;

@Component
public class RaceMigrator extends AbstractMigrator {

    public void migrate() {
        List<Race> raceList = loadAll("db/race", Race.class).toList();
        for (Race race : raceList) {
            var modified = migrateRace(race);
            save("race/" + race.id().key + ".yml", modified);
        }
    }

    private ComplexFeature migrateRace(Race race) {
        ComplexFeatureBuilder builder = ComplexFeature.builder();

        builder.id(race.id());
        builder.name(race.name());
        builder.type(race.type());
        builder.source(race.source());
        builder.description(race.description());
        builder.addTag("race");
        builder.addMetadata("type", race.type());
        builder.addMetadata("speed", Integer.toString(race.speed()));
        builder.addMetadata("size", race.size());

        StackBuilder stack = builder.fixedStack();

        Size.findByLongName(race.size())
                        .ifPresent(size -> stack.addLink(size.id()));

        stack.addEffect(Effect.setNumber("speed:base", race.speed()));

        if (race.features() != null) {
            race.features().forEach(stack::addLink);
        }

        return builder.build();
    }
}
