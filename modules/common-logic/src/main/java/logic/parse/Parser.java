package logic.parse;

import logic.Resolvable;

public interface Parser {
    Resolvable parse(String text);
}
