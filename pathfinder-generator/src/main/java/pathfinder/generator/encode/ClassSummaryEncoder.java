package pathfinder.generator.encode;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.ClassCategoryDbo;
import pathfinder.data.v2.ClassSummaryDbo;
import pathfinder.generator.model.CharacterClass;

@Component("Character Class Summary Encoder")
public class ClassSummaryEncoder implements Encoder<CharacterClass, ClassSummaryDbo> {

    @Override
    public ClassSummaryDbo encode(CharacterClass characterClass) {
        var builder = ClassSummaryDbo.newBuilder();
        builder.setId(characterClass.id());
        builder.setName(characterClass.name());
        builder.setCategory(ClassCategoryDbo.valueOf(characterClass.type().name()));
        return builder.build();
    }
}
