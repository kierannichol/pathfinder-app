package pathfinder.model.pathfinder;

import java.util.Optional;
import lombok.RequiredArgsConstructor;
import pathfinder.model.Id;

@RequiredArgsConstructor
public enum Size {
    NONE(Id.of("size:n"), "N", "N/A", 0, 0),
    FINE(Id.of("size:f"), "F", "Fine", 1, 8),
    DIMINUTIVE(Id.of("size:d"), "D", "Diminutive", 2, 4),
    TINY(Id.of("size:t"), "T", "Tiny", 3, 2),
    SMALL(Id.of("size:s"), "S", "Small", 4, 1),
    MEDIUM(Id.of("size:m"), "M", "Medium", 5, 0),
    LARGE(Id.of("size:l"), "L", "Large", 6, -1),
    HUGE(Id.of("size:h"), "H", "Huge", 7, -2),
    GARGANTUAN(Id.of("size:g"), "G", "Gargantuan", 8, -4),
    COLOSSAL(Id.of("size:c"), "C", "Colossal", 9, -8);

    public static Optional<Size> findByLongName(String longName) {
        for (Size size : Size.values()) {
            if (size.longName().equalsIgnoreCase(longName)) {
                return Optional.of(size);
            }
        }
        return Optional.empty();
    }

    private final Id id;
    private final String shortName;
    private final String longName;
    private final int number;
    private final int sizeMod;

    public Id id() {
        return id;
    }

    public String shortName() {
        return shortName;
    }

    public String longName() {
        return longName;
    }

    public int number() {
        return number;
    }

    public int sizeMod() {
        return sizeMod;
    }
}
