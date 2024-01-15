package pathfinder.generator.mapper;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.model.Feature;
import pathfinder.model.pathfinder.ComplexFeature;

@RequiredArgsConstructor
@Component
public class RaceMapper {
    private final ComplexFeatureMapper complexFeatureMapper;

    public Stream<Feature> flatMap(ComplexFeature model) {
        return complexFeatureMapper.flatMap(model);
//        if (model.id().type == null) {
//            throw new IllegalArgumentException("Model ID does not have type: " + model);
//        }
//        FeatureBuilder builder = new FeatureBuilder(model.id())
//                .setName(model.name())
//                .setDescription(model.description())
//                .addTag("race")
//                .addTag(model.type().toLowerCase());
//
//        Size size = Size.findByLongName(model.size()).orElseThrow();
//
//        StackBuilder stack = new StackBuilder();
//        stack.addLink(size.id());
//        stack.addEffect(Effect.setNumber("speed:base", model.speed()));
//
//        if (model.features() != null) {
//            model.features().forEach(stack::addLink);
//        }
//
//        builder.addFixedStack(stack.build());
//        return Stream.of(builder.build());
    }
}
