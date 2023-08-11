package pathfinder.v7.model;

import pathfinder.data.v6.StacksDbo;

public record RepeatingStack(StackV7 stack) implements StacksV7 {

    @Override
    public StacksDbo toDbo() {
        return StacksDbo.newBuilder()
                .setRepeatingStack(stack.toDbo())
                .build();
    }
}
