package pathfinder.model;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import pathfinder.data.v4.EffectDbo;
import pathfinder.data.v4.EffectDbo.AddActionDbo;
import pathfinder.data.v4.EffectDbo.AddEntityDbo;
import pathfinder.data.v4.EffectDbo.RenameKeyDbo;
import pathfinder.data.v4.EffectDbo.ReplaceEntityDbo;
import pathfinder.data.v4.EffectDbo.SetActionDbo;

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

    public static Effect setNumber(String targetKey, int value) {
        return new SetNumberEffect(targetKey, value);
    }

    public static Effect addNumber(String targetKey, int delta) {
        return new AddNumberEffect(targetKey, delta);
    }

    public static Effect renameKey(String targetKey, String renamedKey) {
        return new RenameKeyEffect(targetKey, renamedKey);
    }

    public static Effect renameKey(Id targetKey, Id renamedKey) {
        return new RenameKeyEffect(targetKey.string(), renamedKey.string());
    }

    public static Effect addEntity(Id entityId) {
        return new AddEntityEffect(entityId.string());
    }

    public static Effect replaceEntity(Id targetEntityId, Id replacementEntityId) {
        return new ReplaceEntityEffect(targetEntityId.string(), replacementEntityId.string());
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
    private static class RenameKeyEffect extends Effect {
        private final String targetKey;
        private final String renamedKey;

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setRenameAction(RenameKeyDbo.newBuilder()
                            .setTargetKey(targetKey)
                            .setRenamedKey(renamedKey)
                            .build())
                    .build();
        }
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class AddEntityEffect extends Effect {
        private final String entityId;

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setAddEntity(AddEntityDbo.newBuilder()
                            .setEntityId(entityId)
                            .build())
                    .build();
        }
    }

    @RequiredArgsConstructor(access = AccessLevel.PRIVATE)
    private static class ReplaceEntityEffect extends Effect {
        private final String targetEntityId;
        private final String replacementEntityId;

        @Override
        public EffectDbo toDbo() {
            return EffectDbo.newBuilder()
                    .setReplaceEntity(ReplaceEntityDbo.newBuilder()
                            .setTargetEntityId(targetEntityId)
                            .setReplacementEntityId(replacementEntityId)
                            .build())
                    .build();
        }
    }
}
