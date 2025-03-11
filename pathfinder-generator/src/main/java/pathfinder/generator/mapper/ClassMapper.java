package pathfinder.generator.mapper;

import org.springframework.stereotype.Component;
import pathfinder.model.Effect;
import pathfinder.model.Feature;
import pathfinder.model.Feature.FeatureBuilder;
import pathfinder.model.FeatureSelectByTagChoice;
import pathfinder.model.Tags;
import pathfinder.model.core.BaseAttackBonus;
import pathfinder.model.core.SaveBonus;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.model.wrapper.ClassLevelEditor;

@Component
public class ClassMapper {

    public Feature map(CharacterClass characterClass) {
        FeatureBuilder feature = new FeatureBuilder(characterClass.id())
                .setName(characterClass.name())
                .setDescription(characterClass.description())
                .addTag("class")
                .addTag(characterClass.category());

        ClassLevelEditor levelEditor = ClassLevelEditor.create(characterClass.stacks());

        BaseAttackBonus.generateClassBabEffects(characterClass, levelEditor);
        SaveBonus.FORT.generateSaveBonuses(characterClass.fort(), levelEditor);
        SaveBonus.WILL.generateSaveBonuses(characterClass.will(), levelEditor);
        SaveBonus.REF.generateSaveBonuses(characterClass.ref(), levelEditor);
        addClassFeaturesToClass(characterClass, levelEditor);

        levelEditor.level(1).addRepeatingFeatureSelectByTagChoice("archetype", "Archetype", Tags.of("archetype"),
                "archetype+" + characterClass.id().key);

        levelEditor.level(1).addEffect(Effect.setFormula("max_skill_ranks#" + characterClass.id().key,
                "(%s+@int_mod)*@%s".formatted(characterClass.skill_ranks_per_level(), characterClass.id())));
        characterClass.class_skills()
                .forEach(skill -> levelEditor.level(1).addEffect(Effect.setNumber("trained:" + skill, 1)));

//        addCasterLevels(characterClass, levelEditor);
        addSpellChoices(characterClass, levelEditor);

        levelEditor.addTo(feature);

        return feature.build();
    }

    private void addClassFeaturesToClass(CharacterClass characterClass, ClassLevelEditor levelEditor) {
        characterClass.levels().forEach(classLevelDefinition -> {
            int level = classLevelDefinition.level();
            if (classLevelDefinition.classFeatureIds() == null) {
                return;
            }
            classLevelDefinition.classFeatureIds().forEach(classFeatureId -> {
                levelEditor.level(level).addLink(classFeatureId);
            });
        });
    }

    private void addSpecialClassChoicesToClass(CharacterClass characterClass, ClassLevelEditor levelEditor) {
        switch (characterClass.id().string()) {
            case "class:sorcerer":
                levelEditor.level(1).addFeatureSelectByTagChoice("sorcerer1:bloodline",
                        "Sorcerer Bloodline",
                        Tags.of("sorcerer_bloodline"),
                        "sorcerer_bloodline");
                break;
        }
    }

    //    private void addCasterLevels(CharacterClass characterClass, ClassLevelEditor levelEditor) {
//        OptionalInt maybeMinimumCasterLevel = characterClass.levels().stream()
//                .filter(level -> !level.spellsKnown().isEmpty() || !level.spellsPerDay().isEmpty())
//                .mapToInt(ClassLevel::level)
//                .min();
//
//        if (maybeMinimumCasterLevel.isEmpty()) {
//            return;
//        }
//
//        int minimumCasterLevel = maybeMinimumCasterLevel.getAsInt();
//
//        for (int level = minimumCasterLevel; level <= 20; level++) {
//            levelEditor.level(level).addEffect(Effect.addNumber("caster_level", 1));
//            levelEditor.level(level).addEffect(Effect.addNumber("caster_level#" + characterClass.id().key, 1));
//        }
//
//        if (!characterClass.spell_caster_types().isEmpty()) {
//            levelEditor.level(minimumCasterLevel).addEffect(Effect.setNumber("trait:spellcaster", 1));
//        }
//        characterClass.spell_caster_types().forEach(casterType ->
//                levelEditor.level(minimumCasterLevel).addEffect(Effect.setNumber("trait:" + casterType + "_spellcaster", 1)));
//    }
//
    private void addSpellChoices(CharacterClass characterClass, ClassLevelEditor levelEditor) {

        for (int i = 0; i <= 9; i++) {
            levelEditor.level(1).addChoice(
                    FeatureSelectByTagChoice.builder("%s:spells_%s".formatted(characterClass.id().key, i),
                                    "%s Level %s Spells".formatted(characterClass.name(), i))
                            .tag("spell")
                            .repeating("@trait:level_%s_spells_per_day#%s".formatted(i, characterClass.id().key))
                            .optionTag("spell+%s%d".formatted(characterClass.id().key, i))
                            .build());
        }

//        for (var level : characterClass.levels()) {
//            level.spellsPerDay().forEach((spellLevel, knownCount) -> {
//                spellLevel = spellLevel - 1; // bad data
//                for (int i = 0; i < knownCount; i++) {
//                    levelEditor.level(level.level()).addChoice(
//                            new FeatureSelectByTagChoice(
//                                    "spell%d_%d".formatted(spellLevel, i+1),
//                                    "Level %d Spell".formatted(spellLevel),
//                                    "spell",
//                                    List.of("spell+%s%d".formatted(characterClass.id().key, spellLevel)),
//                                    List.of(),
//                                    List.of(),
//                                    FeatureSelectSortBy.NAME
//                            ));
//                }
//            });
//        }
    }
}
