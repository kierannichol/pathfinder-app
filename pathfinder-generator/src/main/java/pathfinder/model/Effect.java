package pathfinder.model;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import pathfinder.data.EffectDbo;
import pathfinder.data.EffectDbo.AddActionDbo;
import pathfinder.data.EffectDbo.SetActionDbo;

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
        return new SetFormulaEffect(targetKey, formula);
    }

    public static Effect setText(String targetKey, String text) {
        return setFormula(targetKey, "\"" + text + "\"");
    }

    public static Effect setNumber(String targetKey, int value) {
        return new SetNumberEffect(targetKey, value);
    }

    public static Effect addNumber(String targetKey, int delta) {
        return new AddNumberEffect(targetKey, delta);
    }

    public static Effect addFormula(String targetKey, String formula) {
        return new AddFormulaEffect(targetKey, formula);
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

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class AddFormulaEffect extends Effect {
        private final String targetKey;
        private final String formula;

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setAddAction(AddActionDbo.newBuilder()
                            .setTargetKey(targetKey)
                            .setFormula(formula)
                            .build())
                    .build();
        }
    }
}
