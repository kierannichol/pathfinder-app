package logic.util;

import java.util.Optional;

public class Ordinal {
    private static final String[] suffixes = new String[] { "th", "st", "nd", "rd" };

    public static String toString(int n) {
        int v = n % 100;
        return n + suffix((v - 20) % 10)
                .or(() -> suffix(v))
                .orElse(suffixes[0]);
    }

    private static Optional<String> suffix(int index) {
        if (index < suffixes.length && index >= 0) {
            return Optional.of(suffixes[index]);
        }
        return Optional.empty();
    }
}
