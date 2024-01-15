package pathfinder.model.json;

import com.fasterxml.jackson.databind.module.SimpleModule;
import pathfinder.model.Choice;
import pathfinder.model.ConditionalComponent;
import pathfinder.model.ConditionalStack;
import pathfinder.model.Description;
import pathfinder.model.Effect;
import pathfinder.model.Id;
import pathfinder.model.Link;
import pathfinder.model.Stack;
import pathfinder.model.pathfinder.ClassModification;
import pathfinder.model.pathfinder.ComplexFeature;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.IdAndLevel;
import pathfinder.model.pathfinder.SourceId;

public class PathfinderJsonModule extends SimpleModule {

    public PathfinderJsonModule() {
        addSerializer(Id.class, new IdJsonSerializer());
        addDeserializer(Id.class, new IdJsonDeserializer());
        addSerializer(IdAndLevel.class, new IdAndLevelJsonSerializer());
        addDeserializer(IdAndLevel.class, new IdAndLevelJsonDeserializer());
        addSerializer(Description.class, new DescriptionJsonSerializer());
        addDeserializer(Description.class, new DescriptionJsonDeserializer());
        addSerializer(Choice.class, new ChoiceJsonSerializer());
        addDeserializer(Choice.class, new ChoiceJsonDeserializer());
        addSerializer(SourceId.class, new SourceJsonSerializer());
        addDeserializer(SourceId.class, new SourceJsonDeserializer());
        addDeserializer(ClassModification.class, new ClassModificationJsonDeserializer());
        addSerializer(Effect.class, new EffectJsonSerializer());
        addDeserializer(Effect.class, new EffectJsonDeserializer());
        addSerializer(Link.class, new LinkJsonSerializer());
        addDeserializer(Link.class, new LinkJsonDeserializer());
        addSerializer(Stack.class, new StackJsonSerializer());
        addDeserializer(Stack.class, new StackJsonDeserializer());
        addSerializer(Feature.class, new FeatureJsonSerializer());
        addDeserializer(Feature.class, new FeatureJsonDeserializer());
        addDeserializer(ConditionalComponent.class, new ConditionalComponentJsonDeserializer());
        addDeserializer(ConditionalStack.class, new ConditionalStackJsonDeserializer());
        addSerializer(ComplexFeature.class, new ComplexFeatureJsonSerializer());
        addDeserializer(ComplexFeature.class, new ComplexFeatureJsonDeserializer());
    }
}
