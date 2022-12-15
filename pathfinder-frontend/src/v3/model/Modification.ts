import {DataContext} from "../../logic/DataContext";
import {Formula} from "../../logic/Formula";
import Effect from "./Effect";

export class ModificationSummary {
  private readonly childrenById: {[id:string]: ModificationSummary};

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly categoryId: number,
              public readonly prerequisiteFormula: string,
              children: ModificationSummary[]) {
    this.childrenById = {};
    children.forEach(child => this.childrenById[child.id] = child);
  }

  public isValidFor(context: DataContext): boolean {
    if (this.prerequisiteFormula === '') {
      return true;
    }
    return Formula.parse(this.prerequisiteFormula).resolve(context)?.asBoolean() ?? false;
  }

  public child(id: string): ModificationSummary {
    return this.childrenById[id];
  }

  public get children(): ModificationSummary[] {
    return Object.values(this.childrenById);
  }
}

export class Modification extends ModificationSummary {
  private readonly detailedChildrenById: {[id:string]: Modification};

  constructor(id: string,
              name: string,
              categoryId: number,
              prerequisiteFormula: string,
              children: Modification[],
              public readonly description: string,
              public readonly benefit: string,
              public readonly normal: string,
              public readonly special: string,
              public readonly note: string,
              public readonly effects: Effect[]) {
    super(id, name, categoryId, prerequisiteFormula, children);
    this.detailedChildrenById = {};
    children.forEach(child => this.detailedChildrenById[child.id] = child);
  }

  public child(id: string): Modification {
    return this.detailedChildrenById[id];
  }
}