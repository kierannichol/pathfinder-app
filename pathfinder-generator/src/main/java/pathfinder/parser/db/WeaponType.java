package pathfinder.parser.db;

import lombok.RequiredArgsConstructor;
import lombok.Value;
import pathfinder.model.FeatureModel;
import pathfinder.model.WeaponProficiency;
import pathfinder.model.WeaponRange;
import pathfinder.parser.NameToIdConverter;
import pathfinder.util.StringUtils;

@RequiredArgsConstructor(staticName = "of")
@Value
public class WeaponType implements FeatureModel {
    String id;
    String name;
    WeaponProficiency requiredProficiency;
    WeaponRange range;

    public static WeaponType of(String name, WeaponProficiency requiredProficiency, WeaponRange range) {
        String simpleName = formatName(name);
        return new WeaponType(NameToIdConverter.weaponId(simpleName), simpleName, requiredProficiency, range);
    }

    private static String formatName(String originalName) {
        String simpleName = StringUtils.toSimpleName(originalName);
        simpleName = StringUtils.toCamelCase(simpleName);
        return simpleName;
    }
}
