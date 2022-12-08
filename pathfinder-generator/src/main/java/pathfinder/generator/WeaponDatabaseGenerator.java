package pathfinder.generator;

import com.google.protobuf.Message;
import java.io.IOException;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pathfinder.data.v2.WeaponDatabaseDbo;
import pathfinder.data.v2.WeaponDbo;
import pathfinder.data.v2.WeaponTypeDbo;
import pathfinder.generator.db.WeaponSourceDatabase;
import pathfinder.generator.encode.WeaponTypeEncoder;
import pathfinder.parser.db.WeaponType;
import pathfinder.spring.ConditionalOnGeneratorEnabled;

@Service("Weapon Database Generator")
@ConditionalOnGeneratorEnabled("weapon")
@RequiredArgsConstructor
public class WeaponDatabaseGenerator extends AbstractDatabaseGenerator<WeaponType, WeaponTypeDbo, WeaponDbo> {
    private final WeaponSourceDatabase weaponSourceDatabase;
    private final WeaponTypeEncoder weaponTypeEncoder;

    @Override
    protected Stream<WeaponType> streamModels() throws IOException {
        return weaponSourceDatabase.streamWeaponTypes()
                .sorted(Comparator.comparing(WeaponType::name));
    }

    @Override
    protected String getRelativeOutputPath() {
        return null;
    }

    @Override
    protected String getOutputDatabaseName() {
        return "WeaponDatabase";
    }

    @Override
    protected WeaponTypeDbo encodedSummary(WeaponType model) {
        return weaponTypeEncoder.encode(model);
    }

    @Override
    protected WeaponDbo encodedDetailed(WeaponType model, WeaponTypeDbo summary) {
        return null;
    }

    @Override
    protected Message createSummaryDatabase(List<WeaponTypeDbo> weaponTypeDbos) {
        return WeaponDatabaseDbo.newBuilder()
                .addAllWeaponTypes(weaponTypeDbos)
                .build();
    }
}
