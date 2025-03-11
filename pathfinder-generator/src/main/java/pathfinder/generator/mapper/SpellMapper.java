package pathfinder.generator.mapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.Description;
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
        Description description = generateDescription(spell);
        builder.setDescription(description);
        builder.addTag("spell");
        builder.addTag(spell.id().type);
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

    private static void tryAddAttackStats(FeatureBuilder builder, Spell spell) {
    }

    private static Description generateDescription(Spell spell) {
        Description description = spell.description();
        description.addSection("Casting Time", spell.castingTime());
        description.addSection("Components", spell.components());
        description.addSection("Targets", spell.targets());
        description.addSection("Duration", spell.duration());
        description.addSection("Range", spell.range());
        description.addSection("Saving Throw", spell.savingThrow());
        description.addSection("School", spell.school());
        description.addSection("Spell Resistance", spell.spellResistance());
        return description;
    }
}
