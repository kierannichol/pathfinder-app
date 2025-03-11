package pathfinder.model.wrapper;

import java.util.ArrayList;
import java.util.List;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.Stack;
import pathfinder.model.StackBuilder;

public class ClassLevelEditor {
    private final List<StackBuilder> stacks;

    public static ClassLevelEditor create(List<Stack> existing) {
        if (existing == null) {
            existing = List.of();
        }
        List<StackBuilder> stacks = new ArrayList<>();
        for (int i = 0; i < 20; i++) {
            var stack = existing.size() > i ? StackBuilder.copy(existing.get(i)) : new StackBuilder();
            stacks.add(stack);
        }
        return new ClassLevelEditor(stacks);
    }

    public static ClassLevelEditor create() {
        return create(List.of());
    }

    public void addTo(FeatureBuilder classFeature) {
        stacks.stream()
                .map(StackBuilder::build)
                .forEach(classFeature::addFixedStack);
    }

    private ClassLevelEditor(List<StackBuilder> stacks) {
        this.stacks = stacks;
    }

    public StackBuilder level(int level) {
        return this.stacks.get(level-1);
    }
}
