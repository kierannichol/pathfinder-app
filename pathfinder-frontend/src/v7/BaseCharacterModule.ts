import AbilityScores from "../database/AbilityScores";
import {AlignmentChoice, AlignmentFeatures} from "./base/AlignmentFeatures";
import {FeatureSelectChoice, TextChoice} from "./Choice";
import {SetFormulaEffect, SetNumberEffect} from "./Effect";
import Entity, {EntityLevel} from "./Entity";
import Feature, {FeatureBuilder} from "./Feature";
import {LocalSourceModule} from "./SourceModule";

export const BaseCharacterEntity = new Entity([
    new EntityLevel(0, [
      ...AbilityScores.flatMap(abilityScore => [
        new SetNumberEffect(`${abilityScore.id}:base`, 10),
        new SetFormulaEffect(`${abilityScore.id}_score`, `sum(@${abilityScore.id}:*)`),
        new SetFormulaEffect(`${abilityScore.id}_mod`, `floor(@${abilityScore.id}_score / 2) - 5`),
        new SetFormulaEffect(`ability_point_cost:${abilityScore.id}`, `if(@${abilityScore.id}:base==7,-4,0) + if(@${abilityScore.id}:base==8,-2,0) + if(@${abilityScore.id}:base==9,-1,0) + if(@${abilityScore.id}:base==10,0,0) + if(@${abilityScore.id}:base==11,1,0) + if(@${abilityScore.id}:base==12,2,0) + if(@${abilityScore.id}:base==13,3,0) + if(@${abilityScore.id}:base==14,5,0) + if(@${abilityScore.id}:base==15,7,0) + if(@${abilityScore.id}:base==16,10,0) + if(@${abilityScore.id}:base==17,13,0) + if(@${abilityScore.id}:base==18,17,0)`)
      ]),
      new SetFormulaEffect('ability_point_cost', 'sum(@ability_point_cost:*)')
    ], [
        new TextChoice('character_name', 'Character Name', 'name'),
        new FeatureSelectChoice('race', 'Race', 'race', ['race']),
        new FeatureSelectChoice('favored_class', 'Favored Class', 'favored_class', ['favored_class']),
        AlignmentChoice,
        ...AbilityScores.map(abilityScore => new TextChoice(`${abilityScore.id}:base`, abilityScore.name, 'ability_score'))
    ]),
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(level =>
        new EntityLevel(level, [], [
            new FeatureSelectChoice(`class`, 'Class', 'class', ['class']),
            ...(level % 2 === 1) ? [ new FeatureSelectChoice(`feat`, 'Feat', 'feat', ['feat']) ] : []
        ]
    ))
]);

const AbilityScoreFeatures: Feature[] =
    AbilityScores.map(abilityScore => new FeatureBuilder(abilityScore.id + '_score')
        .name(abilityScore.name)
        .tag('ability_score')
        .build())

export const BaseCharacterModule = LocalSourceModule.create('base', [
    ...AbilityScoreFeatures,
    ...AlignmentFeatures,
    new FeatureBuilder('bab')
      .name('Base Attack Bonus')
      .tag('base')
      .build()
])