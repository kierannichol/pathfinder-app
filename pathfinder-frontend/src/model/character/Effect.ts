import CharacterChoice from "./choices/CharacterChoice";
import Trait from "./Trait";
import AdditiveTrait from "./traits/AdditiveTrail";
import CustomTrait from "./traits/CustomTrait";

export class Effect {

  static grantChoice(choice: CharacterChoice): Effect {
    return new Effect(
        undefined,
        choice
    );
  }

  static modifyFeature(featureId: string, delta: number, level: number): Effect {
    return new Effect(new AdditiveTrait(featureId, delta, level), undefined);
  }

  static setFeature(featureId: string, value: number, level: number): Effect {
    return new Effect(CustomTrait.of(featureId, value, level), undefined);
  }

  static grantAbility(abilityId: string, level: number): Effect {
    return new Effect(
      new AdditiveTrait(abilityId, 1, level)
    , undefined);
  }

  static grantFeat(featId: string, level: number): Effect {
    return new Effect(
      new AdditiveTrait(featId, 1, level)
    , undefined);
  }

  public traits(): Trait[] {
    if (!this.trait) {
      return [];
    }
    return [ this.trait ];
  }

  public choices(dependsOn: string): CharacterChoice[] {
    if (!this.choice) {
      return [];
    }
    return [ this.choice.withDependsOn(dependsOn) ];
  }

  private constructor(private readonly trait: Trait|undefined,
                      private readonly choice: CharacterChoice|undefined) {
  }
}