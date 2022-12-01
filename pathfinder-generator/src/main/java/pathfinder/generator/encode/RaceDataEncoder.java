package pathfinder.generator.encode;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.RaceDataDbo;
import pathfinder.model.Race;

@Component("Race Data Encoder")
public class RaceDataEncoder implements Encoder<Race, RaceDataDbo> {

    @Override
    public RaceDataDbo encode(Race race) {
        return RaceDataDbo.newBuilder()
                .setId(race.id())
                .setName(race.name())
                .setSize(race.size().id())
                .setType(race.type())
                .setSpeed(race.speed())
                .addAllLanguages(race.languages())
                .addAllTraits(race.traits())
                .build();
    }
}
