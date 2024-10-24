package pathfinder.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class AbstractComponentBuilder<SELF extends AbstractComponentBuilder<SELF>> {

    protected final List<Link> links = new ArrayList<>();
    protected final List<Effect> effects = new ArrayList<>();
    protected final List<Choice> choices = new ArrayList<>();
    protected final List<FeatureModification> featureModifications = new ArrayList<>();
    
    public SELF addLink(Id featureId) {
        return addLink(featureId.string());
    }

    public SELF addLink(String featureId) {
        return addLink(new Link(featureId));
    }

    public SELF addLink(Link link) {
        this.links.add(link);
        return self();
    }

    public SELF addLinks(Collection<Link> links) {
        this.links.addAll(links);
        return self();
    }

    public SELF addEffect(Effect effect) {
        this.effects.add(effect);
        return self();
    }

    public SELF addEffects(Collection<Effect> effects) {
        this.effects.addAll(effects);
        return self();
    }

    public SELF addFeatureSelectByTagChoice(String id, String label, String type, String... optionTags) {
        return addChoice(new FeatureSelectByTagChoice(id, label, type, List.of(optionTags), List.of(), List.of(), FeatureSelectSortBy.NAME));
    }

    public SELF addFeatureSelectByIdsChoice(String id, String label, String type, List<Id> featureIds) {
        return addChoice(new FeatureSelectByTagChoice(id, label, type, List.of(), featureIds, List.of(), FeatureSelectSortBy.NAME));
    }

    public SELF addRepeatingFeatureSelectByTagChoice(String id, String label, String type, String... optionTags) {
        return addChoice(new FeatureSelectByTagChoice(id, label, type, List.of(optionTags), List.of(), List.of(), FeatureSelectSortBy.NAME, RepeatingChoiceType.unlimited()));
    }

    public SELF addChoice(Choice choice) {
        this.choices.add(choice);
        return self();
    }

    public SELF addChoices(Collection<Choice> choices) {
        this.choices.addAll(choices);
        return self();
    }

    public SELF addFeatureModification(FeatureModification featureModification) {
        this.featureModifications.add(featureModification);
        return self();
    }

    public SELF addFeatureModifications(Collection<FeatureModification> featureModifications) {
        this.featureModifications.addAll(featureModifications);
        return self();
    }

    @SuppressWarnings("unchecked")
    protected SELF self() {
        return (SELF) this;
    }
}
