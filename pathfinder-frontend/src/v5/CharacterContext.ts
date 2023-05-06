import {ChoiceValues} from "../core/Choice";
import Entity from "./Entity";

export default class CharacterContext {

  constructor(public readonly characterEntity: Entity,
              public readonly selections: ChoiceValues) {
  }
}