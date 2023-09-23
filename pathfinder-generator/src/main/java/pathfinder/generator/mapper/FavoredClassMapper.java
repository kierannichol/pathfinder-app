package pathfinder.generator.mapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.CharacterClass;

@Component
@RequiredArgsConstructor
@Slf4j
public class FavoredClassMapper {

    public Feature map(CharacterClass characterClass) {
        Id favoredClassId = characterClass.id().changeType("favored_class");
        FeatureBuilder feature = new FeatureBuilder(favoredClassId)
                .setName(characterClass.name())
                .setDescription(characterClass.description())
                .addTag("favored_class")
                .addTag(characterClass.category());

        return feature.build();
    }
}
