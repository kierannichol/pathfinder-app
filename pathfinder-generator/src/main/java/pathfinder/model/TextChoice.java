package pathfinder.model;

import lombok.RequiredArgsConstructor;
import pathfinder.data.v4.ChoiceDbo;
import pathfinder.data.v4.ChoiceDbo.TextChoiceDbo;

@RequiredArgsConstructor
public class TextChoice implements Choice {
    private final String id;
    private final String label;
    private final String type;
    private final String condition;

    @Override
    public ChoiceDbo toDbo() {
        return ChoiceDbo.newBuilder()
                .setId(id)
                .setLabel(label)
                .setType(type)
                .setCondition(condition)
                .setText(TextChoiceDbo.newBuilder().build())
                .build();
    }
}
