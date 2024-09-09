package pathfinder.model.id;

class StaticIntId implements IntId {

    private static final int ENTITY_ID_BIT_OFFSET = 16;
    private static final int COMPONENT_ID_BIT_OFFSET = 0;

    private static final int MAX_ENTITY_ID = 65535;
    private static final int MAX_COMPONENT_ID = 65535;

    public static IntId of(int entityId, int componentId) {
        if (entityId > MAX_ENTITY_ID) {
            throw new IllegalArgumentException("Entity ID cannot be greater than " + MAX_ENTITY_ID);
        }
        if (componentId > MAX_COMPONENT_ID) {
            throw new IllegalArgumentException("Component ID cannot be greater than " + MAX_COMPONENT_ID);
        }

        int intId = Integer.parseInt("%d%d".formatted(entityId, componentId));

        return new pathfinder.model.id.StaticIntId(intId);
                // ((entityId & 0x00FF) << ENTITY_ID_BIT_OFFSET) | (componentId & 0x00FF) << COMPONENT_ID_BIT_OFFSET);
    }

    private final int id;

    private StaticIntId(int id) {
        this.id = id;
    }

    public int number() {
        return id;
    }
}
