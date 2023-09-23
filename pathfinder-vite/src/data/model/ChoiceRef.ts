import {Choice, ChoiceInputType, FeatureSelectCategory, FeatureSelectChoice, TextChoice} from "./Choice.ts";
import Database from "./Database.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {types} from "sass";
import Error = types.Error;

export default class ChoiceRef {

  static create(path: string, choice: Choice, database: Database): ChoiceRef {
    if (choice instanceof TextChoice) {
      return new TextChoiceRef(path, choice);
    }
    if (choice instanceof FeatureSelectChoice) {
      return new FeatureSelectChoiceRef(path, choice, database);
    }
    throw new Error("Unknown choice type: " + typeof choice);
  }

  protected constructor(public readonly path: string,
              public readonly choice: Choice) {
  }

  get key(): string {
    return this.choice.key;
  }

  get label(): string {
    return this.choice.label;
  }

  resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    return this.choice.resolve(basePath, context);
  }

  get type(): string {
    return this.choice.type;
  }

  get inputType(): ChoiceInputType {
    return this.choice.inputType;
  }

  get repeatingIndex(): number {
    return this.choice.repeatingIndex;
  }
}

export class TextChoiceRef extends ChoiceRef {
  constructor(path: string,
              public readonly choice: TextChoice) {
    super(path, choice);
  }
}

export class FeatureSelectChoiceRef extends ChoiceRef {

  get repeatingIndex(): number {
    return this.choice.repeatingIndex;
  }

  get categories(): FeatureSelectCategory[] {
    return this.choice.categories;
  }

  get sortBy(): "none"|"name" {
    return this.choice.sortBy;
  }

  constructor(path: string,
              public readonly choice: FeatureSelectChoice,
              private readonly database: Database) {
    super(path, choice);
  }

  options(query: string | undefined, filterTag: string | undefined) {
    return this.choice.options(this.database, query, filterTag);
  }
}