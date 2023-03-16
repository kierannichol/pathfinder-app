package logic.parse.shuntingyard;

import logic.ResolvedValue;
import logic.util.Lambda2;

public record Comment(String text, Lambda2<ResolvedValue, String, ResolvedValue> fn) implements Node {

}
