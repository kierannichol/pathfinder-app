package pathfinder.db.modify;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import pathfinder.db.AbstractLocalPathfinderDatabaseModifier;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Feature.FeatureBuilder;

@Slf4j
@Component
public class FixNameModifier extends AbstractLocalPathfinderDatabaseModifier {

    @Override
    protected void modify() {
        list("db/discovery")
                .forEach(path -> {
                    Feature original = load(path, Feature.class);
                    FeatureBuilder modified = Feature.builder(original);

//                    String name = original.name();
//                    name = NameUtils.fixNameOrder(name);
//                    name = NameUtils.sanitize(name);
//                    name = StringUtils.capitalize(name);
//                    modified.name(name);

                    save("discovery/" + path.getFileName(), modified.build());
                });
    }
}
