package pathfinder.model;

public class IntId {
    private static final int ENTITY_ID_BIT_OFFSET = 24;
    private static final int COMPONENT_ID_BIT_OFFSET = 0;

    public static final IntId EMPTY = new IntId(0);

    private final int id;

    public IntId(int id) {
        this.id = id;
    }

    public static IntId of(int entityId, int componentId) {
        return new IntId(((entityId & 0x000F) << ENTITY_ID_BIT_OFFSET) | (componentId & 0x0FFF) << COMPONENT_ID_BIT_OFFSET);
    }

    public int number() {
        return id;
    }
}
