package pathfinder.generator.convert;

import static pathfinder.util.ListUtils.mapList;

import java.util.List;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.stream.Stream;
import logic.util.Ordinal;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import pathfinder.generator.db.local.FeatSourceDatabase;
import pathfinder.generator.db.local.SpellYamlSourceDatabase;
import pathfinder.model.Effect;
import pathfinder.model.Entity;
import pathfinder.model.Entity.EntityBuilder;
import pathfinder.model.Id;
import pathfinder.model.Identity;
import pathfinder.model.SelectChoice;
import pathfinder.model.Template;
import pathfinder.model.Template.Section;
import pathfinder.model.Template.TemplateBuilder;
import pathfinder.model.pathfinder.Bloodline;
import pathfinder.model.pathfinder.Feature;
import pathfinder.model.pathfinder.Sources;
import pathfinder.model.pathfinder.Spell;
import pathfinder.util.NameUtils;
import pathfinder.util.NameUtils.NameAndParentheses;

@Component
@RequiredArgsConstructor
public class BloodragerBloodlineEntityConverter {
    private final FeatSourceDatabase featSourceDatabase;
    private final SpellYamlSourceDatabase spellSourceDatabase;

    public Stream<Entity> toEntities(Bloodline model) {
        try {
            EntityBuilder entity = Entity.builder()
                    .id(model.id())
                    .name(model.name())
                    .description(model.description())
                    .tags("bloodrager_bloodline")
                    .source(Sources.findSourceByNameOrCode(model.source()));

            List<Id> bonusFeatIds = mapList(model.bonusFeats(), featName -> {
                List<String> nameAndParentheses = NameUtils.extractNameAndParentheses(featName);
                featName = nameAndParentheses.get(0).trim();
                if (featName.contains("(")) {
                    featName = featName.substring(0, featName.indexOf("(")).trim();
                }
                String actualName = featName;
                String option = nameAndParentheses.size() > 1 ? nameAndParentheses.get(1) : null;
                return featSourceDatabase.findFeatByName(actualName)
                        .map(Identity::id)
                        .orElseThrow(
                                () -> new IllegalStateException("Unable to find bloodline bonus feat ID: " + actualName))
                        .withOption(option);
            });

            Function<Integer, Section> createBonusFeatSection = level -> Section.builder()
                    .condition("@class:bloodrager>=" + level)
                    .choice(new SelectChoice("bloodrager" + level + ":bloodline_feat",
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

            model.bonusSpells().forEach(spellName -> {
                NameAndParentheses nameAndParentheses = NameUtils.nameAndParentheses(spellName);
                String actualName = nameAndParentheses.name();
                int level = Ordinal.parseOrdinal(nameAndParentheses.lastParentheses().orElseThrow());

                Spell spell = spellSourceDatabase.findSpellByName(actualName).orElseThrow();

                template.section(Section.builder()
                        .condition("@class:sorcerer>=" + level)
                        .effect(Effect.setNumber(spell.id(), 1))
                        .build());
            });

            entity.template(template.build());
            return Stream.of(entity.build());
        } catch (RuntimeException e) {
            throw new IllegalArgumentException("Failed to create Bloodrager Bloodline entity: " + model.name(), e);
        }
    }
}
