export default class Entity {
  private readonly components: {[key:string]: any} = {};

  hasComponent<T>(type: (new(...args: any[]) => T)): boolean {
    return type.name in this.components || (type.name + '[]') in this.components;
  }

  getComponent<T>(type: (new(... args: any[]) => T)): T {
    return this.components[type.name] as T;
  }

  createComponent<T extends new(...args: any) => any>(type: (new(...args: any) => any), ...args: ConstructorParameters<T>) {
    this.components[type.name] = new type(...args);
  }

  getComponentsOfType<T>(type: (new(... args: any[]) => T)): T[] {
    return this.components[type.name + '[]'] as T[];
  }

  addComponent<T extends new(...args: any) => any>(type: (new(...args: any) => any), ...args: ConstructorParameters<T>) {
    const key = type.name + '[]';
    if (!(key in this.components)) {
      this.components[key] = [];
    }
    this.components[key].push(new type(...args));
  }
}