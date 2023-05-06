package pathfinder.generator.provider;

import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.local.FeatureSourceDatabase;
import pathfinder.generator.parse.PrerequisiteParser;
import pathfinder.model.Entity;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;

@Component
@RequiredArgsConstructor
public class FeatureEntityProvider implements EntityProvider {
    private final List<FeatureSourceDatabase> featureSourceDatabases;
    private final PrerequisiteParser prerequisiteParser;

    @Override
    public Stream<Entity> streamEntities(Source source) {
        return featureSourceDatabases.stream()
                .flatMap(FeatureSourceDatabase::streamFeatures)
                .filter(feature -> source.equals(Sources.findSourceByNameOrCode(feature.source())))
                .map(this::featureToEntity);
    }

    private Entity featureToEntity(Feature feature) {
        return Entity.builder()
                .id(feature.id())
                .name(feature.name())
                .description(feature.description())
                .prerequisiteFormula(prerequisiteParser.extractPrerequisiteFormula(feature.prerequisites()))
                .source(Sources.findSourceByNameOrCode(feature.source()))
                .tags(feature.id().type)
                .build();
    }
}
