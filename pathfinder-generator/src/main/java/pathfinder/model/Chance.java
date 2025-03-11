package pathfinder.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import pathfinder.data.ChanceDbo;

public record Chance(@JsonProperty("value") String value,
                     @JsonProperty("to_beat") String toBeat) {

    public ChanceDbo toDbo() {
        return ChanceDbo.newBuilder()
                .setValue(value)
                .setToBeat(toBeat)
                .build();
    }
}
