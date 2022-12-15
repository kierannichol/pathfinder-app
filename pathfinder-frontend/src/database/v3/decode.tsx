import {v3} from "../../compiled";
import Category from "../../v3/model/Category";
import Choice from "../../v3/model/Choice";
import Effect from "../../v3/model/Effect";
import {Modification, ModificationSummary} from "../../v3/model/Modification";
import Reference from "../../v3/model/Reference";
import CategoryDbo = v3.CategoryDbo;
import EffectDbo = v3.EffectDbo;
import ModificationDetailsDbo = v3.ModificationDetailsDbo;
import ModificationSummaryDbo = v3.ModificationSummaryDbo;

export function decodeCategory(dbo: CategoryDbo): Category {
  return new Category(dbo.id, dbo.name);
}

export function decodeModificationSummary(dbo: ModificationSummaryDbo): ModificationSummary {
  return new ModificationSummary(dbo.id, dbo.name, dbo.categoryId, dbo.prerequisiteFormula, dbo.children.map(decodeModificationSummary));
}

export function decodeModification(dbo: ModificationDetailsDbo): Modification {
  return new Modification(dbo.id,
      dbo.name,
      dbo.categoryId,
      dbo.prerequisiteFormula,
      dbo.children.map(decodeModification),
      dbo.descriptionText,
      dbo.benefitText,
      dbo.normalText,
      dbo.specialText,
      dbo.noteText,
      dbo.effects.map(decodeEffect));
}

export function decodeEffect(dbo: EffectDbo): Effect {
  switch (dbo.effect) {
    case "setState": {
      const details = dbo.setState;
      if (!details) {
        throw new Error("Invalid effect DBO");
      }

      switch (details.value) {
        case "numericValue": return Effect.setState(details.level, details.key, details.numericValue ?? '');
        case "textValue": return Effect.setState(details.level, details.key, details.textValue ?? '');
        case "booleanValue": return Effect.setState(details.level, details.key, details.booleanValue ?? '');
      }
      throw new Error("Invalid value for setState effect in DBO");
    }
    case "adjustState": {
      const details = dbo.adjustState;
      if (!details) {
        throw new Error("Invalid effect DBO");
      }
      return Effect.adjustState(details.level, details.key, details.delta);
    }
    case "textChoice": {
      const details = dbo.textChoice;
      if (!details) {
        throw new Error("Invalid effect DBO");
      }
      return Choice.textChoice(details.id, details.label, details.level, details.type, details.key);
    }
    case "selectChoice": {
      const details = dbo.selectChoice;
      if (!details) {
        throw new Error("Invalid effect DBO");
      }
      return Choice.selectChoice(details.id, details.label, details.level, details.type, details.references.map(referenceText => {
        const parts = referenceText.split("/");
        return new Reference(parts[0], parts[1] ?? "*")
      }));
    }
    case "addChoicesToType": {
      const details = dbo.addChoicesToType;
      if (!details) {
        throw new Error("Invalid effect DBO");
      }
      return Choice.addChoicesToType(0, details.type, details.additionalReferences.map(referenceText => {
        const parts = referenceText.split("/");
        return new Reference(parts[0], parts[1] ?? "*")
      }));
    }
  }
  throw new Error("Unknown effect type: " + dbo.effect);
}