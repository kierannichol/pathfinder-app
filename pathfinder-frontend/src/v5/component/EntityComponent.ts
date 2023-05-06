import Entity from "../Entity";

interface EntityComponent {

  get entity(): Entity|undefined;
}

class EntityComponent {
  static just(entity: Entity): EntityComponent {
    return { entity: entity };
  }
}

export default EntityComponent;