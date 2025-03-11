package pathfinder.generator.mapper;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pathfinder.db.PathfinderDatabase;
import pathfinder.db.query.Query;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.FeatureModification;
import pathfinder.model.Id;
import pathfinder.model.StackBuilder;
import pathfinder.model.pathfinder.ClericDomain;
import pathfinder.util.FeatureUtils;
import pathfinder.util.NameToIdConverter;

@Component
@RequiredArgsConstructor
@Slf4j
public class ClericDomainMapper {
    @Autowired private final PathfinderDatabase database;

    public Stream<Feature> flatMap(ClericDomain domain) {
        var featureStream = Stream.of(mapClericDomainFeature(domain));

        featureStream = Stream.concat(featureStream,
                domain.granted_powers().stream().map(this::mapClericDomainPowerFeature));

        return featureStream;
    }

    private Feature mapClericDomainPowerFeature(pathfinder.model.pathfinder.Feature power) {
        var feature = new FeatureBuilder(powerId(power.name()))
                .setName(power.name())
                .setDescription(power.description())
                .addTag("domain_power")
                .addTag("class_feature");

        return feature.build();
    }

    private Feature mapClericDomainFeature(ClericDomain domain) {
        var feature = new FeatureBuilder(domain.id())
                .setName(domain.name())
                .setDescription(domain.description())
                .addTag("cleric_domain")
                .addTag("class_feature");

        FeatureModification.FeatureModificationBuilder modification = FeatureModification.builder("class:cleric");

        for (int i = 0; i < domain.granted_powers().size(); i++) {
            var power = domain.granted_powers().get(i);
            Id powerId = powerId(power.name());
            int index = i;
            int level = FeatureUtils.parseLevelFromDescription(power.description().text()).orElseGet(() -> {
                if (domain.parent_id() == null || index == 0) {
                    return 1;
                }

                var parentDomain = database.query(Query.namedEntity(domain.parent_id()).type(ClericDomain.class)).findFirst().get();
                return FeatureUtils.parseLevelFromDescription(parentDomain.granted_powers().get(1).description().text())
                        .orElse(1);
            });

            modification.stack(level).addsFeature(powerId);
        }

        feature.addFixedStack(new StackBuilder()
                .addFeatureModification(modification.build())
                .build());

        return feature.build();
    }

    private Id powerId(String powerName) {
        return NameToIdConverter.abilityId(powerName);
    }
}
