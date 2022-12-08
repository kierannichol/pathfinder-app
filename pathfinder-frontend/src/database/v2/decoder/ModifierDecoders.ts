import {v2} from "../../../compiled";
import AbilityChoice from "../../../model/character/choices/AbilityChoice";
import CharacterChoice, {ChoiceType} from "../../../model/character/choices/CharacterChoice";
import EffectAbilityScoreIncreaseChoice from "../../../model/character/choices/EffectAbilityScoreIncreaseChoice";
import FeatChoice from "../../../model/character/choices/FeatChoice";
import ModifierChoice from "../../../model/character/choices/ModifierChoice";
import {Effect} from "../../../model/character/Effect";
import CharacterChoiceDbo = v2.CharacterChoiceDbo;
import CharacterEffectDbo = v2.CharacterEffectDbo;

export function decodeEffectList(dbos: CharacterEffectDbo[]): Effect[] {
  return dbos
      .map(decodeEffect)
      .filter(x => x !== undefined)
      .map(x => x as Effect);
}

export function decodeEffect(dbo: CharacterEffectDbo): Effect | undefined {
  switch (dbo.effect) {
    case "grantChoice":
      let choice = decodeChoice(dbo.grantChoice?.choice ?? undefined, dbo.level);
      if (!choice) {
        return undefined;
      }
      return Effect.grantChoice(choice);
    case "modifyFeature": {
      let specifics = dbo.modifyFeature;
      if (!specifics) {
        return undefined;
      }
      return Effect.modifyFeature(specifics.featureId, specifics.delta, dbo.level);
    }
    case "setFeature": {
      let specifics = dbo.setFeature;
      if (!specifics) {
        return undefined;
      }
      return Effect.setFeature(specifics.featureId, specifics.value, dbo.level);
    }
    case "grantAbility": {
      let specifics = dbo.grantAbility;
      if (!specifics || !specifics.abilityId) {
        return undefined;
      }
      return Effect.grantAbility(specifics.abilityId, dbo.level);
    }
  }
}

export function decodeChoice(dbo: CharacterChoiceDbo|undefined, level: number): CharacterChoice | undefined {
  if (dbo === undefined) {
    return undefined;
  }

  const choiceId = `level${level}:${dbo.key}`;

  switch (dbo.effect) {
    case "AbilityScoreIncrease":
      let effectDbo = dbo.AbilityScoreIncrease;
      if (!effectDbo) {
        return undefined;
      }
      return new EffectAbilityScoreIncreaseChoice(
          choiceId,
          level,
          effectDbo.delta,
          undefined);
    case "Feat": {
      let specifics = dbo.Feat;
      if (!specifics) {
        return undefined;
      }
      return new FeatChoice(
          level,
          choiceId,
          undefined,
          []
      );
    }
    case "Ability": {
      let specifics = dbo.Ability;
      if (!specifics) {
        return undefined;
      }
      return AbilityChoice.of(
          dbo.label,
          dbo.key,
          ChoiceType.ABILITY,
          level,
          undefined
      ).withFilter(ability => specifics?.abilityIds?.includes(ability.id) ?? true);
    }

    case "Modifier": {
      let specifics = dbo.Modifier;
      if (!specifics) {
        return undefined;
      }
      return ModifierChoice.of(
          dbo.label,
          dbo.key,
          level,
          undefined
      ).withFilter(modifier => specifics?.modifierIds?.includes(modifier.id) ?? true);
    }
  }
  return undefined;
}