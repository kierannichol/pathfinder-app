package pathfinder.v7.model;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import pathfinder.data.v6.FixedStackDbo;
import pathfinder.data.v6.StacksDbo;

public record FixedStacksV7(List<StackV7> stacks) implements StacksV7 {

    @Override
    public StacksDbo toDbo() {
        return StacksDbo.newBuilder()
                .setFixedStack(FixedStackDbo.newBuilder()
                        .addAllStacks(mapList(stacks, StackV7::toDbo)))
                .build();
    }
}
