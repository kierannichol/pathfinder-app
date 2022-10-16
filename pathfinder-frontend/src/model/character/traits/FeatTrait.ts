import AdditiveTrait from "./AdditiveTrail";

export default class FeatTrait extends AdditiveTrait {

  static of(level: number, featId: string): FeatTrait {
    return new FeatTrait(level, featId);
  }

  constructor(private readonly level: number, private readonly featId: string) {
    super(featId, 1, level);
  }
}