package pathfinder.v7.model.wrapper;

import java.util.ArrayList;
import java.util.List;
import pathfinder.v7.model.FeatureV7.FeatureBuilder;
import pathfinder.v7.model.StackBuilder;

public class ClassLevelEditor {
    private final List<StackBuilder> stacks;

    public static ClassLevelEditor create() {
        List<StackBuilder> stacks = new ArrayList<>();
        for (int i = 0; i < 20; i++) {
            stacks.add(new StackBuilder());
        }
        return new ClassLevelEditor(stacks);
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
