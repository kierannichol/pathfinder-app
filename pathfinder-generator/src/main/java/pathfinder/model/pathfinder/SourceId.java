package pathfinder.model.pathfinder;

import java.io.Serializable;
import pathfinder.db.IdGenerator;
import pathfinder.db.PersistedIdGenerator;
import pathfinder.db.SourceModuleIdGenerator;
import pathfinder.model.id.IntId;

public class SourceId implements Serializable {

    public static final SourceId NONE = new SourceId(0,"", "", false);

    private final int id;
    private final String code;
    private final boolean enabled;
    private final String name;
    private final String[] aliases;

    private final IdGenerator idGenerator;

    public SourceId(int id, String code, String name, String ...aliases) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.enabled = true;
        this.aliases = aliases;

        this.idGenerator = new PersistedIdGenerator(code,
                new SourceModuleIdGenerator(id));
    }

    public SourceId(int id, String code, String name, boolean enabled, String ...aliases) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.enabled = enabled;
        this.aliases = aliases;

        this.idGenerator = new PersistedIdGenerator(code,
                new SourceModuleIdGenerator(id));
    }

    @Override
    public String toString() {
        return name;
    }

    public IntId generate(String code) {
        return idGenerator.generate(code);
    }

    public String code() {
        return code;
    }

    public String name() {
        return name;
    }

    public String[] aliases() {
        return aliases;
    }

    public boolean enabled() {
        return enabled;
    }

    public int id() {
        return id;
    }
}
