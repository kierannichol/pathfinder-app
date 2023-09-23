import Description from "./Description.ts";
import {Choice, FeatureSelectCategory, FeatureSelectChoice, TextChoice} from "./Choice.ts";
import ConditionalComponent from "./ConditionalComponent.ts";
import {AddEffect, Effect, SetFormulaEffect, SetNumberEffect} from "./Effect.ts";
import Feature, {FeatureSummary} from "./Feature.ts";
import Link from "./Link.ts";
import {FixedStack, RepeatingStack, Stack, Stacks} from "./Stack.ts";
import Unlink from "./Unlink.ts";
import CharacterTemplate, {CharacterLevelTemplate} from "./CharacterTemplate.ts";
import {data} from "../../compiled";
import FeatureSummaryDbo = data.FeatureSummaryDbo;
import FeatureDbo = data.FeatureDbo;
import StacksDbo = data.StacksDbo;
import LinkDbo = data.LinkDbo;
import UnlinkDbo = data.UnlinkDbo;
import ChoiceDbo = data.ChoiceDbo;
import StackDbo = data.StackDbo;
import ConditionalStackComponentDbo = data.ConditionalStackComponentDbo;
import CharacterTemplateDbo = data.CharacterTemplateDbo;
import CharacterLevelTemplateDbo = data.CharacterLevelTemplateDbo;
import EffectDbo = data.EffectDbo;
import FeatureSelectChoiceCategoryDbo = data.FeatureSelectChoiceCategoryDbo;
import FeatureSelectChoiceSortByDbo = data.FeatureSelectChoiceSortByDbo;

export function decodeFeatureSummary(dbo: FeatureSummaryDbo): FeatureSummary {
  return new FeatureSummary(dbo.id,
      dbo.name,
      dbo.label ?? undefined,
      dbo.tags,
      dbo.enabledFormula,
      dbo.maxStacks ?? null);
}

export function decodeFeature(dbo: FeatureDbo): Feature {
  return new Feature(dbo.id,
      dbo.name,
      dbo.label ?? undefined,
      dbo.tags,
      dbo.enabledFormula,
      dbo.maxStacks ?? null,
      new Description(dbo.description?.text ?? "", dbo.description?.sections ?? {}),
      decodeStacks(dbo.stacks ?? new StacksDbo()));
}

function decodeEffect(dbo: EffectDbo): Effect {
  if (dbo.addAction) {
    return new AddEffect(dbo.addAction.targetKey, dbo.addAction.numberDelta);
  }

  if (dbo.setAction && dbo.setAction.formula) {
    return new SetFormulaEffect(dbo.setAction.targetKey, dbo.setAction.formula);
  }

  if (dbo.setAction && dbo.setAction.numberValue) {
    return new SetNumberEffect(dbo.setAction.targetKey, dbo.setAction.numberValue);
  }

  throw new Error("Unknown effect: " + dbo.action);
}

function decodeLink(dbo: LinkDbo): Link {
  return new Link(dbo.featureId,
      dbo.conditionFormula ?? undefined);
}

function decodeUnlink(dbo: UnlinkDbo): Unlink {
  return new Unlink(dbo.featureId,
      dbo.conditionFormula ?? undefined);
}

function decodeChoice(dbo: ChoiceDbo): Choice {
  switch (dbo.input) {
    case "text": return new TextChoice(dbo.choiceId, dbo.label, dbo.type, dbo.repeating ? 1 : 0);
    case "featureSelect": return new FeatureSelectChoice(dbo.choiceId, dbo.label, dbo.type,
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

function decodeStack(dbo: StackDbo): Stack {
  return new Stack(
      dbo.effects.map(decodeEffect),
      dbo.links.map(decodeLink),
      dbo.unlinks.map(ul => decodeUnlink(ul)),
      dbo.choices.map(decodeChoice),
      dbo.conditionalComponents.map(decodeConditionalComponent));
}

function decodeStacks(dbo: StacksDbo): Stacks {
  switch (dbo.stackable) {
    case "fixedStack": return new FixedStack(dbo.fixedStack?.stacks.map(decodeStack) ?? []);
    case "repeatingStack": return new RepeatingStack(decodeStack(dbo.repeatingStack ?? new StackDbo()));
    default: return new RepeatingStack(Stack.Empty);
  }
}

function decodeConditionalComponent(dbo: ConditionalStackComponentDbo): ConditionalComponent {
  return new ConditionalComponent(dbo.conditionFormula,
      dbo.effects.map(decodeEffect),
      dbo.links.map(decodeLink),
      dbo.choices.map(decodeChoice));
}

export function decodeCharacterTemplate(dbo: CharacterTemplateDbo): CharacterTemplate {
  return new CharacterTemplate(dbo.levels.map(decodeCharacterLevelTemplate));
}

export function decodeCharacterLevelTemplate(dbo: CharacterLevelTemplateDbo): CharacterLevelTemplate {
  return new CharacterLevelTemplate(dbo.levelNumber,
      dbo.effects.map(decodeEffect),
      dbo.links.map(decodeLink),
      dbo.unlinks.map(decodeUnlink),
      dbo.choices.map(decodeChoice));
}