import {AddEffect, SetFormulaEffect, SetNumberEffect} from "./Effect.ts";
import {Trait} from "./Trait.ts";
import {data} from "../../compiled";
import Description from "../Description.ts";
import {Link} from "./Link.ts";
import {FeatureSelectCategory, SelectChoice, TextChoice} from "./Choice.ts";
import {Stack} from "./Stack.ts";
import {FeatureModification, StackModification} from "./FeatureModification.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import {Feature} from "./Feature.ts";
import {FixedStack, RepeatingStack, Stacks} from "./Stacks.ts";
import {CharacterLevelTemplate, CharacterTemplate} from "./CharacterTemplate.ts";
import FeatureSummaryDbo = data.FeatureSummaryDbo;
import FeatureDbo = data.FeatureDbo;
import StacksDbo = data.StacksDbo;
import ChoiceDbo = data.ChoiceDbo;
import StackDbo = data.StackDbo;
import CharacterTemplateDbo = data.CharacterTemplateDbo;
import CharacterLevelTemplateDbo = data.CharacterLevelTemplateDbo;
import EffectDbo = data.EffectDbo;
import FeatureSelectChoiceCategoryDbo = data.FeatureSelectChoiceCategoryDbo;
import FeatureSelectChoiceSortByDbo = data.FeatureSelectChoiceSortByDbo;
import StackModificationDbo = data.StackModificationDbo;
import FeatureModificationDbo = data.FeatureModificationDbo;

export function decodeFeatureSummary(dbo: FeatureSummaryDbo): FeatureSummary {
  return new FeatureSummary(dbo.id,
      dbo.name,
      dbo.label ?? undefined,
      dbo.tags,
      // decodeFeatureOptionsTemplate(dbo.options),
      dbo.enabledFormula,
      dbo.maxStacks ?? null);
}

export function decodeFeature(dbo: FeatureDbo): Feature {
  return new Feature(dbo.id,
      dbo.name,
      dbo.label ?? undefined,
      dbo.tags,
      // decodeFeatureOptionsTemplate(dbo.options),
      dbo.enabledFormula,
      dbo.maxStacks ?? null,
      new Description(dbo.description?.text ?? "", dbo.description?.sections ?? {}),
      [ decodeStacks(dbo.id, dbo.stacks ?? new StacksDbo()) ]);
}

// function decodeFeatureOptionsTemplate(dbo: FeatureOptionsDbo|undefined|null): FeatureOptionsTemplate|undefined {
//   if (!dbo) {
//     return undefined;
//   }
//
//   return new FeatureOptionsTemplate(dbo.optionTag, dbo.idTemplate, dbo.prerequisitesTemplate);
// }

function decodeEffect(dbo: EffectDbo): Trait {
  let effect: Trait|undefined = undefined;

  if (dbo.addAction) {
    effect = new AddEffect(dbo.addAction.targetKey, dbo.addAction.numberDelta);
  }
  else if (dbo.setAction && dbo.setAction.formula !== undefined && dbo.setAction.formula !== null) {
    effect = new SetFormulaEffect(dbo.setAction.targetKey, dbo.setAction.formula);
  }
  else if (dbo.setAction && dbo.setAction.numberValue !== undefined && dbo.setAction.numberValue !== null) {
    effect = new SetNumberEffect(dbo.setAction.targetKey, dbo.setAction.numberValue);
  }
  else {
    throw new Error("Unknown effect: " + JSON.stringify(dbo));
  }

  return effect;
}

function decodeChoice(dbo: ChoiceDbo): Trait {
  switch (dbo.input) {
    case "text": return new TextChoice(dbo.choiceId, dbo.label, dbo.type, dbo.repeating ? 1 : 0);
    case "featureSelect": return new SelectChoice(dbo.choiceId, dbo.label, dbo.type,
        dbo.featureSelect?.optionTags ?? [],
        dbo.featureSelect?.featureIds ?? [],
        dbo.featureSelect?.categories?.map(decodeFeatureSelectCategory) ?? [],
        decodeFeatureSelectSortBy(dbo.featureSelect?.sortBy),
        dbo.repeating ? 1 : 0
        );
    default: throw new Error("Unknown choice type: " + dbo.input);
  }
}

function decodeFeatureSelectCategory(dbo: FeatureSelectChoiceCategoryDbo): FeatureSelectCategory {
  return new FeatureSelectCategory(dbo.label, dbo.tag);
}

function decodeFeatureSelectSortBy(dbo: FeatureSelectChoiceSortByDbo|undefined): "none"|"name" {
  switch (dbo) {
    case FeatureSelectChoiceSortByDbo.FEATURE_SELECT_CHOICE_SORTBY_NAME:
      return "name";
    default:
      return "none";
  }
}

function decodeLink(link: string): Link {
  return new Link(link);
}

function decodeStack(dbo: StackDbo): Stack {
  return new Stack([
      ...dbo.effects.map(decodeEffect),
      ...dbo.links.map(decodeLink),
      ...dbo.choices.map(decodeChoice),
      ...dbo.featureModifications.map(decodeFeatureModification)
  ]);
}

function decodeStacks(featureId: string, dbo: StacksDbo): Stacks {
  switch (dbo.stackable) {
    case "fixedStack": return new FixedStack(featureId,dbo.fixedStack?.stacks.map(decodeStack) ?? []);
    case "repeatingStack": return new RepeatingStack(decodeStack(dbo.repeatingStack ?? new StackDbo()));
    default: return new RepeatingStack(Stack.Empty);
  }
}

function decodeFeatureModification(dbo: FeatureModificationDbo): Trait {
  return new FeatureModification(dbo.targetFeatureId,
      dbo.stackModifications.map(decodeStackModification));
}

function decodeStackModification(dbo: StackModificationDbo): StackModification {
  return new StackModification(dbo.targetStackCount,
      dbo.linksToAdd,
      dbo.linksToRemove);
}

export function decodeCharacterTemplate(dbo: CharacterTemplateDbo): CharacterTemplate {
  return new CharacterTemplate(dbo.levels.map(decodeCharacterLevelTemplate));
}

export function decodeCharacterLevelTemplate(dbo: CharacterLevelTemplateDbo): CharacterLevelTemplate {
  return new CharacterLevelTemplate(dbo.levelNumber, [
      ...dbo.effects.map(decodeEffect),
      ...dbo.links.map(decodeLink),
      ...dbo.choices.map(decodeChoice)
  ]);
}