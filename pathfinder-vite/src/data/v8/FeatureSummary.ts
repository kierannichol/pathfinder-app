export class FeatureSummary {

  constructor(public readonly key: string,
              public readonly name: string,
              public readonly label: string|undefined,
              public readonly tags: string[],
              public readonly enabledFormula: string,
              public readonly maxStacks: number|null) {
  }
}