package pathfinder.model.json;

import com.fasterxml.jackson.databind.module.SimpleModule;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.pathfinder.SourceId;

public class PathfinderJsonModule extends SimpleModule {

    public PathfinderJsonModule() {
        addSerializer(Id.class, new IdJsonSerializer());
        addDeserializer(Id.class, new IdJsonDeserializer());
        addSerializer(Description.class, new DescriptionJsonSerializer());
        addDeserializer(Description.class, new DescriptionJsonDeserializer());
        addSerializer(SourceId.class, new SourceJsonSerializer());
        addDeserializer(SourceId.class, new SourceJsonDeserializer());
    }
}
