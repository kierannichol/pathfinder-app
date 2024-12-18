package pathfinder.model;

import pathfinder.data.ChoiceDbo;
import pathfinder.data.TextChoiceInputDbo;

public record TextChoice(String choiceId, String label, Tags tags, RepeatingChoiceType repeating) implements Choice {

    public TextChoice(String choiceId, String label, String... tags) {
        this(choiceId, label, Tags.of(tags), RepeatingChoiceType.none());
    }

    public TextChoice(String choiceId, String label, Tags tags) {
        this(choiceId, label, tags, RepeatingChoiceType.none());
    }

    @Override
    public ChoiceDbo toDbo() {
        return ChoiceDbo.newBuilder()
                .setChoiceId(choiceId)
                .setLabel(label)
                .addAllTags(tags.toDbos())
                .setRepeating(repeating.toDbo())
                .setText(TextChoiceInputDbo.newBuilder()
                        .build())
                .build();
    }
}
