package pathfinder.model.pathfinder;

import java.util.List;
import pathfinder.model.Id;

public class MagicSchools {
    public static final MagicSchool ABJURATION = new MagicSchool(Id.of("magic_school:abjuration"), "Abjuration");
    public static final MagicSchool CONJURATION = new MagicSchool(Id.of("magic_school:conjuration"), "Conjuration");
    public static final MagicSchool DIVINATION = new MagicSchool(Id.of("magic_school:divination"), "Divination");
    public static final MagicSchool ENCHANTMENT = new MagicSchool(Id.of("magic_school:enchantment"), "Enchantment");
    public static final MagicSchool EVOCATION = new MagicSchool(Id.of("magic_school:evocation"), "Evocation");
    public static final MagicSchool ILLUSION = new MagicSchool(Id.of("magic_school:illusion"), "Illusion");
    public static final MagicSchool NECROMANCY = new MagicSchool(Id.of("magic_school:necromancy"), "Necromancy");
    public static final MagicSchool TRANSMUTATION = new MagicSchool(Id.of("magic_school:transmutation"), "Transmutation");

    public static final List<MagicSchool> ALL = List.of(
            ABJURATION,
            CONJURATION,
            DIVINATION,
            ENCHANTMENT,
            EVOCATION,
            ILLUSION,
            NECROMANCY,
            TRANSMUTATION
    );

    private MagicSchools() {}
}
