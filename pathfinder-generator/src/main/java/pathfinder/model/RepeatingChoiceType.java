package pathfinder.model;

import pathfinder.data.RepeatingChoiceTypeDbo;

public interface RepeatingChoiceType {

    static RepeatingChoiceType none() {
        return new None();
    }

    static RepeatingChoiceType unlimited() {
        return new Unlimited();
    }

    static RepeatingChoiceType maxLimit(int limit) {
        return new MaxLimit(limit);
    }

    static RepeatingChoiceType calculatedLimit(String formula) {
        return new CalculatedLimit(formula);
    }

    RepeatingChoiceTypeDbo toDbo();

    class None implements RepeatingChoiceType {

        @Override
        public RepeatingChoiceTypeDbo toDbo() {
            return RepeatingChoiceTypeDbo.newBuilder()
                    .setNone(RepeatingChoiceTypeDbo.None.newBuilder().build())
                    .build();
        }
    }

    class Unlimited implements RepeatingChoiceType {

        @Override
        public RepeatingChoiceTypeDbo toDbo() {
            return RepeatingChoiceTypeDbo.newBuilder()
                    .setUnlimited(RepeatingChoiceTypeDbo.Unlimited.newBuilder().build())
                    .build();
        }
    }

    class MaxLimit implements RepeatingChoiceType {
        public final int limit;

        public MaxLimit(int limit) {
            this.limit = limit;
        }

        @Override
        public RepeatingChoiceTypeDbo toDbo() {
            return RepeatingChoiceTypeDbo.newBuilder()
                    .setMaxLimit(RepeatingChoiceTypeDbo.MaxLimit.newBuilder()
                            .setLimit(limit)
                            .build())
                    .build();
        }
    }

    class CalculatedLimit implements RepeatingChoiceType {
        public final String formula;

        public CalculatedLimit(String formula) {
            this.formula = formula;
        }

        @Override
        public RepeatingChoiceTypeDbo toDbo() {
            return RepeatingChoiceTypeDbo.newBuilder()
                    .setCalculatedLimit(RepeatingChoiceTypeDbo.CalculatedLimit.newBuilder()
                            .setFormula(formula)
                            .build())
                    .build();
        }
    }
}
