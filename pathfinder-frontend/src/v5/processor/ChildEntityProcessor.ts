import EntityComponent from "../component/EntityComponent";
import Entity from "../Entity";
import EntitySystem, {EntityProcessor} from "./EntitySystem";

export default class ChildEntityProcessor<C> implements EntityProcessor<C> {
  constructor(private readonly system: EntitySystem<C>) {
  }

  async process(entity: Entity, context: C): Promise<void> {
    const components = entity.getComponentsOfType(EntityComponent);
    const promises = components.map(component => component.entity)
              .map(entity => entity && this.system.process(entity, context));

    await Promise.all(promises);
  }

}