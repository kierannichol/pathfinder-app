package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pathfinder.data.v2.ClassDatabaseDbo;
import pathfinder.data.v2.ClassDetailsDbo;
import pathfinder.data.v2.ClassSummaryDbo;
import pathfinder.generator.encode.ClassDetailsEncoder;
import pathfinder.generator.encode.ClassSummaryEncoder;
import pathfinder.model.CharacterClass;
import pathfinder.source.ClassSourceDatabase;
import pathfinder.spring.ConditionalOnGeneratorEnabled;

@Service("Class Database Generator")
@ConditionalOnGeneratorEnabled("class")
@Slf4j
@RequiredArgsConstructor
public class ClassDatabaseGenerator extends AbstractDatabaseGenerator<CharacterClass, ClassSummaryDbo, ClassDetailsDbo> {

    private final ClassSourceDatabase classSourceDatabase;
    private final ClassSummaryEncoder classSummaryEncoder;
    private final ClassDetailsEncoder classDataEncoder;

    @Override
    protected Stream<CharacterClass> streamModels() throws IOException {
        return classSourceDatabase.streamClasses()
                .filter(KNOWN_SOURCES);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "classes";
    }

    @Override
    protected String getOutputDatabaseName() {
        return "ClassDatabase";
    }

    @Override
    protected ClassSummaryDbo encodedSummary(CharacterClass model) {
        return classSummaryEncoder.encode(model);
    }

    @Override
    protected ClassDetailsDbo encodedDetailed(CharacterClass model, ClassSummaryDbo summary) {
        return classDataEncoder.encode(model);
    }

    @Override
    protected Message createSummaryDatabase(List<ClassSummaryDbo> classSummaryDbos) {
        return ClassDatabaseDbo.newBuilder()
                .addAllSummaries(classSummaryDbos)
                .build();
    }
}
