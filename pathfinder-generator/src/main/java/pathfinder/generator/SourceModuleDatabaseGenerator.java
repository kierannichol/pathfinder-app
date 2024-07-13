package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import pathfinder.data.FeatureDbo;
import pathfinder.data.FeatureSummaryDbo;
import pathfinder.data.SourceModuleDbo;
import pathfinder.model.Feature;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.util.StreamUtils;

@RequiredArgsConstructor
public class SourceModuleDatabaseGenerator {

    private final SourceId sourceId;
    private final List<FeatureProvider> featureProviders;
    private final DatabaseWriter writer;

    protected Stream<Feature> streamFeatures() {
        return featureProviders.stream()
                .flatMap(provider -> provider.features(sourceId))
                .filter(StreamUtils.duplicates(Feature::id));
    }

    private String databaseId() {
        return sourceId.code();
    }

    protected String getRelativeOutputPath() {
        return databaseId();
    }

    protected String getOutputDatabaseName() {
        return databaseId();
    }

    protected FeatureSummaryDbo encodedFeatureSummary(Feature feature) {
        return feature.toSummaryDbo();
    }

    protected FeatureDbo encodedFeatureDetailed(Feature feature) {
        return feature.toDbo();
    }

    protected Message createSummaryDatabase(List<FeatureSummaryDbo> features) {
        features.sort(Comparator.comparing(FeatureSummaryDbo::getId));
        return SourceModuleDbo.newBuilder()
                .setSourceId(databaseId())
                .addAllFeatures(features)
                .build();
    }

    public void generate() throws IOException {
        String relativeOutputPath = getRelativeOutputPath();

        List<FeatureSummaryDbo> summaries = new ArrayList<>();
        streamFeatures()
                .distinct()
                .forEachOrdered(model -> {
                    FeatureSummaryDbo summary = encodedFeatureSummary(model);
                    if (summary != null) {
                        summaries.add(summary);
                    }

                    FeatureDbo detailed = encodedFeatureDetailed(model);
                    if (detailed != null) {
                        writer.write(detailed, model.id().string(), relativeOutputPath);
                    }
                });

        Message database = createSummaryDatabase(summaries);
        if (database != null) {
            writer.write(database, getOutputDatabaseName(), "");
        }
    }
}
