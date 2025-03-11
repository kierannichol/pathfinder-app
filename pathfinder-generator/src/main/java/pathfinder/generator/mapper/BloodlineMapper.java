package pathfinder.generator.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.FeatureModification;
import pathfinder.model.FeatureModification.FeatureModificationBuilder;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.Id;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.ClassFeature;
import pathfinder.model.pathfinder.Feat;
import pathfinder.util.NameUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class BloodlineMapper {
    private static final Pattern SPELL_NAME_AND_LEVEL = Pattern.compile("^(.*?) \\((\\d+)(?:st|nd|rd|th)\\)$");
    private static final Pattern LEVEL_PATTERN = Pattern.compile(".*?(\\d+)(?:st|nd|rd|th) level.*");
    private final ClassFeatureMapper featureMapper;
    private final PathfinderDatabase database;

    public Stream<Feature> flatMap(Bloodline bloodlineModel) {
        var bloodline = new FeatureBuilder(bloodlineModel.id())
                .setName(bloodlineModel.name())
                .setDescription(bloodlineModel.description())
                .addTag(bloodlineModel.id().type);

        var bloodlineStack = new StackBuilder();
        var bloodlineModification = FeatureModification.builder(bloodlineModel.classId());

        List<Feature> featureList = new ArrayList<>();

        Id bloodlinePowerId = Id.of("ability:bloodline_power#%s".formatted(bloodlineModel.classId().key));

        bloodlineModel.bloodlinePowers().forEach(power -> {
            parseLevelFromDescription(power.description().text()).ifPresent(level -> {
                var powerBuilder = ClassFeature.fromFeature(power, bloodlineModel.classId());
                Feature powerFeature = featureMapper.map(powerBuilder).findFirst().get();
                featureList.add(powerFeature);

                bloodlineModification.stack(level)
                        .addsFeature(powerFeature.id())
                        .removesFeature(bloodlinePowerId);
            });
        });

        addBloodlineFeatChoices(bloodlineModel,
                featureList,
                bloodlineModification);

        addBloodlineSpells(bloodlineModel,
                bloodlineModification);

        bloodlineStack.addFeatureModification(bloodlineModification.build());
        bloodline.addFixedStack(bloodlineStack.build());
        featureList.add(bloodline.build());

        return featureList.stream();
    }

    private void addBloodlineSpells(Bloodline bloodlineModel,
            FeatureModificationBuilder bloodlineModification) {
        bloodlineModel.bonusSpells().forEach(spellNameAndLevel -> {
            var matcher = SPELL_NAME_AND_LEVEL.matcher(spellNameAndLevel);
            if (!matcher.find()) {
                throw new IllegalArgumentException("Spell not parsable: " + spellNameAndLevel);
            }

            String name = normalizeSpellName(matcher.group(1));
            int level = Integer.parseInt(matcher.group(2));

            database.query(Query.spell(name)).findFirst()
                            .ifPresent(targetSpell -> bloodlineModification.stack(level)
                                    .addsFeature(targetSpell.id()));
        });
    }

    private Optional<Integer> parseLevelFromDescription(String description) {
        Matcher matches = LEVEL_PATTERN.matcher(description);
        if (!matches.find()) {
            return Optional.empty();
        }
        return Optional.of(Integer.parseInt(matches.group(1)));
    }

    private void addBloodlineFeatChoices(Bloodline bloodline,
            List<Feature> features,
            FeatureModificationBuilder modification) {

        Id originalFeatureId = Id.of("ability:bloodline_feat#%s".formatted(bloodline.classId().key));

        ClassFeature originalFeature = database.getClassFeatureById(originalFeatureId)
                .orElseThrow(() -> new IllegalArgumentException("Class Feature not found: " + originalFeatureId));

        String bonusFeatFeatureId = "ability:bloodline_feat#%s".formatted(bloodline.id().key);
        features.add(Feature.builder(bonusFeatFeatureId)
                        .setName("Bloodline Feat (%s)".formatted(bloodline.name()))
                        .setDescription(originalFeature.description())
                        .addTag("class_feature")
                        .addTag(originalFeature.classId().key)
                        .addTag(originalFeature.id().type)
                        .setRepeatingStack(new StackBuilder()
                                .addChoice(FeatureSelectByTagChoice.builder("bloodline_feat", "Bloodline Feat")
                                        .tag("bonus_feat")
                                        .featureIds(bloodline.bonusFeats().stream()
//                                                .map(featName -> database.query(Query.feat(featName)).findFirst().orElseThrow(() -> new IllegalArgumentException("Feat not found: " + featName)))
                                                .flatMap(featName -> database.query(Query.feat(featName)))
                                                .map(Feat::id)
                                                .toList())
                                        .build())
                                .build())
                .build());

        List<Integer> levels = List.of(7, 13, 19);
        for (int level : levels) {
            modification.stack(level)
                    .addsFeature(Id.of(bonusFeatFeatureId))
                    .removesFeature(originalFeatureId);
//            String conditionFormula = "@%s>=%d".formatted(bloodline.classId(), level);
//            Stack stack = new StackBuilder()
//                    .addFeatureSelectByIdsChoice("%s%d:bloodline_feat".formatted(bloodline.classId().key, level),
//                            "Bloodline Feat",
//                            "bonus_feat",
//                            mapList(bloodline.bonusFeats(), this::findFeatId))
//                    .build();
//            feature.addConditionalStack(new ConditionalStack(conditionFormula, stack));
        }
    }

    private String normalizeSpellName(String rawName) {
        String justName = NameUtils.nameAndParentheses(rawName).name().trim()
                .toLowerCase();

        return switch (justName) {
            case "summon monster i" -> "summon monster 1";
            case "summon monster ii" -> "summon monster 2";
            case "summon monster iii" -> "summon monster 3";
            case "summon monster iv" -> "summon monster 4";
            case "summon monster v" -> "summon monster 5";
            case "summon monster vi" -> "summon monster 6";
            case "summon monster vii" -> "summon monster 7";
            case "summon monster viii" -> "summon monster 8";
            case "summon monster ix" -> "summon monster 9";
            default -> justName;
        };
    }

    private Id findFeatId(String featName) {
        int lastIndex = featName.indexOf(')');
        if (lastIndex > 0) {
            featName = featName.substring(0, lastIndex+1);
        }
        featName = NameUtils.nameAndParentheses(featName).name();

        List<Feat> results = database.query(Query.feat(featName)).toList();
        if (results.isEmpty()) {
            throw new IllegalArgumentException("Unable to find feat: " + featName);
        }

        return results.get(0).id();
    }
}
