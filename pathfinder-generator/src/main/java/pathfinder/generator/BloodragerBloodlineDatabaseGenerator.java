package pathfinder.generator;

import static pathfinder.util.ListUtils.mapList;

import com.google.protobuf.Message;
import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.data.v4.EntityDatabaseDbo;
import pathfinder.data.v4.EntityDbo;
import pathfinder.data.v4.EntitySummaryDbo;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Entity.EntityBuilder;
import pathfinder.model.Id;
import pathfinder.model.Identity;
import pathfinder.model.SelectChoice;
import pathfinder.model.Template;
import pathfinder.model.Template.Section;
import pathfinder.model.Template.TemplateBuilder;
import pathfinder.model.pathfinder.BloodragerBloodline;
import pathfinder.model.pathfinder.Feature;
import pathfinder.source.local.BloodragerBloodlineSourceDatabase;
import pathfinder.source.local.FeatSourceDatabase;
import pathfinder.util.NameUtils;

@Component
@RequiredArgsConstructor
@Slf4j
public class BloodragerBloodlineDatabaseGenerator extends AbstractDatabaseGenerator<Entity, EntitySummaryDbo, EntityDbo> {
    private static final String DATABASE_NAME = "BloodragerBloodlineDatabase";
    private static final String DATABASE_ID = "bloodrager_bloodline";

    private final BloodragerBloodlineSourceDatabase sourceDatabase;
    private final FeatSourceDatabase featSourceDatabase;

    @Override
    protected Stream<Entity> streamModels() {
        return sourceDatabase.streamBloodlines()
                .filter(model -> model.source() != null)
                .flatMap(this::createEntities);
    }

    @Override
    protected String getRelativeOutputPath() {
        return "v4/" + DATABASE_ID;
    }

    @Override
    protected String getOutputDatabaseName() {
        return "v4/" + DATABASE_NAME;
    }

    @Override
    protected EntitySummaryDbo encodedSummary(Entity model) {
        return model.toSummaryDbo();
    }

    @Override
    protected EntityDbo encodedDetailed(Entity model, EntitySummaryDbo entitySummaryDbo) {
        return model.toDbo();
    }

    @Override
    protected Message createSummaryDatabase(List<EntitySummaryDbo> summaries) {
        return EntityDatabaseDbo.newBuilder()
                .setDatabaseId(DATABASE_ID)
                .addAllSummaries(summaries)
                .build();
    }

    private Stream<Entity> createEntities(BloodragerBloodline model) {
        EntityBuilder entity = Entity.builder()
                .id(model.id())
                .name(model.name())
                .description(model.description())
                .tags(DATABASE_ID);

        List<Id> bonusFeatIds = mapList(model.bonusFeats(), featName -> {
            List<String> nameAndParentheses = NameUtils.extractNameAndParentheses(featName);
            String actualName = nameAndParentheses.get(0);
            String option = nameAndParentheses.size() > 1 ? nameAndParentheses.get(1) : null;
            return featSourceDatabase.namedEntities()
                    .filter(feat -> feat.name().equals(actualName))
                    .map(Identity::id)
                    .findFirst()
                    .orElseThrow(() -> new IllegalStateException("Unable to find bloodline bonus feat ID: " + featName))
                    .withOption(option);
        });

        Function<Integer, Section> createBonusFeatSection = level -> Section.builder()
                .condition("@class:bloodrager>=" + level)
                .choice(new SelectChoice("bloodrager"+level+":bloodline_feat",
                        "Bloodline Feat",
                        "feat",
                        "",
                        List.of(),
                        bonusFeatIds))
                .build();

        BiFunction<Integer, Feature, Section> createBloodlinePowerSection = (level, power) -> Section.builder()
                .condition("@class:bloodrager>=" + level)
                .effect(Effect.addNumber(power.id(), 1))
                .build();

        TemplateBuilder template = Template.builder(model.id());
        template.section(createBloodlinePowerSection.apply(1, model.bloodlinePowers().get(0)));
        template.section(createBloodlinePowerSection.apply(4, model.bloodlinePowers().get(1)));
        template.section(createBonusFeatSection.apply(6));
        template.section(createBloodlinePowerSection.apply(8, model.bloodlinePowers().get(2)));
        template.section(createBonusFeatSection.apply(9));
        template.section(createBonusFeatSection.apply(12));
        template.section(createBloodlinePowerSection.apply(12, model.bloodlinePowers().get(3)));
        template.section(createBonusFeatSection.apply(15));
        template.section(createBloodlinePowerSection.apply(16, model.bloodlinePowers().get(4)));
        template.section(createBonusFeatSection.apply(18));

        entity.template(template.build());
        return Stream.of(entity.build());
    }
}
