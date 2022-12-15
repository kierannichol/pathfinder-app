export default class ChoiceGraph<T> {

  constructor(private readonly nodes: ChoiceNode<T>[] = []) {
  }

  add(node: ChoiceNode<T>): ChoiceGraph<T> {
    return new ChoiceGraph<T>([ ...this.nodes, node ])
  }

  select(values: {[id:string]: string}): ChoiceGraph<T> {
    return new ChoiceGraph<T>(this.nodes.map(node => node.select(values)));
  }

  selected(id: string): OptionNode<T>|undefined {
    return this.nodes
      .map(node => node.getSelected(id))
      .find(node => node !== undefined);
  }

  options(id: string): OptionNode<T>[] {
    return this.findChoice(id)?.options ?? [];
  }

  findChoice(id: string): ChoiceNode<T>|undefined {
    return this.nodes
        .map(node => node.findChoice(id))
        .find(node => node !== undefined);
  }
}

interface Node<T> {
  select(values: {[id:string]: string}): Node<T>;
  getSelected(id: string): OptionNode<T> | undefined;
}

export class ChoiceNode<T> implements Node<T> {
  constructor(public readonly id: string, public readonly options: OptionNode<T>[], public readonly selected: OptionNode<T>|undefined = undefined) {
  }

  select(values: { [id: string]: string }): ChoiceNode<T> {
    if (!(this.id in values)) {
      return new ChoiceNode<T>(this.id, this.options, this.selected?.select(values));
    }

    const value = values[this.id];
    const selected = this.options.find(option => option.id === value);
    return new ChoiceNode<T>(this.id, this.options, selected?.select(values));
  }

  getSelected(id: string): OptionNode<T> | undefined {
    if (this.id === id) {
      return this.selected;
    }
    return this.selected?.getSelected(id);
  }

  findChoice(id: string): ChoiceNode<T> | undefined {
    if (this.id === id) {
      return this;
    }
    return this.options
        .map(option => option.findChoice(id))
        .find(choice => choice !== undefined);
  }
}

export class OptionNode<T> implements Node<T> {
  constructor(public readonly id: string, public readonly effects: EffectNode<T>[] = []) {
  }

  select(values: { [p: string]: string }): OptionNode<T> {
    return new OptionNode<T>(this.id, this.effects.map(effect => effect.select(values)));
  }

  getSelected(id: string): OptionNode<T> | undefined {
    return this.effects
        .map(effect => effect.getSelected(id))
        .find(effect => effect !== undefined);
  }

  findChoice(id: string): ChoiceNode<T> | undefined {
    return this.effects
      .map(effect => effect.findChoice(id))
      .find(choice => choice !== undefined);
  }
}

export class EffectNode<T> implements Node<T> {
  constructor(public readonly choices: ChoiceNode<T>[] = []) {
  }

  select(values: { [p: string]: string }): EffectNode<T> {
    return new EffectNode<T>(this.choices.map(choice => choice.select(values)));
  }

  getSelected(id: string): OptionNode<T> | undefined {
    return this.choices
        .map(choice => choice.getSelected(id))
        .find(choice => choice !== undefined);
  }

  findChoice(id: string): ChoiceNode<T> | undefined {
    return this.choices
        .map(choice => choice.findChoice(id))
        .find(choice => choice !== undefined);
  }
}
