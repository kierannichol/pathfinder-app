package pathfinder.model.v3;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import lombok.Getter;

public class Effects {
    @Getter private final List<Effect> effects = new ArrayList<>();

    public Effects setState(int level, String key, int value) {
        this.effects.add(new SetNumericStateEffect(level, key, value));
        return this;
    }

    public Effects setState(int level, String key, String value) {
        this.effects.add(new SetTextStateEffect(level, key, value));
        return this;
    }

    public Effects setState(int level, String key, boolean value) {
        this.effects.add(new SetBooleanStateEffect(level, key, value));
        return this;
    }

    public Effects adjustState(int level, String key, int delta) {
        this.effects.add(new AdjustStateEffect(level, key, delta));
        return this;
    }

    public Effects textChoice(int level, String type, String key, String id, String label) {
        this.effects.add(new TextChoice(id, label, level, type, key));
        return this;
    }

    public Effects addChoicesToType(String type, String... references) {
        this.effects.add(new AddChoicesToType(type, references));
        return this;
    }

    public Effects selectChoice(int level, String type, String id, String label, String... references) {
        long index = this.effects.stream()
                .filter(effect -> effect instanceof SelectChoice)
                .map(SelectChoice.class::cast)
                .filter(choice -> choice.id().matches(Pattern.quote(id) + "(?::\\d+)?"))
                .count();

        String safeId = index == 0 ? id : id + ":" + (index + 1);

        this.effects.add(new SelectChoice(safeId, label, level, type, references));
        return this;
    }
}
