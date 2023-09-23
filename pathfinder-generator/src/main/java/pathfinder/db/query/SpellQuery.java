package pathfinder.db.query;

import pathfinder.model.Source;
import pathfinder.model.pathfinder.SourceId;
import pathfinder.model.pathfinder.Spell;

public class SpellQuery implements SourceSpecificQuery<SpellQuery> {
    private final String name;
    private SourceId sourceId;

    public SpellQuery source(SourceId sourceId) {
        return new SpellQuery(name, sourceId);
    }

    public boolean matches(Source source) {
        if (sourceId == null) {
            return true;
        }
        return source.sourceId().equals(sourceId);
    }

    public boolean matches(Spell spell) {
        return this.name == null || spell.name().equalsIgnoreCase(this.name);
    }

    SpellQuery(String name) {
        this.name = name;
    }

    private SpellQuery(String name, SourceId sourceId) {
        this.name = name;
        this.sourceId = sourceId;
    }
}
