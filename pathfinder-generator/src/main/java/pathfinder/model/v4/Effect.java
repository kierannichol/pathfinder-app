package pathfinder.model.v4;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import pathfinder.data.v4.EffectDbo;
import pathfinder.data.v4.EffectDbo.AddActionDbo;
import pathfinder.data.v4.EffectDbo.RenameKeyDbo;
import pathfinder.data.v4.EffectDbo.SetActionDbo;
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
        return new SetFormulaEffect(targetKey, "", formula);
    }

    public static Effect setNumber(String targetKey, int value) {
        return new SetNumberEffect(targetKey, "", value);
    }

    public static Effect addNumber(String targetKey, int delta) {
        return new AddNumberEffect(targetKey, "", delta);
    }

    public static Effect renameKey(String targetKey, String renamedKey) {
        return new RenameKeyEffect(targetKey, renamedKey, "");
    }

    public static Effect renameKey(Id targetKey, Id renamedKey) {
        return new RenameKeyEffect(targetKey.string(), renamedKey.string(), "");
    }

    public abstract Effect onlyIf(String condition);
    public abstract EffectDbo toDbo();

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class SetFormulaEffect extends Effect {
        private final String targetKey;
        private final String condition;
        private final String formula;

        @Override
        public Effect onlyIf(String condition) {
            return new SetFormulaEffect(targetKey, condition, formula);
        }

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setTargetKey(targetKey)
                    .setCondition(condition)
                    .setSetAction(SetActionDbo.newBuilder()
                            .setFormula(formula)
                            .build())
                    .build();
        }
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class SetNumberEffect extends Effect {
        private final String targetKey;
        private final String condition;
        private final int value;

        @Override
        public Effect onlyIf(String condition) {
            return new SetNumberEffect(targetKey, condition, value);
        }

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setTargetKey(targetKey)
                    .setCondition(condition)
                    .setSetAction(SetActionDbo.newBuilder()
                            .setNumberValue(value)
                            .build())
                    .build();
        }
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class AddNumberEffect extends Effect {
        private final String targetKey;
        private final String condition;
        private final int delta;

        @Override
        public Effect onlyIf(String condition) {
            return new AddNumberEffect(targetKey, condition, delta);
        }

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setTargetKey(targetKey)
                    .setCondition(condition)
                    .setAddAction(AddActionDbo.newBuilder()
                            .setNumberDelta(delta)
                            .build())
                    .build();
        }
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class RenameKeyEffect extends Effect {
        private final String targetKey;
        private final String renamedKey;
        private final String condition;

        @Override
        public Effect onlyIf(String condition) {
            return new RenameKeyEffect(targetKey, renamedKey, condition);
        }

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setTargetKey(targetKey)
                    .setCondition(condition)
                    .setRenameAction(RenameKeyDbo.newBuilder()
                            .setRenamedKey(renamedKey)
                            .build())
                    .build();
        }
    }
}
