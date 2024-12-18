package pathfinder.db.query;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Source;

public class MappedQuery<T,U> implements Query<U> {
    private final Query<T> query;
    private final Function<T,U> mapFn;

    public MappedQuery(Query<T> query, Function<T, U> mapFn) {
        this.query = query;
        this.mapFn = mapFn;
    }

    @Override
    public Stream<U> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return query.query(sources, coreCharacterFeatureProvider)
                .map(mapFn);
    }
}
