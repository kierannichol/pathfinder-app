package pathfinder.db.query;

import java.util.Collection;
import java.util.List;
import java.util.stream.Stream;
import pathfinder.generator.CoreCharacterFeatureProvider;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Spell;

public class SpellQuery implements Query<Spell>, SourceSpecificQuery<SpellQuery> {
    private final String name;
    private Collection<SourceId> sourceId;

    @Override
    public Stream<Spell> query(List<Source> sources, CoreCharacterFeatureProvider coreCharacterFeatureProvider) {
        return sources.stream()
                .filter(this::matches)
                .flatMap(content -> content.spells().stream())
                .filter(this::matches);
    }

    public SpellQuery sources(Collection<SourceId> sourceId) {
        return new SpellQuery(name, sourceId);
    }

    private boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    private boolean matches(Spell spell) {
        return this.name == null || spell.name().equalsIgnoreCase(this.name);
    }

    SpellQuery(String name) {
        this.name = name;
    }

    private SpellQuery(String name, Collection<SourceId> sourceId) {
        this.name = name;
        this.sourceId = sourceId;
    }
}
