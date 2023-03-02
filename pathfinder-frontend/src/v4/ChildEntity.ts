import {ChoiceTree} from "../core/Choice";
import Effect, {ConditionalEffect} from "../core/Effect";
import {MutableDataContext} from "../logic/DataContext";
import {Formula} from "../logic/Formula";
import Resolvable from "../logic/Resolvable";
import {Entity, EntitySummary} from "./Entity";
import {Template} from "./Template";

export class ChildEntitySummary {

  constructor(public readonly optionId: string,
              public readonly condition: Resolvable,
              protected readonly name: string | undefined,
              protected readonly tags: string[]) {
  }

  toEntitySummary(parent: EntitySummary): EntitySummary {
    return new EntitySummary(
        parent.id + '#' + this.optionId,
        parent.name + ': ' + this.name ?? parent.name,
        this.condition,
        [...parent.tags, ...this.tags],
        [],
        parent);
  }
}

export class ChildEntity extends ChildEntitySummary implements Effect {

  constructor(optionId: string,
              condition: Resolvable,
              name: string | undefined,
              tags: string[],
              private readonly effects: Effect[],
              public readonly choices: ChoiceTree,
              public readonly template: Template|undefined) {
    super(optionId, condition, name, tags);
  }

  public applyTo(state: MutableDataContext): void {
      if (this.condition.resolve(state)?.asBoolean() ?? false) {
        this.effects.forEach(effect => effect.applyTo(state));
      }
  }

  public onlyIf(formula: string | Resolvable): Effect {
      return new ConditionalEffect(this, Formula.parse(formula));
  }

  toEntity(parent: Entity): Entity {
    return new Entity(
        parent.id + '#' + this.optionId,
        this.name ?? parent.name,
        parent.prerequisiteFormula,
        [ ...parent.tags, ...this.tags ],
        parent.description,
        this.effects,
        this.choices,
        [],
        undefined,
        parent);
  }
}