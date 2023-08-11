package pathfinder.v7.generator.mapper;

import org.springframework.stereotype.Component;
import pathfinder.model.pathfinder.CharacterClass;
import pathfinder.v7.model.EffectV7;
import pathfinder.v7.model.FeatureV7;
import pathfinder.v7.model.FeatureV7.FeatureBuilder;
import pathfinder.v7.model.core.BaseAttackBonus;
import pathfinder.v7.model.core.SaveBonus;
import pathfinder.v7.model.wrapper.ClassLevelEditor;

@Component
public class ClassToFeatureMapper {

    public FeatureV7 map(CharacterClass characterClass) {
        FeatureBuilder feature = new FeatureBuilder(characterClass.id())
                .setName(characterClass.name())
                .setDescription(characterClass.description())
                .addTag("class");

        ClassLevelEditor levelEditor = ClassLevelEditor.create();

        BaseAttackBonus.generateClassBabEffects(characterClass, levelEditor);
        SaveBonus.FORT.generateSaveBonuses(characterClass.fort(), levelEditor);
        SaveBonus.WILL.generateSaveBonuses(characterClass.will(), levelEditor);
        SaveBonus.REF.generateSaveBonuses(characterClass.ref(), levelEditor);
        addClassFeaturesToClass(characterClass, levelEditor);
        addProficiencies(characterClass, levelEditor);

        levelEditor.level(1).addFeatureSelectByTagChoice("archetype", "Archetype", "archetype", "archetype+" + characterClass.id().key);

        if (!characterClass.spell_caster_types().isEmpty()) {
            levelEditor.level(1).addEffect(EffectV7.setNumber("trait:spellcaster", 1));
        }
        characterClass.spell_caster_types().forEach(casterType ->
                levelEditor.level(1).addEffect(EffectV7.setNumber("trait:" + casterType + "_spellcaster", 1)));

        addSpecialClassChoicesToClass(characterClass, levelEditor);

        levelEditor.addTo(feature);

        return feature.build();
    }

    private void addProficiencies(CharacterClass characterClass, ClassLevelEditor levelEditor) {
        var level1 = levelEditor.level(1);

        characterClass.weapon_proficiencies().forEach(level1::addLink);
        characterClass.armor_proficiencies().forEach(level1::addLink);
    }

    private void addClassFeaturesToClass(CharacterClass characterClass, ClassLevelEditor levelEditor) {
        characterClass.levels().forEach(classLevelDefinition -> {
            int level = classLevelDefinition.level();
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
                        "sorcerer_bloodline",
                        "sorcerer_bloodline");
                break;
        }
    }
}
