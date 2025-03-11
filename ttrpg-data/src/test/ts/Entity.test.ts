import {Entity} from "../../main/ts/Entity";
import {Formula} from "@kierannichol/formula-js";
import {SelectChoice} from "../../main/ts/Choice";
import {TestDatabase} from "./fixture/TestDatabase";
import {Feature} from "../../main/ts/Feature";

test('entity with basic features', () => {
    const entity = new Entity(TestDatabase, [
        TestDatabase.Feature.Foo,
        TestDatabase.Feature.Bar,
        TestDatabase.Feature.Both
    ]);

    const result = Formula.parse("@foo+@bar").resolve(entity)?.asNumber()

    expect(result).toBe(4);
})

test('entity with choice', async () => {
    const entity = new Entity(TestDatabase, [
        new SelectChoice("choice")
    ]);

    expect(entity.keys()).toStrictEqual([]);
    await entity.select({"choice": "foo"});
    expect(entity.keys()).toStrictEqual(["foo"]);
})

test('entity with multiple of same choice', async () => {
    const entity = new Entity(TestDatabase, [
        new Feature("a", [new SelectChoice("choice")]),
        new Feature("b", [new SelectChoice("choice")]),
    ]);

    await entity.select({
        "a:choice": "foo",
        "b:choice": "bar"
    });
    expect(entity.get('foo').asNumber()).toBe(1);
    expect(entity.get('bar').asNumber()).toBe(1);
});