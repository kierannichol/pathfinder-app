package pathfinder.model.id;

import pathfinder.model.pathfinder.SourceId;

public interface IntId {
    IntId EMPTY = () -> 0;

    static IntId of(int entityId, int componentId) {
        return StaticIntId.of(entityId, componentId);
    }

    static IntId of(SourceId sourceId, String code) {
        return new LazyIntId(sourceId, code);
    }

    static boolean equals(IntId a, IntId b) {
        return a.number() == b.number();
    }

    int number();
}
