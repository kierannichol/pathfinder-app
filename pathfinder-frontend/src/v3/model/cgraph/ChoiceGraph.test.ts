import {InitialChoices} from "../CharacterInitialState";
import {TestChoices, TestDataHub} from "../DataHub.test";
import ChoiceGraph from "./ChoiceGraph";

let Graph = ChoiceGraph.of(TestDataHub, ...InitialChoices);

test("select name", async () => {
  const graph = await Graph.select(TestChoices.Name, "Stronk");
  expect(graph.find(TestChoices.Name)?.current).toEqual("Stronk");
});

test("select class", async () => {
  const graph = await Graph.select(TestChoices.Class, "class:sorcerer");
  expect(graph.find(TestChoices.Class)?.current).toEqual("class:sorcerer");
});

test("select bloodline", async () => {
  const graph = await Graph.selectAll({
    [TestChoices.Class]: "class:sorcerer",
    [TestChoices.Sorcerer.Bloodline]: "bloodline:arcane",
  });
  expect(graph.find(TestChoices.Class)?.current).toEqual("class:sorcerer");
  expect(graph.find(TestChoices.Sorcerer.Bloodline)).not.toBeUndefined();
  expect(graph.find(TestChoices.Sorcerer.Bloodline)?.current).toEqual("bloodline:arcane");
});

test("bloodline feat choices", async () => {
  const graph = await Graph.selectAll({
    [TestChoices.Class]: "class:sorcerer",
    [TestChoices.Sorcerer.Bloodline]: "bloodline:arcane",
  });

  const bloodlineFeatChoice = graph.find(TestChoices.Sorcerer.BloodlineFeat);

  expect(bloodlineFeatChoice).not.toBeUndefined();
});