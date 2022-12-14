package pathfinder.model;

import lombok.Getter;
import pathfinder.parser.NameToIdConverter;

public enum WeaponProficiency implements FeatureModel {
    OTHER("Other"),
    SIMPLE("Simple"),
    MARTIAL("Martial"),
    EXOTIC("Exotic");

    @Getter private final String id;
    private final String name;

    WeaponProficiency(String name) {
        this.id = NameToIdConverter.proficiencyId(name);
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
