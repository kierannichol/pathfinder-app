import {CharacterAtLevelModel} from "./CharacterAtLevelModel.ts";
import Description from "../../data/Description.ts";
import {Formula, NamedResolvedValue, ResolvedValue} from "@kierannichol/formula-js";
import {PrerequisiteValidationModel} from "./PrerequisiteValidationModel.ts";
import FormulaFormatter, {FormattedValue, TreeNodeOperator} from "../../utils/logic/FormulaTreeFormatter.ts";
import {DatabaseModel} from "./DatabaseModel.ts";

export abstract class FeatureSummaryModel {
  abstract key: string;
  abstract name: string;
  abstract enabledFormula: string;
  abstract maxStacks: number|null;
  abstract tags: string[];

  isEnabled(characterAtLevel: CharacterAtLevelModel): boolean {
    const prerequisitesMet = Formula.parse(this.enabledFormula).resolve(characterAtLevel)?.asBoolean()
        ?? true;

    const notAtMaxStacks = this.maxStacks !== null
        ? (characterAtLevel.resolve(this.key)?.asNumber() ?? 0) < this.maxStacks
        : true;

    return prerequisitesMet && notAtMaxStacks;
  }

  checkPrerequisites(characterAtLevel: CharacterAtLevelModel, database: DatabaseModel): PrerequisiteValidationModel {
    const validation = new PrerequisiteValidationModel();
    let resolvable = Formula.parse(this.enabledFormula);

    const notAtMaxStacks = this.maxStacks !== null
        ? (characterAtLevel.resolve(this.key)?.asNumber() ?? 0) < this.maxStacks
        : true;

    if (!notAtMaxStacks) {
      validation.add("Must not already have this feature", false);
    }

    const formatted = new FormulaFormatter(variable => {
      return database.name(variable);
    }).format(resolvable, characterAtLevel);

    if (formatted) {
      if (formatted.operator === TreeNodeOperator.ALL) {
        formatted.mapChildren(child => validation.add(this.resolvedValueText(child), child.asBoolean()))
      } else {
        validation.add(formatted.asFormatted(), formatted.asBoolean());
      }
    }

    return validation;
  }

  private resolvedValueText(value: ResolvedValue): string {
    if (value instanceof FormattedValue) {
      return value.asFormatted();
    }
    if (value instanceof NamedResolvedValue) {
      return value.asName();
    }
    return value.asText();
  }
}

export abstract class FeatureModel extends FeatureSummaryModel {
  abstract key: string;
  abstract tags: string[];
  abstract enabledFormula: string;
  abstract maxStacks: number|null;
  abstract description: Description;
  abstract label: string | undefined;
  abstract name: string;
}