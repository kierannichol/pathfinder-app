package pathfinder.v6.model;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import pathfinder.data.v6.EffectDbo;
import pathfinder.data.v6.EffectDbo.AddActionDbo;
import pathfinder.data.v6.EffectDbo.SetActionDbo;
import pathfinder.model.Id;

public abstract class Effect {

    public static Effect setFormula(Id targetKey, String formula) {
        return setFormula(targetKey.string(), formula);
    }

    public static Effect setNumber(Id targetKey, int value) {
        return setNumber(targetKey.string(), value);
    }

    public static Effect addNumber(Id targetKey, int delta) {
        return addNumber(targetKey.string(), delta);
    }

    public static Effect setFormula(String targetKey, String formula) {
        return new Effect.SetFormulaEffect(targetKey, formula);
    }

    public static Effect setNumber(String targetKey, int value) {
        return new Effect.SetNumberEffect(targetKey, value);
    }

    public static Effect addNumber(String targetKey, int delta) {
        return new Effect.AddNumberEffect(targetKey, delta);
    }

    public abstract EffectDbo toDbo();

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class SetFormulaEffect extends Effect {
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
    private static class SetNumberEffect extends Effect {
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
    private static class AddNumberEffect extends Effect {
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
