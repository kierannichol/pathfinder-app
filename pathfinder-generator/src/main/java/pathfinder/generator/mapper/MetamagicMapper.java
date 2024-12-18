package pathfinder.generator.mapper;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.Id;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.pathfinder.Feat;

@RequiredArgsConstructor
@Component
@Slf4j
public class MetamagicMapper {
    private static final int MAX_SPELL_LEVEL = 9;

    private final PathfinderDatabase database;

    public Stream<Feature> flatMap(Feat feat) {
        if (feat.metamagic() == null) {
            return Stream.empty();
        }

        FeatureBuilder builder = Feature.builder(Id.of("spell", "metamagic_" + feat.id().key));

        builder.setName(feat.name());
        builder.setDescription(feat.description());
        builder.addTag("spell");
        builder.addTag("metamagic");

        builder.setRepeatingStack(new StackBuilder().build());

        int levelIncrease = feat.metamagic().levelIncrease();
        int minLevel = 1 + levelIncrease;

        Stream<CharacterClass> spellCastingClasses = database.query(
                        Query.characterClasses())
                .filter(cc -> cc.class_features().stream().anyMatch(cf -> cf.id().key.equals("spellcasting")));

        return features.stream();
    }
}
