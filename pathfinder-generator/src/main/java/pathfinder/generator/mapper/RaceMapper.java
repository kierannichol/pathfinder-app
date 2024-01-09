package pathfinder.generator.mapper;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.model.Effect;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.Race;
import pathfinder.model.pathfinder.Size;

@RequiredArgsConstructor
@Component
public class RaceMapper {

    public Feature map(Race model) {
        if (model.id().type == null) {
            throw new IllegalArgumentException("Model ID does not have type: " + model);
        }
        FeatureBuilder builder = new FeatureBuilder(model.id())
                .setName(model.name())
                .setDescription(model.description())
                .addTag("race")
                .addTag(model.type().toLowerCase());

        Size size = Size.findByLongName(model.size()).orElseThrow();

        StackBuilder stack = new StackBuilder();
        stack.addLink(size.id());
        stack.addEffect(Effect.setNumber("speed:base", model.speed()));

        if (model.features() != null) {
            model.features().forEach(stack::addLink);
        }

        builder.addFixedStack(stack.build());
        return builder.build();
    }
}
