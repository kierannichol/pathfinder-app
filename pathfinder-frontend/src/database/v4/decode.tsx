import {v4} from "../../compiled";
import {Choice, ChoiceNode, ChoiceTree} from "../../core/Choice";
import Description from "../../core/Description";
import Effect, {AddNumberEffect, SetFormulaEffect, SetNumberEffect} from "../../core/Effect";
import {Formula} from "../../logic/Formula";
import Resolvable from "../../logic/Resolvable";
import {ChildEntity, ChildEntitySummary} from "../../v4/ChildEntity";
import {Entity, EntitySummary} from "../../v4/Entity";
import {ComponentTemplate, Template} from "../../v4/Template";
import ChildEntityDbo = v4.ChildEntityDbo;
import ChildEntitySummaryDbo = v4.ChildEntitySummaryDbo;
import ChoiceDbo = v4.ChoiceDbo;
import EffectDbo = v4.EffectDbo;
import EntityDbo = v4.EntityDbo;
import EntitySummaryDbo = v4.EntitySummaryDbo;
import TemplateDbo = v4.TemplateDbo;
import TemplateSectionDbo = v4.TemplateSectionDbo;

export function decodeEntitySummary(dbo: EntitySummaryDbo): EntitySummary {
  return new EntitySummary(
      dbo.id,
      dbo.name,
      dbo.prerequisiteFormula === '' ? Resolvable.True : Formula.parse(dbo.prerequisiteFormula),
      dbo.tags,
      dbo.children.map(decodeChildEntitySummary));
}

export function decodeChildEntitySummary(dbo: ChildEntitySummaryDbo): ChildEntitySummary {
  return new ChildEntitySummary(dbo.optionId,
      dbo.condition === '' ? Resolvable.True : Formula.parse(dbo.condition),
      dbo.name !== '' ? dbo.name : undefined,
      dbo.additionalTags);
}

export function decodeEntity(dbo: EntityDbo): Entity {

  return new Entity(
      dbo.id,
      dbo.name,
      dbo.prerequisiteFormula === '' ? Resolvable.True : Formula.parse(dbo.prerequisiteFormula),
      dbo.tags,
      new Description(dbo.description?.text ?? "", dbo.description?.sections ?? {}),
      dbo.effects.map(decodeEffect),
      new ChoiceTree(dbo.choices.map(decodeChoice)),
      dbo.children.map(decideChildEntity),
      decodeTemplate(dbo.template)
  );
}

export function decideChildEntity(dbo: ChildEntityDbo): ChildEntity {
  return new ChildEntity(
      dbo.optionId,
      dbo.condition === '' ? Resolvable.True : Formula.parse(dbo.condition),
      dbo.name !== '' ? dbo.name : undefined,
      dbo.additionalTags,
      dbo.effects.map(decodeEffect),
      new ChoiceTree(dbo.choices.map(decodeChoice)),
      decodeTemplate(dbo.template)
  );
}

export function decodeTemplate(dbo: TemplateDbo|undefined|null): Template|undefined {
  return dbo
      ? new Template(
        dbo.id,
        dbo.sections.map(decodeTemplateSection))
      : undefined;
}

export function decodeTemplateSection(dbo: TemplateSectionDbo): ComponentTemplate {
  return new ComponentTemplate(
      Formula.parse(dbo.condition),
      dbo.effects.map(decodeEffect),
      dbo.choices.map(decodeChoice));
}

function decodeChoice(dbo: ChoiceDbo): ChoiceNode {
  switch (dbo.choice) {
    case "text": return Choice.text(dbo.id, dbo.label, dbo.type, value => [Effect.setValue(dbo.id, value)]);
    case "select": return Choice.select(dbo.id, dbo.label, dbo.type,db => db.options(dbo.select?.tags ?? [], dbo.select?.ids ?? []));
    default: throw Error("Unknown choice type " + dbo.choice);
  }
}

export function decodeEffect(dbo: EffectDbo): Effect {
  switch (dbo.action) {
    case "setAction": {
      let action = dbo.setAction;
      switch (action?.value) {
        case "formula":
          let formula = action.formula;
          if (!formula) {
            throw Error("Invalid set formula effect DBO: missing formula");
          }
          return new SetFormulaEffect(dbo.targetKey, formula).onlyIf(dbo.condition);
        case "numberValue":
          let numberValue = action.numberValue;
          if (numberValue === null || numberValue === undefined) {
            throw Error("Invalid set number effect DBO: missing number value");
          }
          return new SetNumberEffect(dbo.targetKey, numberValue).onlyIf(dbo.condition);
        default:
          throw Error("Invalid effect DBO");
      }
    }
    case "addAction": {
      let action = dbo.addAction;
      if (!action) {
        throw Error("Invalid effect DBO");
      }
      return new AddNumberEffect(dbo.targetKey, action.numberDelta).onlyIf(dbo.condition);
    }
    case "renameAction": {
      let action = dbo.renameAction;
      if (!action) {
        throw Error("Invalid effect DBO");
      }
      return Effect.renameKey(dbo.targetKey, action.renamedKey).onlyIf(dbo.condition);
    }
    default:
      throw Error("Invalid effect DBO");
  }
}