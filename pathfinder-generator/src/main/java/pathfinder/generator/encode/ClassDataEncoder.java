package pathfinder.generator.encode;

import org.springframework.stereotype.Component;
import pathfinder.data.v2.ClassCategoryDbo;
import pathfinder.data.v2.ClassDataDbo;
import pathfinder.data.v2.ClassLevelDbo;
import pathfinder.data.v2.SpecialDbo;
import pathfinder.generator.model.CharacterClass;
import pathfinder.generator.model.Special;

@Component("Character Class Data Encoder")
public class ClassDataEncoder implements Encoder<CharacterClass, ClassDataDbo> {

    @Override
    public ClassDataDbo encode(CharacterClass characterClass) {
        var builder = ClassDataDbo.newBuilder();
        builder.setId(characterClass.id());
        builder.setName(characterClass.name());
        builder.setShortDescription(characterClass.shortDescription());
        builder.setCategory(ClassCategoryDbo.valueOf(characterClass.type().name()));
        builder.addAllSkills(characterClass.skills());
        for (var level : characterClass.levels()) {
            builder.addLevels(ClassLevelDbo.newBuilder()
                    .setLevelNumber(level.level())
                    .setBab(level.bab())
                    .setFortSave(level.fortSave())
                    .setRefSave(level.refSave())
                    .setWillSave(level.willSave())
                    .addAllSpecials(level.specials().stream().map(this::encodeSpecial).toList()));
        }
        return builder.build();
    }

    private SpecialDbo encodeSpecial(Special special) {
        return SpecialDbo.newBuilder()
                .setId(special.id())
                .setName(special.name())
                .setDescription(special.description())
                .build();
    }
}
