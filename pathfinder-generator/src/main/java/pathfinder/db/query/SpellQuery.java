package pathfinder.db.query;

import java.util.Collection;
import pathfinder.model.Source;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Spell;

public class SpellQuery implements SourceSpecificQuery<SpellQuery> {
    private final String name;
    private Collection<SourceId> sourceId;

    public SpellQuery sources(Collection<SourceId> sourceId) {
        return new SpellQuery(name, sourceId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return sourceId.contains(source.sourceId());
    }

    public boolean matches(Spell spell) {
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
