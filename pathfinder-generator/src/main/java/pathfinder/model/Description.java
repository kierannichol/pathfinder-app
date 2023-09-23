package pathfinder.model;

import com.google.common.collect.ImmutableMap;
import java.util.HashMap;
import java.util.Map;
import java.util.function.BiConsumer;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import pathfinder.data.DescriptionDbo;

@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Description {
    private String text;
    private final Map<String, String> sections;

    public static Description empty() {
        return new Description("", new HashMap<>());
    }

    public static Description create(String text) {
        return new Description(text, new HashMap<>());
    }

    public void text(String text) {
        this.text = text;
    }

    public Description addSection(String name, String text) {
        if (text != null && !text.isBlank()) {
            sections.put(name, text);
        }
        return this;
    }

    public String text() {
        return this.text;
    }

    public void sections(BiConsumer<String, String> consumer) {
        this.sections.forEach(consumer);
    }

    public Map<String, String> sections() {
        return ImmutableMap.copyOf(this.sections);
    }

    public DescriptionDbo toDbo() {
        return DescriptionDbo.newBuilder()
                .setText(this.text())
                .putAllSections(this.sections())
                .build();
    }

    @Override
    public String toString() {
        return "Description{" +
                "text='" + text + '\'' +
                ", sections=" + sections +
                '}';
    }
}
