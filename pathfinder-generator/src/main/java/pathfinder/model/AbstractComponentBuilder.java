package pathfinder.model;

import java.util.ArrayList;
import java.util.List;

public class AbstractComponentBuilder<SELF extends AbstractComponentBuilder<SELF>> {

    protected final List<Link> links = new ArrayList<>();
    protected final List<Effect> effects = new ArrayList<>();
    protected final List<Choice> choices = new ArrayList<>();
    protected final List<Unlink> unlinks = new ArrayList<>();
    
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
        links.add(new Link(featureId, conditionFormula));
        return self();
    }

    public SELF addEffect(Effect effect) {
        this.effects.add(effect);
        return self();
    }

    public SELF addFeatureSelectByTagChoice(String id, String label, String type, String... optionTags) {
        return addChoice(new FeatureSelectByTagChoice(id, label, type, List.of(optionTags), List.of(), List.of(), FeatureSelectSortBy.NAME));
    }

    public SELF addFeatureSelectByIdsChoice(String id, String label, String type, List<Id> featureIds) {
        return addChoice(new FeatureSelectByTagChoice(id, label, type, List.of(), featureIds, List.of(), FeatureSelectSortBy.NAME));
    }

    public SELF addRepeatingFeatureSelectByTagChoice(String id, String label, String type, String... optionTags) {
        return addChoice(new FeatureSelectByTagChoice(id, label, type, List.of(optionTags), List.of(), List.of(), FeatureSelectSortBy.NAME, true));
    }

    public SELF removeLink(Id remove) {
        this.unlinks.add(new Unlink(remove, ""));
        return self();
    }

    public SELF removeLink(Id remove, String conditionFormula) {
        this.unlinks.add(new Unlink(remove, conditionFormula));
        return self();
    }

    public SELF addChoice(Choice choice) {
        this.choices.add(choice);
        return self();
    }

    @SuppressWarnings("unchecked")
    protected SELF self() {
        return (SELF) this;
    }
}
