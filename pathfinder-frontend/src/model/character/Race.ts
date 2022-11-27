import Size from "./Size";

export class RaceSummary {
  constructor(public readonly id: string,
              public readonly name: string,
              public readonly size: Size,
              public readonly type: string,
              public readonly speed: number,
              public readonly languages: string[],
              public readonly traits: string[]) {
  }
}

export class Race extends RaceSummary {
  constructor(id: string,
              name: string,
              size: Size,
              type: string,
              speed: number,
              languages: string[],
              traits: string[]) {
    super(id, name, size, type, speed, languages, traits);
  }
}