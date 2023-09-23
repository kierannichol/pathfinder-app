package pathfinder.generator.mapper;

import static pathfinder.util.ListUtils.mapList;

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
import pathfinder.model.Id;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.Feat;
import pathfinder.util.NameUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class BloodlineMapper {
    private static final Pattern LEVEL_PATTERN = Pattern.compile(".*?(\\d+)(?:st|nd|rd|th) level.*");
    private final FeatureMapper featureMapper;
    private final PathfinderDatabase database;

    public Stream<Feature> flatMap(Bloodline bloodlineModel) {
        var bloodline = new FeatureBuilder(bloodlineModel.id())
                .setName(bloodlineModel.name())
                .setDescription(bloodlineModel.description())
                .addTag(bloodlineModel.id().type);

        var bloodlineStack = new StackBuilder();

        List<Feature> featureList = new ArrayList<>();

        bloodlineModel.bloodlinePowers().forEach(power -> {

            parseLevelFromDescription(power.description().text()).ifPresent(level -> {
                var powerBuilder = Feature.builder(featureMapper.map(power));
                powerBuilder.addTag("bloodline_power");
                Feature powerFeature = powerBuilder.build();
                featureList.add(powerFeature);

                bloodlineStack.addLink(powerFeature.id(),
                        "@%s>=%d".formatted(bloodlineModel.classId(), level));
            });
        });

        addBloodlineFeatChoices(bloodlineModel, bloodlineStack);

        bloodline.addFixedStack(bloodlineStack.build());
        featureList.add(bloodline.build());

        return featureList.stream();
    }

    private Optional<Integer> parseLevelFromDescription(String description) {
        Matcher matches = LEVEL_PATTERN.matcher(description);
        if (!matches.find()) {
            return Optional.empty();
        }
        return Optional.of(Integer.parseInt(matches.group(1)));
    }

    private void addBloodlineFeatChoices(Bloodline bloodline, StackBuilder stack) {
        List<Integer> levels = List.of(7, 13, 19);
        for (int level : levels) {
            stack.addConditionalComponent("@%s>=%d".formatted(bloodline.classId(), level), component ->
                    component.addFeatureSelectByIdsChoice("%s%d:bloodline_feat".formatted(bloodline.classId().key, level),
                            "Bloodline Feat",
                            "bonus_feat",
                            mapList(bloodline.bonusFeats(), this::findFeatId)));
        }
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
