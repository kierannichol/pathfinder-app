package logic.parse;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import logic.QuotedTextResolvedValue;
import logic.ResolvedValue;
import logic.parse.shuntingyard.Associativity;
import logic.parse.shuntingyard.OperatorFunction1;
import logic.parse.shuntingyard.OperatorFunction2;
import logic.parse.shuntingyard.OperatorFunction3;
import logic.parse.shuntingyard.ShuntingYardParser;
import logic.util.Lambda1;
import logic.util.Lambda2;
import logic.util.Lambda3;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class FormulaOptimizer {

    private static final ShuntingYardParser PARSER = ShuntingYardParser.create()
            .operator("^", 4, Associativity.RIGHT, opFn2((a, b) -> a + "^" + b))
            .operator("*", 3, Associativity.LEFT, (a,b) -> new MathFunction("*", a, b))
            .operator("/", 3, Associativity.LEFT, (a,b) -> new MathFunction("/", a, b))
            .operator("+", 2, Associativity.LEFT, (a,b) -> new MathFunction("+", a, b))
            .operator("-", 2, Associativity.LEFT, (a,b) -> new MathFunction("-", a, b))
            .operator("!", 2, Associativity.LEFT, opFn1((a) -> "!" + a))
            .operator("<", 3, Associativity.LEFT, opFn2((a, b) -> a + "<" + b))
            .operator("<=", 3, Associativity.LEFT, opFn2((a, b) -> a + "<=" + b))
            .operator(">", 3, Associativity.LEFT, opFn2((a, b) -> a + ">" + b))
            .operator(">=", 3, Associativity.LEFT, opFn2((a, b) -> a + ">=" + b))
            .operator("==", 3, Associativity.LEFT, opFn2((a, b) -> a + "==" + b))
            .operator("!=", 3, Associativity.LEFT, opFn2((a, b) -> a + "!=" + b))
            .operator("AND", 1, Associativity.LEFT, (a, b) -> new AllFunction(List.of(b, a)))
            .operator("OR", 1, Associativity.LEFT, (a, b) -> new AnyFunction(List.of(b, a)))
            .term("true", () -> ResolvedValue.of("true"))
            .term("false", () -> ResolvedValue.of("false"))
            .function("abs", opFn1("abs(%s)"::formatted))
            .function("min", opFn2("min(%s,%s)"::formatted))
            .function("max", opFn2("max(%s,%s)"::formatted))
            .function("floor", opFn1("floor(%s)"::formatted))
            .function("ceil", opFn1("ceil(%s)"::formatted))
            .function("signed", opFn1("signed(%s)"::formatted))
            .function("if", opFn3("if(%s,%s,%s)"::formatted))
            .function("concat", opFn2("concat(%s,%s)"::formatted))
            .function("ordinal", opFn1("ordinal(%s)"::formatted))
            .function("any", AnyFunction::new)
            .function("all", AllFunction::new)
            .variable("@", (context, key) -> ResolvedValue.of("@%s".formatted(key)))
            .variable("@{", "}", (context, key) -> ResolvedValue.of("@{%s}".formatted(key)))
            .variable("min(@", ")", (context, key) -> ResolvedValue.of("min(@%s)".formatted(key)))
            .variable("max(@", ")", (context, key) -> ResolvedValue.of("max(@%s)".formatted(key)))
            .variable("sum(@", ")", (context, key) -> ResolvedValue.of("sum(@%s)".formatted(key)))
            .comment("[", "]", (subject, comment) -> QuotedTextResolvedValue.of(subject, "", comment))
            ;

    public static String optimize(String formulaText) {
        try {
            var resolved = FormulaOptimizer.PARSER.parse(formulaText).resolve();
            if (resolved instanceof MathFunction mf) {
                return mf.asTextNoBrackets();
            }
            return format(resolved);
        } catch (ClassCastException e) {
            log.error(formulaText);
            throw e;
        }
    }

    private static String format(ResolvedValue value) {
        if (value instanceof QuotedTextResolvedValue quoted) {
            return quoted.asQuotedText();
        }
        return value.asText();
    }

    private static OperatorFunction1 opFn1(Lambda1<String, String> fn) {
        return (ResolvedValue a) -> ResolvedValue.of(fn.execute(format(a)));
    }

    private static OperatorFunction2 opFn2(Lambda2<String, String, String> fn) {
        return (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(fn.execute(format(a), format(b)));
    }

    private static OperatorFunction3 opFn3(Lambda3<String, String, String, String> fn) {
        return (ResolvedValue a, ResolvedValue b, ResolvedValue c) -> ResolvedValue.of(fn.execute(format(a), format(b), format(c)));
    }

    @RequiredArgsConstructor
    private static class MathFunction extends AbstractOptimizedFunction {
        private final String operator;
        private final ResolvedValue a;
        private final ResolvedValue b;

        public String operator() {
            return this.operator;
        }

        @Override
        public String asText() {
            return "(" + asTextNoBrackets() + ")";
        }

        private String asTextNoBrackets() {
            return format(a)
                    + operator
                    + format(b);
        }

        private String format(ResolvedValue v) {
            if (v instanceof MathFunction mv) {
                return switch (operator) {
                    case "+", "-" -> switch (mv.operator) {
                        case "+", "-" -> mv.asTextNoBrackets();
                        default -> FormulaOptimizer.format(v);
                    };
                    case "*", "/" -> switch (mv.operator) {
                        case "*", "/" -> mv.asTextNoBrackets();
                        default -> FormulaOptimizer.format(v);
                    };
                    default -> FormulaOptimizer.format(v);
                };
            }
            return FormulaOptimizer.format(v);
        }
    }

    private static class AnyFunction extends AbstractOptimizedFunction {
        private final List<ResolvedValue> values;

        private AnyFunction(List<ResolvedValue> values) {
            this.values = new ArrayList<>();
            for (ResolvedValue next : values) {
                if (next instanceof AnyFunction anyFn) {
                    this.values.addAll(0, anyFn.values);
                    continue;
                }
                this.values.add(0, next);
            }
        }

        @Override
        public String asText() {
            if (values.size() == 1) {
                return format(this.values.get(0));
            }
            return "any(" + values.stream()
                    .map(FormulaOptimizer::format)
                    .collect(Collectors.joining(",")) + ")";
        }
    }

    private static class AllFunction extends AbstractOptimizedFunction {
        private final List<ResolvedValue> values;

        private AllFunction(List<ResolvedValue> values) {
            this.values = new ArrayList<>();
            for (ResolvedValue next : values) {
                if (next instanceof AllFunction allFn) {
                    this.values.addAll(0, allFn.values);
                    continue;
                }
                this.values.add(0, next);
            }
        }

        @Override
        public String asText() {
            if (values.size() == 1) {
                return format(this.values.get(0));
            }
            return "all(" + values.stream()
                    .map(FormulaOptimizer::format)
                    .collect(Collectors.joining(",")) + ")";
        }
    }


    private static abstract class AbstractOptimizedFunction extends ResolvedValue {

        @Override
        public int asNumber() {
            throw new UnsupportedOperationException("No available for optimization");
        }

        @Override
        public double asDecimal() {
            throw new UnsupportedOperationException("No available for optimization");
        }

        @Override
        public boolean asBoolean() {
            throw new UnsupportedOperationException("No available for optimization");
        }
    }
}
