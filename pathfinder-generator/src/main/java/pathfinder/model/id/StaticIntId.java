package pathfinder.model.id;

class StaticIntId implements IntId {

    private static final int ENTITY_ID_BIT_OFFSET = 24;
    private static final int COMPONENT_ID_BIT_OFFSET = 0;

    public static IntId of(int entityId, int componentId) {
        return new pathfinder.model.id.StaticIntId(
                ((entityId & 0x000F) << ENTITY_ID_BIT_OFFSET) | (componentId & 0x0FFF) << COMPONENT_ID_BIT_OFFSET);
    }

    private final int id;

    private StaticIntId(int id) {
        this.id = id;
    }

    public int number() {
        return id;
    }
}
