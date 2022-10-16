package logic.parse.shuntingyard;

public interface Operator extends Node, Named {
    int precedence();
    Associativity associativity();
}
