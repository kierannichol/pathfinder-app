import {DataContext} from "@kierannichol/formula-js";
import {IDataHub} from "../core/DataHub";
import {PackedChoices} from "../core/PackedCharacter";
import CharacterAtLevel from "./CharacterAtLevel";
import CharacterContext from "./CharacterContext";
import EntityId from "./component/EntityId";
import Entity from "./Entity";
import ChildEntityProcessor from "./processor/ChildEntityProcessor";
import EntitySystem from "./processor/EntitySystem";

export default class Character {
  private readonly entity: Entity = new Entity();
  private readonly system: EntitySystem<CharacterContext> = new EntitySystem();

  get id(): string {
    return this.entity.getComponent(EntityId).value;
  }

  constructor(id: string, db: IDataHub, selections: PackedChoices) {
    this.system.addProcessor(new ChildEntityProcessor(this.system));

    this.entity.createComponent(EntityId, id);
  }

  atLevel(level: number): CharacterAtLevel {
    const state = DataContext.of({});
    return new CharacterAtLevel(level, state);
  }
}