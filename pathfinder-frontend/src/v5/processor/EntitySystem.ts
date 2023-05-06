import Entity from "../Entity";

export interface EntityProcessor<C = undefined> {

  process(entity: Entity, context: C): Promise<void>;
}

export default class EntitySystem<C> implements EntityProcessor<C> {
  constructor(private readonly processors: EntityProcessor<C>[] = []) {
  }

  addProcessor(processor: EntityProcessor<C>): this {
    this.processors.push(processor);
    return this;
  }

  async process(entity: Entity, context: C): Promise<void> {
    for (let i = 0; i < this.processors.length; i++) {
      await this.processors[i].process(entity, context);
    }
  }
}