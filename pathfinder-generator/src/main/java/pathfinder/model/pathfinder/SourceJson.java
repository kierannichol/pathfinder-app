package pathfinder.model.pathfinder;

import java.util.List;

public record SourceJson(String name, String code, boolean enabled, List<String> aliases) {

    public SourceId toId() {
        String[] aliasArray = new String[0];
        if (aliases != null) {
            aliasArray = aliases.toArray(String[]::new);
        }
        return new SourceId(generate(code), code, name, enabled, aliasArray);
    }

    private static int generate(String sourceCode) {
        return Integer.parseInt(sourceCode.substring(3));
    }
}
