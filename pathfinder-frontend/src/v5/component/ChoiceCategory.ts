import Entity from "../Entity";
import EntityId from "./EntityId";
import Label from "./Label";

export default class ChoiceCategory extends Entity {
  constructor(id: string, label: string) {
    super();
    this.createComponent(EntityId, id);
    this.createComponent(Label, label);
  }

  get id(): string {
    return this.getComponent(EntityId).value;
  }

  get label(): string {
    return this.getComponent(Label).value;
  }
}