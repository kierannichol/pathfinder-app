import CharacterAtLevel from "./CharacterAtLevel.ts";
import Database from "./Database.ts";
import {PrerequisiteValidation} from "./PrerequisiteValidation.ts";
import {DataContext, Formula, NamedResolvedValue, ResolvedValue} from "@kierannichol/formula-js";
import FormulaFormatter, {FormattedValue, TreeNodeOperator} from "../../utils/logic/FormulaTreeFormatter.ts";

export class FeatureSummary {

  constructor(public readonly key: string,
              public readonly name: string,
              public readonly label: string|undefined,
              public readonly tags: string[],
              public readonly enabledFormula: string,
              public readonly maxStacks: number|null) {
  }

  checkPrerequisites(characterAtLevel: CharacterAtLevel, database: Database): PrerequisiteValidation {
    const validation = new PrerequisiteValidation();
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

  isEnabled(context: DataContext): boolean {
    return Formula.parse(this.enabledFormula).resolve(context)?.asBoolean() ?? true;
  }
}