import {Formula} from "../logic/Formula";
import Resolvable from "../logic/Resolvable";
import {CharacterStateMutator} from "./CharacterState";
import Effect, {ConditionalEffect} from "./Effect";

export default class ConditionalEffectTree implements Effect {

  constructor(private readonly nodes: ConditionalEffectTreeNode[]) {
  }

  applyTo(state: CharacterStateMutator): void {
    this.nodes.forEach(node => node.applyTo(state));
  }

  onlyIf(formula: string | Resolvable): Effect {
    return new ConditionalEffect(this, Formula.parse(formula));
  }

}

export class ConditionalEffectTreeNode implements Effect {

  public constructor(private readonly effects: Effect[],
                     private readonly nodes: ConditionalEffectTreeNode[],
                     private readonly condition: Resolvable = Resolvable.just(true)) {
  }

  applyTo(state: CharacterStateMutator): void {
    if (this.condition.resolve(state)?.asBoolean() ?? false) {
      this.effects.forEach(effect => effect.applyTo(state));
      this.nodes.forEach(node => node.applyTo(state));
    }
  }

  onlyIf(formula: string | Resolvable): Effect {
    return new ConditionalEffect(this, Formula.parse(formula));
  }

}