package pathfinder.generator.mapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.Spell;

@RequiredArgsConstructor
@Component
@Slf4j
public class SpellMapper {

    public Feature map(Spell spell) {
        FeatureBuilder builder = Feature.builder(spell.id());

        builder.setName(spell.name());
        builder.setDescription(spell.description());
        builder.addTag("spell");
        spell.levels().forEach(sl -> builder.addTag("%s%d".formatted(
                sl.classId().key,
                sl.level()
        )));

        // Is not a level-0 spell
        if (!spell.levels().stream().allMatch(sl -> sl.level() == 0)) {
            builder.setRepeatingStack(new StackBuilder().build());
        }

        return builder.build();
    }
}
