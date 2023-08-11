package pathfinder.v7.model;

import java.util.ArrayList;
import java.util.List;
import pathfinder.model.Id;

public class AbstractComponentBuilder<SELF extends AbstractComponentBuilder<SELF>> {

    protected final List<LinkV7> links = new ArrayList<>();
    protected final List<EffectV7> effects = new ArrayList<>();
    protected final List<ChoiceV7> choices = new ArrayList<>();
    protected final List<UnlinkV7> unlinks = new ArrayList<>();
    
    public SELF addLink(Id featureId) {
        return addLink(featureId.string());
    }

    public SELF addLink(String featureId) {
        return addLink(featureId, "");
    }

    public SELF addLink(Id featureId, String conditionFormula) {
        return addLink(featureId.string(), conditionFormula);
    }

    public SELF addLink(String featureId, String conditionFormula) {
        links.add(new LinkV7(featureId, conditionFormula));
        return self();
    }

    public SELF addEffect(EffectV7 effect) {
        this.effects.add(effect);
        return self();
    }

    public SELF addFeatureSelectByTagChoice(String id, String label, String type, String... optionTags) {
        return addChoice(new FeatureSelectByTagChoiceV7(id, label, type, List.of(optionTags), List.of()));
    }

    public SELF addFeatureSelectByIdsChoice(String id, String label, String type, List<Id> featureIds) {
        return addChoice(new FeatureSelectByTagChoiceV7(id, label, type, List.of(), featureIds));
    }

    public SELF removeLink(Id remove) {
        this.unlinks.add(new UnlinkV7(remove, ""));
        return self();
    }

    public SELF removeLink(Id remove, String conditionFormula) {
        this.unlinks.add(new UnlinkV7(remove, conditionFormula));
        return self();
    }

    public SELF addChoice(ChoiceV7 choice) {
        this.choices.add(choice);
        return self();
    }

    @SuppressWarnings("unchecked")
    protected SELF self() {
        return (SELF) this;
    }
}
