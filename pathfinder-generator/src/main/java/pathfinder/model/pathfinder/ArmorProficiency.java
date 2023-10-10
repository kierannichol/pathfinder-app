package pathfinder.model.pathfinder;

import java.util.Arrays;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

@RequiredArgsConstructor
public enum ArmorProficiency implements NamedEntity {
    OTHER("proficiency:other", "Other", Slot.NONE),
    LIGHT_ARMOR("proficiency:light_armor", "Light Armor Proficiency", Slot.BODY),
    MEDIUM_ARMOR("proficiency:medium_armor", "Medium Armor Proficiency", Slot.BODY),
    HEAVY_ARMOR("proficiency:heavy_armor", "Heavy Armor Proficiency", Slot.BODY),
    BUCKLER("proficiency:buckler", "Buckler Proficiency", Slot.HAND),
    LIGHT_SHIELD("proficiency:light_shield", "Light Shield Proficiency", Slot.HAND),
    HEAVY_SHIELD("proficiency:heavy_shield", "Heavy Shield Proficiency", Slot.HAND),
    TOWER_SHIELD("proficiency:tower_shield", "Tower Shield Proficiency", Slot.HAND);

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

    ArmorProficiency(String id, String name, Slot slot) {
        this.id = Id.of(id);
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
