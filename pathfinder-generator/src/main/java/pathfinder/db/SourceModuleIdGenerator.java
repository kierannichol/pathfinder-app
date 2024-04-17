package pathfinder.db;

import pathfinder.data.IdDatabaseDbo;
import pathfinder.data.IdDatabaseDbo.Builder;
import pathfinder.model.Id;
import pathfinder.model.id.IntId;

public class SourceModuleIdGenerator implements IdGenerator {
    private final Builder db = IdDatabaseDbo.newBuilder();
    private final int sourceId;

    public SourceModuleIdGenerator(int sourceId) {
        this.sourceId = sourceId;
    }

    public void set(IdDatabaseDbo db) {
        this.db.mergeFrom(db);
    }

    public IdDatabaseDbo get() {
        return db.build();
    }

    public IntId generate(Id id) {
        return generate(id.string());
    }

    public synchronized IntId generate(String code) {
        int id = db.getCodeToIdOrDefault(code, 0);
        if (id > 0) {
            return IntId.of(sourceId, id);
        }

        id = db.getCodeToIdMap().size() + 2;
        db.putCodeToId(code, id);
        return IntId.of(sourceId, id);
    }
}
