package pathfinder.model;

import static pathfinder.model.ArmorProficiency.HEAVY_ARMOR;
import static pathfinder.model.ArmorProficiency.LIGHT_ARMOR;
import static pathfinder.model.ArmorProficiency.MEDIUM_ARMOR;

import java.util.Set;

public class Armor {

    public static final Set<ArmorProficiency> PROFICIENCIES = Set.of(LIGHT_ARMOR, MEDIUM_ARMOR, HEAVY_ARMOR);
}
