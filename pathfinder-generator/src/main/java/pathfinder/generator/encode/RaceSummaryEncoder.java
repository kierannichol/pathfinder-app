package pathfinder.generator.encode;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.RaceSummaryDbo;
import pathfinder.model.Race;

@Component("Race Summary Encoder")
public class RaceSummaryEncoder implements Encoder<Race, RaceSummaryDbo> {

    @Override
    public RaceSummaryDbo encode(Race race) {
        return RaceSummaryDbo.newBuilder()
                .setId(race.id())
                .setName(race.name())
                .setSize(race.size().id())
                .setType(race.type())
                .setSpeed(race.speed())
                .addAllLanguages(race.languages())
                .addAllTraits(race.modifiers())
                .build();
    }
}
