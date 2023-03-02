import {ChoiceTree} from "../core/Choice";
import Description from "../core/Description";
import Effect from "../core/Effect";
import Resolvable from "../logic/Resolvable";
import {ChildEntity, ChildEntitySummary} from "./ChildEntity";
import {Template} from "./Template";

export class EntitySummary {

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly prerequisiteFormula: string|Resolvable,
              public readonly tags: string[],
              public readonly children: ChildEntitySummary[] = [],
              public readonly parent: EntitySummary|undefined = undefined) {
  }

  child(optionId: string): ChildEntitySummary | undefined {
    return this.children.find(child => child.optionId === optionId);
  }
}

export class Entity extends EntitySummary {
  constructor(id: string,
              name: string,
              prerequisiteFormula: string|Resolvable,
              tags: string[],
              public readonly description: Description,
              public readonly effects: Effect[],
              public readonly choiceTree: ChoiceTree,
              public readonly children: ChildEntity[] = [],
              public readonly template: Template|undefined = undefined,
              public readonly parent: Entity|undefined = undefined) {
    super(id, name, prerequisiteFormula, tags, children);
  }

  child(optionId: string): ChildEntity | undefined {
    return this.children.find(child => child.optionId === optionId);
  }
}