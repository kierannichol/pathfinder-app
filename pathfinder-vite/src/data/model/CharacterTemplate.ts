import {Effect} from "./Effect.ts";
import Link from "./Link.ts";
import Unlink from "./Unlink.ts";
import {Choice} from "./Choice.ts";
import Entity, {EntityLevel} from "./Entity.ts";

export default class CharacterTemplate {
  private readonly levels: {[levelNumber:number]: CharacterLevelTemplate};

  constructor(levels: CharacterLevelTemplate[]) {
    this.levels = {};
    levels.forEach(level => this.levels[level.levelNumber] = level)
  }

  createEntity(): Entity {
    return new Entity(Object.values(this.levels).map(characterLevel =>
        new EntityLevel(
            characterLevel.levelNumber,
            characterLevel.effects,
            characterLevel.choices
        )));
  }
}

export class CharacterLevelTemplate {

  constructor(public readonly levelNumber: number,
              public readonly effects: Effect[],
              public readonly links: Link[],
              public readonly unlinks: Unlink[],
              public readonly choices: Choice[]) {
  }
}