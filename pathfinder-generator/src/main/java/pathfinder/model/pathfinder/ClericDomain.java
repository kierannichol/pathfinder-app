package pathfinder.model.pathfinder;

import java.util.List;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record ClericDomain(
        Id id,
        Id parent_id,
        String name,
        String description,
        List<Feature> granted_powers,
        List<DomainSpell> domain_spells,
        String source) implements NamedEntity, FromSourceBook {

    @Override
    public List<String> sources() {
        return List.of(source);
    }

    public record DomainSpell(int spell_level, Id spell_id) {}
}
