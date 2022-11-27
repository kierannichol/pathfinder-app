package pathfinder.generator;

import java.io.IOException;
import java.nio.file.Path;
import java.util.Comparator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.data.v2.WeaponDatabaseDbo;
import pathfinder.data.v2.WeaponTypeDbo;
import pathfinder.generator.db.WeaponSourceDatabase;
import pathfinder.generator.encode.WeaponTypeEncoder;
import pathfinder.generator.spring.OutputPathValue;

@Service("Weapon Database Generator")
@RequiredArgsConstructor
public class WeaponDatabaseGenerator extends AbstractDatabaseGenerator {
    private final WeaponSourceDatabase weaponSourceDatabase;
    private final WeaponTypeEncoder weaponTypeEncoder;

    @OutputPathValue
    private Path outputBasePath;

    @Override
    public void generate() throws IOException {
        WeaponDatabaseDbo.Builder weaponDatabaseDbo = WeaponDatabaseDbo.newBuilder();

        weaponTypeEncoder.encodeStream(weaponSourceDatabase.streamWeaponTypes())
                .sorted(Comparator.comparing(WeaponTypeDbo::getName))
                .forEachOrdered(weaponDatabaseDbo::addWeaponTypes);

        write(weaponDatabaseDbo.build(), "WeaponDatabase", outputBasePath);
    }
}
