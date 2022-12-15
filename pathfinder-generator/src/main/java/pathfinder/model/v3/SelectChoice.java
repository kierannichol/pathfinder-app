package pathfinder.model.v3;

public record SelectChoice(String id, String label, int level, String type, String... references) implements Effect {

}
