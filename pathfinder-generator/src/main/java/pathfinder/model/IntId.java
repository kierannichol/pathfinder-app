package pathfinder.model;

import java.util.Objects;
import pathfinder.model.pathfinder.SourceId;

public abstract class IntId {
    public static final IntId EMPTY = new IntId() {
        @Override
        public int number() {
            return 0;
        }
    };

    public static IntId of(int entityId, int componentId) {
        return StaticIntId.of(entityId, componentId);
    }

    public static IntId of(SourceId sourceId, String code) {
        return new LazyIntId(sourceId, code);
    }

    public abstract int number();

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        StaticIntId that = (StaticIntId) o;
        return this.number() == that.number();
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), number());
    }

    private static class StaticIntId extends IntId {
        private static final int ENTITY_ID_BIT_OFFSET = 24;
        private static final int COMPONENT_ID_BIT_OFFSET = 0;

        public static IntId of(int entityId, int componentId) {
            return new StaticIntId(((entityId & 0x000F) << ENTITY_ID_BIT_OFFSET) | (componentId & 0x0FFF) << COMPONENT_ID_BIT_OFFSET);
        }

        private final int id;

        private StaticIntId(int id) {
            this.id = id;
        }

        public int number() {
            return id;
        }
    }

    private static class LazyIntId extends IntId {
        private final SourceId sourceId;
        private final String code;
        private Integer cached;

        private LazyIntId(SourceId sourceId, String code) {
            this.sourceId = sourceId;
            this.code = code;
        }

        @Override
        public int number() {
            if (cached == null) {
                cached = sourceId.generate(code).number();
            }
            return cached;
        }
    }
}
