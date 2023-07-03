package pathfinder.v6.generator;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.local.FeatSourceDatabase;
import pathfinder.model.Description;
import pathfinder.model.pathfinder.Feat;
import pathfinder.model.pathfinder.Source;
import pathfinder.model.pathfinder.Sources;
import pathfinder.v6.model.Condition;
import pathfinder.v6.model.Effect;
import pathfinder.v6.model.Feature;

@Component
@RequiredArgsConstructor
@Slf4j
public class FeatProvider implements FeatureProvider {
    private final FeatSourceDatabase featSourceDatabase;
    private final PrerequisiteParserV6 prerequisiteParser;

    @Override
    public Stream<Feature> features(Source source) {
        return featSourceDatabase.streamFeats()
                .filter(feat -> source.equals(Sources.findSourceByNameOrCode(feat.source())))
                .map(this::convert);
    }

    private Feature convert(Feat feat) {
        String prerequisiteFormula = tryParsePrerequisites(feat.prerequisites());
        List<Effect> effects = new ArrayList<>();
        List<String> tags = List.of("feat");

        return new Feature(feat.id(),
                feat.name(),
                Description.create(feat.description()),
                new Condition(prerequisiteFormula),
                effects,
                tags);
    }

    private String tryParsePrerequisites(String prerequisites) {
        try {
            return prerequisiteParser.extractPrerequisiteFormula(prerequisites);
        } catch (Exception e) {
            log.warn("Failed to parse feat prerequisites", e);
            return "";
        }
    }
}
