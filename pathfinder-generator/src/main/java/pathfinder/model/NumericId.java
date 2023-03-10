package pathfinder.model;

public record NumericId(int id) {
    public static final NumericId EMPTY = new NumericId(0);
}
