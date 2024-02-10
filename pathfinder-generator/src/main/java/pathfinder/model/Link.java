package pathfinder.model;

public record Link(String featureId) {

    public String toDbo() {
        return featureId;
    }
}
