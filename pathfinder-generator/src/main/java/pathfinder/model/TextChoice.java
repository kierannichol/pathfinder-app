package pathfinder.model;

import pathfinder.data.ChoiceDbo;
import pathfinder.data.TextChoiceInputDbo;

public record TextChoice(String choiceId, String label, String type, RepeatingChoiceType repeating) implements Choice {

    public TextChoice(String choiceId, String label, String type) {
        this(choiceId, label, type, RepeatingChoiceType.none());
    }

    @Override
    public ChoiceDbo toDbo() {
        return ChoiceDbo.newBuilder()
                .setChoiceId(choiceId)
                .setLabel(label)
                .setType(type)
                .setRepeating(repeating.toDbo())
                .setText(TextChoiceInputDbo.newBuilder()
                        .build())
                .build();
    }
}
