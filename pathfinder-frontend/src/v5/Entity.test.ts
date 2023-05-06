import NameComponent from "./component/NameComponent";
import Entity from "./Entity";

test('empty entity has no component', () => {
  const entity = new Entity();
  expect(entity.hasComponent(NameComponent)).toEqual(false);
})

test('entity with component has has component', () => {
  const entity = new Entity();
  entity.createComponent(NameComponent, 'Test');
  expect(entity.hasComponent(NameComponent)).toEqual(true);
})

test('create and get name', () => {
  const entity = new Entity();
  entity.createComponent(NameComponent, 'Test');
  expect(entity.getComponent(NameComponent).name).toEqual('Test');
})

test('create and get collection components', () => {
  const entity = new Entity();
  entity.addComponent(NameComponent, 'A');
  entity.addComponent(NameComponent, 'B');
  expect(entity.getComponentsOfType(NameComponent).map(c => c.name)).toEqual(['A', 'B']);
})