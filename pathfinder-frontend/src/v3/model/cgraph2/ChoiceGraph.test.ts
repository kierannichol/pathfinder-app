import ChoiceGraph, {ChoiceNode, EffectNode, OptionNode} from "./ChoiceGraph";

test("select name", async () => {
  let graph = new ChoiceGraph<string>();

  // new Reference("feat", "feat:combat_casting"),
  //           new Reference("feat", "feat:iron_will")
  const combatCastingFeatOption = new OptionNode("feat:combat_casting");
  const ironWillFeatOption = new OptionNode("feat:combat_casting");
  const bloodlineFeatChoice = new ChoiceNode("c:bloodline_feat", [ combatCastingFeatOption, ironWillFeatOption ]);
  const bloodlineFeatEffect = new EffectNode([ bloodlineFeatChoice ]);
  const bloodlineArcanaOption = new OptionNode("bloodline:arcana", [ bloodlineFeatEffect ]);
  const bloodlineChoice = new ChoiceNode("c:bloodline", [ bloodlineArcanaOption ]);
  const bloodlineEffect = new EffectNode([ bloodlineChoice ]);
  const sorcererOption = new OptionNode("class:sorcerer", [ bloodlineEffect ]);
  const classChoice = new ChoiceNode("c:class", [ sorcererOption ]);

  graph = graph.add(classChoice);
  graph = graph.select({
    "c:class": "class:sorcerer",
    "c:bloodline": "bloodline:arcana"
  });

  const options = graph.options("c:bloodline_feat");
  console.log(options);
  // expect(selected.options())
});