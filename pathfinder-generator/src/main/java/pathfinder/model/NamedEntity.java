package pathfinder.model;

public interface NamedEntity extends Identity {
    static NamedEntity of(Id id, String name) {
        return new SimpleNamedEntity(id, name);
    }

    String name();
}
