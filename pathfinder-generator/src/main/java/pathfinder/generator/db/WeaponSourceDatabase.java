package pathfinder.generator.db;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;
import javax.annotation.PostConstruct;
import org.springframework.stereotype.Service;
import pathfinder.model.pathfinder.Weapons;
import pathfinder.parser.db.WeaponType;

@Service("Weapon Source Database")
public class WeaponSourceDatabase {
    private final List<WeaponType> weaponTypes = new ArrayList<>();

    @PostConstruct
    private void load() {
        weaponTypes.addAll(Weapons.ALL_WEAPONS);
    }

    public Stream<WeaponType> streamWeaponTypes() {
        return weaponTypes.stream();
    }
}
