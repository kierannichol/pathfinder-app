package pathfinder.generator.db.local;

import java.util.Objects;
import java.util.stream.Stream;
import org.springframework.stereotype.Component;
import pathfinder.model.AttributeType;
import pathfinder.model.Description;
import pathfinder.model.NamedEntity;
import pathfinder.model.NamedEntitySource;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.WarpriestBlessing;
import pathfinder.util.NameToIdConverter;

@Component
public class WarpriestBlessingSourceDatabase extends AbstractYamlSourceDatabase implements NamedEntitySource, FeatureSourceDatabase {

    public Stream<WarpriestBlessing> streamBlessings() {
        return load("warpriest_blessing_database.yml", WarpriestBlessing[].class);
    }

    @Override
    public Stream<Feature> streamFeatures() {
        return streamBlessings()
                .map(this::blessingToFeature)
                .filter(Objects::nonNull);
    }

    @Override
    public Stream<? extends NamedEntity> namedEntities() {
        return streamFeatures();
    }

    private Feature blessingToFeature(WarpriestBlessing blessing) {

        String prerequisites = "";

        switch (blessing.type()) {
            case "MAJOR":
                prerequisites = "@class:warpriest>=10";
                break;
            case "MINOR":
                break;
            default:
                return null;
        }

        return new Feature(
                NameToIdConverter.generateId(AttributeType.WARPRIEST_BLESSINGS, blessing.name()),
                blessing.name(),
                blessing.type(),
                Description.create(blessing.description()),
                prerequisites,
                blessing.source()
        );
    }
}
