package pathfinder.model.pathfinder;

import java.util.Arrays;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import pathfinder.model.Id;
import pathfinder.parser.NameToIdConverter;

@RequiredArgsConstructor
public enum ArmorProficiency {
    OTHER("Other", Slot.NONE),
    LIGHT_ARMOR("Light Armor", Slot.BODY),
    MEDIUM_ARMOR("Medium Armor", Slot.BODY),
    HEAVY_ARMOR("Heavy Armor", Slot.BODY),
    BUCKLER("Buckler", Slot.HAND),
    LIGHT_SHIELD("Light Shield", Slot.HAND),
    HEAVY_SHIELD("Heavy Shield", Slot.HAND),
    TOWER_SHIELD("Tower Shield", Slot.HAND);

    public static ArmorProficiency find(Id id) {
        return Arrays.stream(ArmorProficiency.values())
                .filter(e -> e.id.equals(id))
                .findFirst()
                .orElse(ArmorProficiency.OTHER);
    }

    public enum Slot {
        NONE,
        BODY,
        HAND
    }

    @Getter private final Id id;
    private final String name;
    private final Slot slot;

    ArmorProficiency(String name, Slot slot) {
        this.id = NameToIdConverter.proficiencyId(name);
        this.name = name;
        this.slot = slot;
    }

    public Id getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean isShield() { return slot == Slot.HAND; }
    public boolean isArmor() { return slot == Slot.BODY; }
}
