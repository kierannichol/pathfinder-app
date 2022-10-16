package pathfinder.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.Value;

public class FormulaBuilder {

    public static AllOfFormulaBuilder allOf(String... clauses) {
        return allOf(Arrays.asList(clauses));
    }

    public static AllOfFormulaBuilder allOf(List<String> clauses) {
        return new PrimaryFormulaBuilder(
                new ArrayList<>(clauses.stream().map(clauseText -> (Clause) new StringClause(clauseText)).toList()),
                "AND");
    }

    public static AnyOfFormulaBuilder anyOf(String... clauses) {
        return anyOf(Arrays.asList(clauses));
    }

    public static AnyOfFormulaBuilder anyOf(List<String> clauses) {
        return new PrimaryFormulaBuilder(
                new ArrayList<>(clauses.stream().map(clauseText -> (Clause) new StringClause(clauseText)).toList()),
                "OR");
    }

    public interface FormulaBuild {
        String build();
    }

    public interface AllOfFormulaBuilder extends FormulaBuild {
        AllOfFormulaBuilder and(String clause);
        AllOfFormulaBuilder and(FormulaBuild clause);
    }

    public interface AnyOfFormulaBuilder extends FormulaBuild {
        AnyOfFormulaBuilder or(String clause);
        AnyOfFormulaBuilder or(FormulaBuild clause);
    }

    @RequiredArgsConstructor
    private static class PrimaryFormulaBuilder implements AllOfFormulaBuilder, AnyOfFormulaBuilder {
        private final List<Clause> clauses;
        private final String combiner;

        public AllOfFormulaBuilder and(String clause) {
            clauses.add(new StringClause(clause));
            return this;
        }

        public AllOfFormulaBuilder and(FormulaBuild clause) {
            clauses.add(new FormulaClause(clause));
            return this;
        }

        public AnyOfFormulaBuilder or(String clause) {
            clauses.add(new StringClause(clause));
            return this;
        }

        public AnyOfFormulaBuilder or(FormulaBuild clause) {
            clauses.add(new FormulaClause(clause));
            return this;
        }

        public String build() {
            String built = clauses.stream()
                    .map(Clause::build)
                    .collect(Collectors.joining(" " + combiner + " "));
            return clauses.size() > 1
                    ? "(" + built + ")"
                    : built;
        }
    }

    private interface Clause {
        String build();
    }

    @Value
    private static class StringClause implements Clause {
        String value;

        @Override
        public String build() {
            return value;
        }
    }

    @RequiredArgsConstructor
    private static class FormulaClause implements Clause {
        private final FormulaBuild builder;

        @Override
        public String build() {
            return builder.build();
        }
    }
}
