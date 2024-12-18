import CharacterAtLevel from "./CharacterAtLevel.ts";
import Database from "./Database.ts";
import {PrerequisiteValidation} from "./PrerequisiteValidation.ts";
import {DataContext, Formula, NamedResolvedValue, ResolvedValue} from "@kierannichol/formula-js";
import FormulaFormatter, {FormattedValue, TreeNodeOperator} from "../../utils/logic/FormulaTreeFormatter.ts";
import SourceModule from "@/data/v8/SourceModule.ts";
import {FeatureOptionsQuery} from "@/data/v8/FeatureOptionsQuery.ts";
import Id from "@/utils/Id.ts";

export class FeatureSummary {
  public source: SourceModule|undefined;

  constructor(public readonly key: string,
              public readonly name: string,
              public readonly label: string|undefined,
              public readonly tags: string[],
              public readonly enabledFormula: string,
              public readonly maxStacks: number|null,
              public readonly optionsQuery: FeatureOptionsQuery|undefined) {
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

  isEnabled(context: DataContext, database: Database): boolean {
    if (this.optionsQuery !== undefined) {
      return this.options(database)
        .some(option => option.isEnabled(context, database));
    }

    return (Formula.parse(this.enabledFormula).resolve(context)?.asBoolean() ?? true)
        && (this.maxStacks === null || (context.resolve(this.key)?.asNumber() ?? 0) < this.maxStacks);
  }

  hasOptions(): boolean {
    return this.optionsQuery !== undefined;
  }

  options(database: Database): FeatureSummary[] {
    if (!this.optionsQuery) {
      return [];
    }
    return database.query([this.optionsQuery.tag])
      .map(feature => this.createOptionFeatureSummary(feature));
  }

  option(optionKey: string, database: Database): FeatureSummary | undefined {
    if (this.optionsQuery === undefined) {
      return undefined;
    }
    const optionFeature = database.query([this.optionsQuery.tag])
    .find(option => Id.justKey(option.key) === optionKey);
    return optionFeature !== undefined
        ? this.createOptionFeatureSummary(optionFeature)
        : undefined
  }

  private createOptionFeatureSummary(optionFeature: FeatureSummary): FeatureSummary {
    const optionsQuery = this.optionsQuery;
    if (!optionsQuery) throw new Error("Feature has no options");
    const optionKey: string = Id.justKey(optionFeature.key) ?? '';
    return new FeatureSummary(
        optionsQuery.idTemplate.replace("{option.key}", optionKey),
        this.name + ": " + optionFeature.name,
        optionFeature.label,
        this.tags,
        optionsQuery.prerequisitesTemplate.replace("{option.key}", optionKey),
        this.maxStacks,
        undefined);
  }
}