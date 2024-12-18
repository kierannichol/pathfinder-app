package pathfinder.generator.mapper;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.generator.PrerequisiteParser;
import pathfinder.model.Description;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.Stack;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.Feat;
import pathfinder.util.EffectParser;
import pathfinder.util.StringUtils;

@RequiredArgsConstructor
@Component
@Slf4j
public class FeatMapper {
    private final PathfinderDatabase database;
    private final PrerequisiteParser prerequisiteParser;

    public Stream<Feature> flatMap(Feat feat) {

        Description description = Description.create(feat.description());
        if (StringUtils.notEmpty(feat.benefit())) {
            description.addSection("Benefit", feat.benefit());
        }
        if (StringUtils.notEmpty(feat.normal())) {
            description.addSection("Normal", feat.normal());
        }
        if (StringUtils.notEmpty(feat.special())) {
            description.addSection("Special", feat.special());
        }
        if (StringUtils.notEmpty(feat.completionBenefit())) {
            description.addSection("Completion Benefit", feat.completionBenefit());
        }
        if (StringUtils.notEmpty(feat.goal())) {
            description.addSection("Goal", feat.goal());
        }
        if (StringUtils.notEmpty(feat.note())) {
            description.addSection("Note", feat.note());
        }

        FeatureBuilder builder = new FeatureBuilder(feat.id())
                .setName(feat.name())
                .setDescription(description)
                .addTag("feat")
                .addTag(feat.type().toLowerCase());

        if (!feat.multiples()) {
            builder.setMaxStacks(1);
        }

        String prerequisiteFormula = tryParsePrerequisites(feat);
        builder.setEnabledCondition(prerequisiteFormula);

        if (feat.options() != null) {
            builder.addOptions(feat.options());
        }

        if (feat.effects() != null) {
            StackBuilder stack = new StackBuilder();
            feat.effects().forEach(effect -> stack.addEffect(EffectParser.parse(effect)));
            builder.addFixedStack(stack.build());
        }

        if (feat.fixedStacks() != null) {
            for (Stack stack : feat.fixedStacks()) {
                builder.addFixedStack(stack);
            }
        }

        if (feat.repeatingStack() != null) {
            builder.setRepeatingStack(feat.repeatingStack());
        }

        return Stream.of(builder.build(),
                makeGeneric(builder));

//        return trySplitOptions(builder, feat.id().withoutOption(), prerequisiteFormula);
    }

    private Feature makeGeneric(FeatureBuilder builder) {
        Feature source = builder.build();
        return Feature.simple(source.id().withoutOption(),
                source.name());
    }

    private String tryParsePrerequisites(Feat feat) {
        try {
            return prerequisiteParser.prerequisites(feat);
        } catch (Exception e) {
            log.warn("Failed to parse feat prerequisites", e);
            return "";
        }
    }
}
