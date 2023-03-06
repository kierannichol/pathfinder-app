package pathfinder.parser.db;

import lombok.RequiredArgsConstructor;
import lombok.Value;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;
import pathfinder.model.pathfinder.WeaponProficiency;
import pathfinder.model.pathfinder.WeaponRange;
import pathfinder.parser.NameToIdConverter;
import pathfinder.util.StringUtils;

@RequiredArgsConstructor(staticName = "of")
@Value
public class WeaponType implements NamedEntity {
    Id.Key id;
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
