package pathfinder.v6.generator;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.local.ClassSourceDatabase;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.Source;
import pathfinder.v6.model.Effect;
import pathfinder.v6.model.Feature;

@Component
@RequiredArgsConstructor
public class ClassFeatureProvider implements FeatureProvider {
    private final ClassSourceDatabase classSourceDatabase;

    @Override
    public Stream<Feature> features(Source source) {
        return classSourceDatabase.streamClasses()
                .flatMap(this::toFeatures);
    }

    private Stream<Feature> toFeatures(CharacterClass characterClass) {
        return characterClass.class_features()
                .stream().map(this::toFeatureV6);
    }

    private Feature toFeatureV6(pathfinder.model.pathfinder.Feature feature) {
        Id id = feature.id().changeType("feature");
        return Feature.builder(id)
                .setName(feature.name())
                .setDescription(feature.description())
                .addEffect(Effect.setNumber(id.withoutOption(), 1))
                .build();
    }
}
