package pathfinder.v7.model;

import pathfinder.data.v6.ChoiceDbo;
import pathfinder.data.v6.TextChoiceInputDbo;

public record TextChoiceV7(String choiceId, String label, String type) implements ChoiceV7 {

    @Override
    public ChoiceDbo toDbo() {
        return ChoiceDbo.newBuilder()
                .setChoiceId(choiceId)
                .setLabel(label)
                .setType(type)
                .setText(TextChoiceInputDbo.newBuilder()
                        .build())
                .build();
    }
}
