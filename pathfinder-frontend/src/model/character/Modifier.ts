import CharacterChoice from "./choices/CharacterChoice";
import {Effect} from "./Effect";
import Trait from "./Trait";

export class ModifierSummary {
  constructor(public readonly id: string,
              public readonly name: string) {
  }
}

export class Modifier extends ModifierSummary {

  constructor(id: string,
              name: string,
              public readonly descriptionText: string,
              public readonly effectText: string,
              public readonly effects: Effect[]) {
    super(id, name);
  }

  public traits(): Trait[] {
    return this.effects.flatMap(effect => effect.traits());
  }

  public choices(dependsOn: string): CharacterChoice[] {
    return this.effects.flatMap(effect => effect.choices(dependsOn));
  }
}