package pathfinder.db.query;

import java.util.List;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.MagicSchool;
import pathfinder.model.pathfinder.MagicSchools;

public class MagicSchoolQuery implements Query<MagicSchool> {

    @Override
    public Stream<MagicSchool> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return MagicSchools.ALL.stream();
    }
}
