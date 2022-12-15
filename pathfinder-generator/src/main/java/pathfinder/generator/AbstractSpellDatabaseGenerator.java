package pathfinder.generator;

import static pathfinder.util.ListUtils.mapList;

import com.google.protobuf.Message;
import java.util.Arrays;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import pathfinder.data.ActionTypeDbo;
import pathfinder.data.RangeDbo;
import pathfinder.data.RangeDbo.Category;
import pathfinder.data.v2.SpellDataDbo;
import pathfinder.data.v2.SpellDatabaseDbo;
import pathfinder.data.v2.SpellLevelDbo;
import pathfinder.data.v2.SpellSummaryDbo;
import pathfinder.generator.db.parse.PrerequisiteParser;
import pathfinder.generator.encode.AbilityTypeEncoder;
import pathfinder.generator.encode.SpellLevelEncoder;
import pathfinder.model.Spell;

@Slf4j
public abstract class AbstractSpellDatabaseGenerator extends AbstractDatabaseGenerator<Spell, SpellSummaryDbo, SpellDataDbo> {

    @Autowired
    protected PrerequisiteParser prerequisiteParser;

    @Autowired
    protected AbilityTypeEncoder abilityTypeEncoder;

    @Autowired
    protected SpellLevelEncoder spellLevelEncoder;

    @Override
    protected SpellSummaryDbo encodedSummary(Spell spell) {
        String prerequisiteFormula = prerequisiteParser.extractPrerequisites(spell);

        List<SpellLevelDbo> level = mapList(spell.level(), spellLevelEncoder::encode);

        return SpellSummaryDbo.newBuilder()
                .setId(spell.id())
                .setName(spell.name())
                .setType(abilityTypeEncoder.encode(spell.type()))
                .setPrerequisitesFormula(prerequisiteFormula)
                .addAllLevel(level)
                .build();
    }

    @Override
    protected SpellDataDbo encodedDetailed(Spell spell, SpellSummaryDbo summary) {
        return SpellDataDbo.newBuilder()
                .setId(summary.getId())
                .setName(summary.getName())
                .setType(summary.getType())
                .setPrerequisitesFormula(summary.getPrerequisitesFormula())
                .addAllLevel(summary.getLevelList())
                .setDescription(spell.description())
                .setArea(spell.area())
                .setCastingTime(encodeCastingTime(spell.castingTime()))
                .setDuration(spell.duration())
                .setEffect(spell.effect())
                .setRange(encodeRange(spell.range()))
                .setSchool(spell.school())
                .setTargets(spell.targets())
                .setNotes(spell.note())
                .build();
    }

    @Override
    protected Message createSummaryDatabase(List<SpellSummaryDbo> spellSummaryDbos) {
        return SpellDatabaseDbo.newBuilder()
                .addAllSpellSummaries(spellSummaryDbos)
                .build();
    }

    private ActionTypeDbo encodeCastingTime(String castingTime) {
        String castingTimeText = castingTime.split("\\s+")[0].toLowerCase();
        return switch (castingTimeText) {
            case "immediate" -> ActionTypeDbo.ACTION_TYPE_IMMEDIATE;
            case "free" -> ActionTypeDbo.ACTION_TYPE_FREE;
            case "swift" -> ActionTypeDbo.ACTION_TYPE_SWIFT;
            case "move" -> ActionTypeDbo.ACTION_TYPE_MOVE;
            case "standard" -> ActionTypeDbo.ACTION_TYPE_STANDARD;
            case "full-round" -> ActionTypeDbo.ACTION_TYPE_FULL_ROUND;
            default -> ActionTypeDbo.ACTION_TYPE_UNKNOWN;
        };
    }

    private RangeDbo encodeRange(String range) {
        String rangeText = range.split("\\s+")[0].toLowerCase();

        return Arrays.stream(Category.values())
                .filter(category -> category.name().equalsIgnoreCase(rangeText))
                .findFirst()
                .map(category -> RangeDbo.newBuilder()
                        .setCategory(category)
                        .build())
                .orElseGet(() -> {
                    if (rangeText.isBlank()) {
                        return RangeDbo.newBuilder().build();
                    }

                    if (range.equalsIgnoreCase("primary caster")) {
                        return RangeDbo.newBuilder()
                                .setCategory(Category.PERSONAL)
                                .build();
                    }

                    if (rangeText.equalsIgnoreCase("you")) {
                        return RangeDbo.newBuilder()
                                .setCategory(Category.PERSONAL)
                                .build();
                    }

                    if (rangeText.equalsIgnoreCase("short")) {
                        return RangeDbo.newBuilder()
                                .setCategory(Category.CLOSE)
                                .build();
                    }

                    if (rangeText.equalsIgnoreCase("anywhere")) {
                        return RangeDbo.newBuilder()
                                .setCategory(Category.UNLIMITED)
                                .build();
                    }

                    if (rangeText.equalsIgnoreCase("touch;")) {
                        return RangeDbo.newBuilder()
                                .setCategory(Category.TOUCH)
                                .build();
                    }

                    try {
                        return RangeDbo.newBuilder()
                                .setFeet(Integer.parseInt(rangeText))
                                .build();
                    } catch (NumberFormatException e) {
                        log.warn("Failed to parse range: " + range, e);
                        return RangeDbo.newBuilder()
                                .build();
                    }
                });
    }
}
