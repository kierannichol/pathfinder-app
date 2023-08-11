import {Choice, FeatureSelectChoice, TextChoice} from "./Choice";
import Database from "./Database";
import {ResolvedEntityContext} from "./ResolvedEntityContext";

export default class ChoiceRef implements Choice {

  static create(path: string, choice: Choice): ChoiceRef {
    if (choice instanceof TextChoice) {
      return new TextChoiceRef(path, choice);
    }
    if (choice instanceof FeatureSelectChoice) {
      return new FeatureSelectChoiceRef(path, choice);
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

  constructor(path: string,
              public readonly choice: FeatureSelectChoice) {
    super(path, choice);
  }

  options(database: Database) {
    return this.choice.options(database);
  }
}