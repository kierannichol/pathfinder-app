package pathfinder.encoder;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.SpellLevelDbo;
import pathfinder.model.Spell;
import pathfinder.model.Spell.Level;

@Component
public class SpellLevelEncoder implements Encoder<Spell.Level, SpellLevelDbo> {

    @Override
    public SpellLevelDbo encode(Level model) {
        return SpellLevelDbo.newBuilder()
                .setClassId(model.classId())
                .setLevel(model.level())
                .build();
    }
}
