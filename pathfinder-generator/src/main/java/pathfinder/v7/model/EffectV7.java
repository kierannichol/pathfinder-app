package pathfinder.v7.model;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import pathfinder.data.v6.EffectDbo;
import pathfinder.data.v6.EffectDbo.AddActionDbo;
import pathfinder.data.v6.EffectDbo.SetActionDbo;
import pathfinder.model.Id;

public abstract class EffectV7 {

    public static EffectV7 setFormula(Id targetKey, String formula) {
        return setFormula(targetKey.string(), formula);
    }

    public static EffectV7 setNumber(Id targetKey, int value) {
        return setNumber(targetKey.string(), value);
    }

    public static EffectV7 addNumber(Id targetKey, int delta) {
        return addNumber(targetKey.string(), delta);
    }

    public static EffectV7 setFormula(String targetKey, String formula) {
        return new SetFormulaEffect(targetKey, formula);
    }

    public static EffectV7 setNumber(String targetKey, int value) {
        return new SetNumberEffect(targetKey, value);
    }

    public static EffectV7 addNumber(String targetKey, int delta) {
        return new AddNumberEffect(targetKey, delta);
    }

    public abstract EffectDbo toDbo();

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class SetFormulaEffect extends EffectV7 {
        private final String targetKey;
        private final String formula;

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setSetAction(SetActionDbo.newBuilder()
                            .setTargetKey(targetKey)
                            .setFormula(formula)
                            .build())
                    .build();
        }
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class SetNumberEffect extends EffectV7 {
        private final String targetKey;
        private final int value;

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setSetAction(SetActionDbo.newBuilder()
                            .setTargetKey(targetKey)
                            .setNumberValue(value)
                            .build())
                    .build();
        }
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class AddNumberEffect extends EffectV7 {
        private final String targetKey;
        private final int delta;

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setAddAction(AddActionDbo.newBuilder()
                            .setTargetKey(targetKey)
                            .setNumberDelta(delta)
                            .build())
                    .build();
        }
    }
}
