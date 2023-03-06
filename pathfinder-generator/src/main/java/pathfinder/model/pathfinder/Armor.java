package pathfinder.model.pathfinder;

import static pathfinder.model.pathfinder.ArmorProficiency.HEAVY_ARMOR;
import static pathfinder.model.pathfinder.ArmorProficiency.LIGHT_ARMOR;
import static pathfinder.model.pathfinder.ArmorProficiency.MEDIUM_ARMOR;

import java.util.Set;

public class Armor {

    public static final Set<ArmorProficiency> PROFICIENCIES = Set.of(LIGHT_ARMOR, MEDIUM_ARMOR, HEAVY_ARMOR);
}
