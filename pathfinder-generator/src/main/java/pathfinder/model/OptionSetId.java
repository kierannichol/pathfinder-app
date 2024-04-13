package pathfinder.model;

import java.util.Objects;
import pathfinder.model.pathfinder.SourceId;

public class OptionSetId {
    private final SourceId sourceId;
    private final String code;
    private Integer cachedId;

    public static OptionSetId of(SourceId sourceId, String code) {
        return new OptionSetId(sourceId, code);
    }

    public String code() {
        return code;
    }

    public SourceId sourceId() {
        return sourceId;
    }

    public int number() {
        if (cachedId == null) {
            cachedId = sourceId.generate(code).number();
        }
        return cachedId;
    }

    private OptionSetId(SourceId sourceId, String code) {
        this.sourceId = sourceId;
        this.code = code;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OptionSetId that = (OptionSetId) o;
        return Objects.equals(code, that.code)
                && Objects.equals(sourceId, that.sourceId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(sourceId, code);
    }
}
