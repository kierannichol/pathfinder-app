package pathfinder.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import pathfinder.data.FixedStackDbo;
import pathfinder.data.StacksDbo;

public record FixedStacks(List<Stack> stacks) implements Stacks {

    @Override
    public StacksDbo toDbo() {
        return StacksDbo.newBuilder()
                .setFixedStack(FixedStackDbo.newBuilder()
                        .addAllStacks(mapList(stacks, Stack::toDbo)))
                .build();
    }
}
