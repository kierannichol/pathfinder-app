package pathfinder.model.pathfinder;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import pathfinder.model.Description;
import pathfinder.model.Id;
import pathfinder.model.NamedEntity;

public record BloodlineWithoutClassId(Id id,
                                      String name,
                                      Description description,
                                      @JsonProperty("bonus_feats") List<String> bonusFeats,
                                      @JsonProperty("bonus_spells") List<String> bonusSpells,
                                      @JsonProperty("bloodline_powers") List<Feature> bloodlinePowers,
                                      String source) implements NamedEntity, FromSourceBook {

    public Bloodline withClassId(Id classId) {
        return new Bloodline(id,
                name,
                description,
                classId,
                bonusFeats,
                bonusSpells,
                bloodlinePowers,
                source);
    }

    @Override
    public List<String> sources() {
        return List.of(source);
    }

//    public Entity toBloodlineEntity() {
//        var entity = Entity.builder()
//                .id(id())
//                .name(name())
//                .description(description())
//                .tags("bloodrager_bloodline");
//
//        var template = Template.builder(id());
//
//        for (int level = 1; level <= 20; level++) {
//            List<Effect> effects = new ArrayList<>();
//            List<Choice> choices = new ArrayList<>();
//
//            modifications().forEach(modification -> {
////                modification.add().forEach(toAdd -> effects.add(Effect.addNumber(toAdd, 1)));
////                modification.remove().forEach(toRemove -> effects.add(Effect.addNumber(toRemove, -1)));
//
//                effects.add(Effect.renameKey(modification.remove(), modification.add()));
//            });
//
//            template.section(new Section("@%s>=%d".formatted(id().withoutOption(), level), effects, choices));
//        }
//
//        return entity
//                .template(template.build())
//                .build();
//    }
}
