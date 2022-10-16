package logic.parse;

import logic.Resolvable;
import logic.ResolvedValue;
import logic.context.DataContext;
import logic.parse.shuntingyard.Associativity;
import logic.parse.shuntingyard.ShuntingYardParser;
import logic.util.Ordinal;

public class Formula {
    private static final ShuntingYardParser PARSER = ShuntingYardParser.create()
            .operator("^", 4, Associativity.RIGHT, (a, b) -> ResolvedValue.of(Math.pow(a.asDecimal(), b.asDecimal())))
            .operator("*", 3, Associativity.LEFT, (a, b) -> ResolvedValue.of(a.asDecimal() * b.asDecimal()))
            .operator("/", 3, Associativity.LEFT, (a, b) -> ResolvedValue.of(a.asDecimal() / b.asDecimal()))
            .operator("+", 2, Associativity.LEFT, (a, b) -> ResolvedValue.of(a.asDecimal() + b.asDecimal()))
            .operator("-", 2, Associativity.LEFT, (a, b) -> ResolvedValue.of(a.asDecimal() - b.asDecimal()))
            .operator("!", 2, Associativity.LEFT, (ResolvedValue a) -> ResolvedValue.of(!a.asBoolean()))
            .operator("<", 3, Associativity.LEFT, (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(a.asDecimal() < b.asDecimal()))
            .operator("<=", 3, Associativity.LEFT, (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(a.asDecimal() <= b.asDecimal()))
            .operator(">", 3, Associativity.LEFT, (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(a.asDecimal() > b.asDecimal()))
            .operator(">=", 3, Associativity.LEFT, (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(a.asDecimal() >= b.asDecimal()))
            .operator("==", 3, Associativity.LEFT, (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(a.equals(b)))
            .operator("!=", 3, Associativity.LEFT, (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(!a.equals(b)))
            .operator("AND", 1, Associativity.LEFT, (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(a.asBoolean() && b.asBoolean()))
            .operator("OR", 1, Associativity.LEFT, (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(a.asBoolean() || b.asBoolean()))
            .term("true", () -> ResolvedValue.of(true))
            .term("false", () -> ResolvedValue.of(false))
            .function("abs", (ResolvedValue a) -> ResolvedValue.of(Math.abs(a.asDecimal())))
            .function("min", (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(Math.min(a.asDecimal(), b.asDecimal())))
            .function("max", (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(Math.max(a.asDecimal(), b.asDecimal())))
            .function("floor", (ResolvedValue a) -> ResolvedValue.of(Math.floor(a.asDecimal())))
            .function("ceil", (ResolvedValue a) -> ResolvedValue.of(Math.ceil(a.asDecimal())))
            .function("signed", (ResolvedValue a) -> ResolvedValue.of((a.asNumber() < 0 ? "" : "+") + a.asNumber()))
            .function("if", (ResolvedValue a, ResolvedValue b, ResolvedValue c) -> a.asBoolean() ? b : c)
            .function("concat", (ResolvedValue a, ResolvedValue b) -> ResolvedValue.of(a.asText() + b.asText()))
            .function("ordinal", (ResolvedValue a) -> ResolvedValue.of(Ordinal.toString(a.asNumber())))
            .variable("@", DataContext::get)
            .variable("@{", "}", DataContext::get)
            .variable("min(@", ")", (context, key) -> context.find(key).reduce((a, b) -> a.asDecimal() < b.asDecimal() ? a : b).orElse(ResolvedValue.none()))
            .variable("max(@", ")", (context, key) -> context.find(key).reduce((a, b) -> a.asDecimal() > b.asDecimal() ? a : b).orElse(ResolvedValue.none()))
            .variable("sum(@", ")", (context, key) -> context.find(key).reduce((a, b) -> ResolvedValue.of(a.asDecimal() + b.asDecimal())).orElse(ResolvedValue.of(0)))
            ;

    public static Resolvable parse(String formulaText) {
        if (formulaText.isBlank()) {
            return Resolvable.empty();
        }
        return PARSER.parse(formulaText);
    }
}
