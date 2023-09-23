package pathfinder.model;

import pathfinder.data.StacksDbo;

public record RepeatingStack(Stack stack) implements Stacks {

    @Override
    public StacksDbo toDbo() {
        return StacksDbo.newBuilder()
                .setRepeatingStack(stack.toDbo())
                .build();
    }
}
