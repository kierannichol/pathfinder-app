package pathfinder.model;

import java.util.Optional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Size {
    NONE(0, "N", "N/A"),
    FINE(1, "F", "Fine"),
    DIMINUTIVE(2, "D", "Diminutive"),
    TINY(3, "T", "Tiny"),
    SMALL(4, "S", "Small"),
    MEDIUM(5, "M", "Medium"),
    LARGE(6, "L", "Large"),
    HUGE(7, "H", "Huge"),
    GARGANTUAN(8, "G", "Gargantuan"),
    COLOSSAL(9, "C", "Colossal");

    public static Optional<Size> findByLongName(String longName) {
        for (Size size : Size.values()) {
            if (size.longName().equalsIgnoreCase(longName)) {
                return Optional.of(size);
            }
        }
        return Optional.empty();
    }

    private final int id;
    private final String shortName;
    private final String longName;

    public int id() {
        return id;
    }

    public String shortName() {
        return shortName;
    }

    public String longName() {
        return longName;
    }
}
