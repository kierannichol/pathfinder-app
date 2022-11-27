package pathfinder.generator.model;

public record Ability(
        String id,
        String name,
        Type type,
        String description,
        String prerequisites
) {
    public Ability(String id, String name, Type type, String description) {
        this(id, name, type, description, "");
    }

    public enum Type {
        NONE,
        EX,
        SP,
        SU;

        public static Type fromAbilityName(String name) {
            if (name.endsWith("(Ex)")) {
                return Type.EX;
            }
            if (name.endsWith(("(Sp)"))) {
                return Type.SP;
            }
            if (name.endsWith("(Su)")) {
                return Type.SU;
            }
            return Type.NONE;
        }
    }
}