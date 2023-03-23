package pathfinder.model.pathfinder;

import lombok.Getter;
import pathfinder.model.Id;
import pathfinder.util.NameToIdConverter;

public enum WeaponProficiency {
    OTHER("Other"),
    SIMPLE("Simple"),
    MARTIAL("Martial"),
    EXOTIC("Exotic");

    @Getter private final Id id;
    private final String name;

    WeaponProficiency(String name) {
        this.id = NameToIdConverter.proficiencyId(name);
        this.name = name;
    }

    public Id getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
