import CharacterContext from "../CharacterContext";
import Choice from "../component/Choice";
import Entity from "../Entity";
import {EntityProcessor} from "./EntitySystem";

export default class ChoiceProcessor implements EntityProcessor<CharacterContext> {
  async process(entity: Entity, context: CharacterContext): Promise<void> {
    const choices = entity.getComponentsOfType(Choice);
  }

}