package pathfinder.v7.generator.mapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.v7.model.FeatureV7;
import pathfinder.v7.model.FeatureV7.FeatureBuilder;

@Component
@RequiredArgsConstructor
@Slf4j
public class ClassToFavoredClassFeatureMapper {

    public FeatureV7 map(CharacterClass characterClass) {
        Id favoredClassId = characterClass.id().changeType("favored_class");
        FeatureBuilder feature = new FeatureBuilder(favoredClassId)
                .setName(characterClass.name())
                .setDescription(characterClass.description())
                .addTag("favored_class");

        return feature.build();
    }
}
