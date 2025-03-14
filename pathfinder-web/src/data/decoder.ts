import {AddFormulaEffect, AddNumberEffect, Effect, SetFormulaEffect, SetNumberEffect} from "./Effect.ts";
import {Trait} from "./Trait.ts";
import {data} from "@/compiled";
import Description from "./Description.ts";
import {Link} from "./Link.ts";
import {FeatureSelectCategory, MultiSelectChoice, SelectChoice, TextChoice} from "./Choice.ts";
import {Stack} from "./Stack.ts";
import {FeatureModification, StackModification} from "./FeatureModification.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import {Feature} from "./Feature.ts";
import {ConditionalStack, FixedStack, RepeatingStack, Stacks} from "./Stacks.ts";
import {CharacterLevelTemplate, CharacterTemplate} from "./CharacterTemplate.ts";
import {Item} from "./Item.ts";
import {ItemSummary} from "./ItemSummary.ts";
import {ItemOption, ItemOptionSummary} from "./ItemOption.ts";
import {ItemOptionSet} from "./ItemOptionSet.ts";
import {ItemOptionGroup} from "./ItemOptionGroup.ts";
import {FeatureOptionsQuery} from "./FeatureOptionsQuery.ts";
import {ChoiceModification} from "@/data/ChoiceModification.ts";
import {AttackModification} from "@/data/AttackModification.ts";
import {Attack} from "@/data/Attack.ts";
import {Chance} from "@/data/Chance.ts";
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
import ItemSummaryDbo = data.ItemSummaryDbo;
import ItemDbo = data.ItemDbo;
import ItemOptionSetDbo = data.ItemOptionSetDbo;
import ItemOptionSummaryDbo = data.ItemOptionSummaryDbo;
import ItemOptionDbo = data.ItemOptionDbo;
import DescriptionDbo = data.DescriptionDbo;
import ItemOptionGroupDbo = data.ItemOptionGroupDbo;
import RepeatingChoiceTypeDbo = data.RepeatingChoiceTypeDbo;
import ChoiceModificationDbo = data.ChoiceModificationDbo;
import AttackModificationDbo = data.AttackModificationDbo;
import AttackDbo = data.AttackDbo;
import ChanceDbo = data.ChanceDbo;

export function decodeDescription(dbo: DescriptionDbo|null|undefined): Description {
  return new Description(dbo?.text ?? "", dbo?.sections ?? {});
}

function decodeFeatureOptionsQuery(dbo: data.FeatureOptionsDbo | null | undefined): FeatureOptionsQuery|undefined {
  if (!dbo || !dbo.select) return undefined;
  return new FeatureOptionsQuery(
      dbo.select.optionTag,
      dbo.select.idTemplate,
      dbo.select.prerequisitesTemplate);
}

export function decodeFeatureSummary(dbo: FeatureSummaryDbo): FeatureSummary {
  return new FeatureSummary(dbo.id,
      dbo.name,
      dbo.label ?? undefined,
      dbo.tags,
      // decodeFeatureOptionsTemplate(dbo.options),
      dbo.enabledFormula,
      dbo.maxStacks ?? null,
      decodeFeatureOptionsQuery(dbo.options));
}

export function decodeFeature(dbo: FeatureDbo): Feature {

  return new Feature(dbo.id,
      dbo.name,
      dbo.label ?? undefined,
      dbo.tags,
      // decodeFeatureOptionsTemplate(dbo.options),
      dbo.enabledFormula,
      dbo.maxStacks ?? null,
      decodeFeatureOptionsQuery(dbo.options),
      new Description(dbo.description?.text ?? "", dbo.description?.sections ?? {}),
      [
          decodeStacks(dbo.id, dbo.stacks ?? new StacksDbo()),
          ...dbo.conditionalStacks.map(csd => decodeConditionStack(dbo.id, csd))
      ],
      decodeAttackModification(dbo.name, dbo.attackModifier),
      dbo.attacks.map(decodeAttack));
}

function decodeAttack(dbo: AttackDbo): Attack {
  return new Attack(
      dbo.name,
      dbo.condition,
      decodeChance(dbo.chanceToHit),
      dbo.hitDamage,
      dbo.missDamage);
}

function decodeChance(dbo: ChanceDbo|null|undefined): Chance|null {
  if (!dbo) return null;
  return new Chance(dbo.value, dbo.toBeat);
}

export function decodeItemSummary(dbo: ItemSummaryDbo, sourceId: number): ItemSummary {
  return new ItemSummary(dbo, sourceId);
  // return new ItemSummary(dbo.id,
  //     sourceId,
  //     dbo.name,
  //     dbo.cost,
  //     dbo.weight,
  //     dbo.tags ?? [],
  //     dbo.optionSets ?? [],
  //     );
}

export function decodeItem(dbo: ItemDbo, sourceId: number): Item {
  return new Item(dbo.id,
      sourceId,
      dbo.name,
      dbo.cost,
      dbo.weight,
      dbo.tags ?? [],
      dbo.optionSets ?? [],
      decodeDescription(dbo.description),
      dbo.actions ?? [],
      dbo.stats ?? {},
      dbo.effects.map(decodeEffect),
      decodeAttackModification(dbo.name, dbo.attackModifier),
      dbo.attacks.map(decodeAttack));
}

export function decodeItemOptionSummary(dbo: ItemOptionSummaryDbo): ItemOptionSummary {
  return new ItemOptionSummary(dbo.id,
      dbo.name,
      dbo.baseNamePrefix,
      dbo.baseNamePostfix,
      dbo.pointCost,
      dbo.currencyCost,
      dbo.currencyCostByWeight,
      dbo.tags);
}

export function decodeItemOption(dbo: ItemOptionDbo): ItemOption {
  return new ItemOption(dbo.id,
      dbo.name,
      dbo.baseNamePrefix,
      dbo.baseNamePostfix,
      dbo.pointCost,
      dbo.currencyCost,
      dbo.currencyCostByWeight,
      dbo.tags,
      decodeDescription(dbo.description),
      decodeAttackModification(dbo.name, dbo.attackModifier),
      dbo.stats ?? {});
}

export function decodeItemOptionGroup(dbo: ItemOptionGroupDbo): ItemOptionGroup {
  return new ItemOptionGroup(
      dbo.name,
      dbo.optionTags,
      dbo.hasMaxSelectable,
      dbo.maxSelectable);
}

export function decodeItemOptionSet(dbo: ItemOptionSetDbo): ItemOptionSet {
  return new ItemOptionSet(dbo.id,
      dbo.hasPoints,
      dbo.hasMaxPoints,
      dbo.maxPoints,
      dbo.pointCurrencyCost,
      dbo.optionGroups.map(decodeItemOptionGroup));
}

// function decodeFeatureOptionsTemplate(dbo: FeatureOptionsDbo|undefined|null): FeatureOptionsTemplate|undefined {
//   if (!dbo) {
//     return undefined;
//   }
//
//   return new FeatureOptionsTemplate(dbo.optionTag, dbo.idTemplate, dbo.prerequisitesTemplate);
// }

function decodeEffect(dbo: EffectDbo): Effect {
  let effect: Effect|undefined = undefined;

  if (dbo.addAction && dbo.addAction.formula !== undefined && dbo.addAction.formula !== null) {
    effect = new AddFormulaEffect(dbo.addAction.targetKey, dbo.addAction.formula);
  }
  else if (dbo.addAction && dbo.addAction.numberDelta !== undefined && dbo.addAction.numberDelta !== null) {
    effect = new AddNumberEffect(dbo.addAction.targetKey, dbo.addAction.numberDelta);
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
    case "text": return new TextChoice(dbo.choiceId, dbo.label, dbo.tags, dbo.repeating ? 1 : 0);
    case "featureSelect": return (dbo.repeating?.type ?? "none") === "none"
      ? new SelectChoice(dbo.choiceId, dbo.label, dbo.tags,
            dbo.featureSelect?.optionTags ?? [],
            dbo.featureSelect?.featureIds ?? [],
            dbo.featureSelect?.categories?.map(decodeFeatureSelectCategory) ?? [],
            decodeFeatureSelectSortBy(dbo.featureSelect?.sortBy),
            0
        )
      : new MultiSelectChoice(dbo.choiceId,
            dbo.label,
            dbo.tags,
            dbo.featureSelect?.optionTags ?? [],
            dbo.featureSelect?.featureIds ?? [],
            dbo.featureSelect?.categories?.map(decodeFeatureSelectCategory) ?? [],
            decodeFeatureSelectSortBy(dbo.featureSelect?.sortBy),
            1,
            decodeRepeatingChoiceType(dbo.repeating ?? new RepeatingChoiceTypeDbo())
        );
    default: throw new Error("Unknown choice type: " + dbo.input);
  }
}

function decodeRepeatingChoiceType(dbo: RepeatingChoiceTypeDbo): number | string | null {
  switch (dbo.type) {
    case "none":
      return 1;
    case "unlimited":
      return null;
    case "maxLimit":
      return dbo.maxLimit?.limit ?? null;
    case "calculatedLimit":
      return dbo.calculatedLimit?.formula ?? null;
  }
  return null;
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
    case "repeatingStack": return new RepeatingStack(featureId, decodeStack(dbo.repeatingStack ?? new StackDbo()));
    default: return new RepeatingStack(featureId, Stack.Empty);
  }
}

function decodeConditionStack(featureId: string, dbo: data.ConditionalStackDbo): ConditionalStack {
  return new ConditionalStack(featureId,
      dbo.conditionFormula,
      decodeStack(dbo));
}

function decodeFeatureModification(dbo: FeatureModificationDbo): Trait {
  return new FeatureModification(dbo.stackModifications.map(smDbo => decodeStackModification(dbo.targetFeatureId, smDbo)));
}

function decodeStackModification(targetFeatureId: string, dbo: StackModificationDbo): StackModification {
  return new StackModification(
      targetFeatureId,
      dbo.targetStackCount,
      dbo.linksToAdd.map(linkId => new Link(linkId)),
      dbo.linksToRemove);
}

function decodeChoiceModification(dbo: ChoiceModificationDbo): Trait {
  return new ChoiceModification(dbo.targetChoiceId,
      dbo.tagsToAdd,
      dbo.tagsToRemove,
      dbo.featuresToAdd,
      dbo.featuresToRemove);
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

function decodeAttackModification(name: string, dbo: AttackModificationDbo|null|undefined): AttackModification|undefined {
  if (!dbo) return undefined;
  return new AttackModification(name,
      dbo.attackBonus,
      dbo.damageBonus);
}