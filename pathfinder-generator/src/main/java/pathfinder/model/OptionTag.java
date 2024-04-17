package pathfinder.model;

import pathfinder.model.id.IntId;
import pathfinder.model.pathfinder.Sources;

public class OptionTag implements IntId {
    private final String code;

    public static OptionTag of(String code) {
        return new OptionTag(code);
    }

    public int number() {
        return Sources.CORE
                .generate("tag:" + code)
                .number();
    }

    private OptionTag(String code) {
        this.code = code;
    }
}
