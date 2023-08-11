import {v6} from "../compiled";
import Description from "../core/Description";
import {Choice, FeatureSelectChoice, TextChoice} from "./Choice";
import ConditionalComponent from "./ConditionalComponent";
import {AddEffect, Effect, SetFormulaEffect, SetNumberEffect} from "./Effect";
import Feature, {FeatureSummary} from "./Feature";
import Link from "./Link";
import {FixedStack, RepeatingStack, Stack, Stacks} from "./Stack";
import Unlink from "./Unlink";
import ChoiceDbo = v6.ChoiceDbo;
import ConditionalStackComponentDbo = v6.ConditionalStackComponentDbo;
import EffectDbo = v6.EffectDbo;
import FeatureDbo = v6.FeatureDbo;
import FeatureSummaryDbo = v6.FeatureSummaryDbo;
import LinkDbo = v6.LinkDbo;
import StackDbo = v6.StackDbo;
import StacksDbo = v6.StacksDbo;
import UnlinkDbo = v6.UnlinkDbo;

export function decodeFeatureSummary(dbo: FeatureSummaryDbo): FeatureSummary {
  return new FeatureSummary(dbo.id,
      dbo.name,
      dbo.tags,
      dbo.enabledFormula,
      dbo.maxStacks ?? null);
}

export function decodeFeature(dbo: FeatureDbo): Feature {
  return new Feature(dbo.id,
      dbo.name,
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
    case "text": return new TextChoice(dbo.choiceId, dbo.label, dbo.type);
    case "featureSelect": return new FeatureSelectChoice(dbo.choiceId, dbo.label, dbo.type,
        dbo.featureSelect?.optionTags ?? [],
        dbo.featureSelect?.featureIds ?? []);
    default: throw new Error("Unknown choice type: " + dbo.input);
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