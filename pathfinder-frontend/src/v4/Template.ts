import {ChoiceNode} from "../core/Choice";
import {IDataHub} from "../core/DataHub";
import Effect from "../core/Effect";
import {DataContext, MutableDataContext} from "../logic/DataContext";
import Resolvable from "../logic/Resolvable";
import {uniqBy} from "../util/pfutils";

export class Template {

  constructor(public readonly id: string,
              private readonly parts: ComponentTemplate[]) {
  }

  async resolve(db: IDataHub, selected: { [key: string]: string }): Promise<ResolvedTemplate> {
    const parts: ResolvedComponentTemplate[] = await Promise.all(this.parts.map(part => part.resolve(db, selected)));

    const resolvedTemplates: ResolvedTemplate[] = [];
    const templates: Template[] = uniqBy(await Promise.all(parts
      .flatMap(part => part.templates())), template => template.id);

    (await Promise.all(templates.map(template => template.resolve(db, selected))))
      .forEach(resolved => resolvedTemplates.push(resolved));

    return new ResolvedTemplate(this.id, parts, resolvedTemplates);
  }
}

export class ComponentTemplate {

  constructor(private readonly condition: Resolvable,
              private readonly effects: Effect[],
              private readonly choices: ChoiceNode[]) {
  }

  async resolve(db: IDataHub, selected: { [key: string]: string }): Promise<ResolvedComponentTemplate> {
    const choices = await Promise.all(this.choices.map(choice => choice.resolve(db, selected)));

    return new ResolvedComponentTemplate(
        this.condition,
        this.effects,
        choices
    );
  }
}

export class ResolvedTemplate {
  constructor(public readonly id: string,
              private readonly parts: ResolvedComponentTemplate[],
              private readonly templates: ResolvedTemplate[]) {
  }

  applyTo(state: MutableDataContext) {
    this.parts.forEach(part => part.applyTo(state));
    this.templates.forEach(template => template.applyTo(state));
  }

  choicesFor(state: DataContext): ChoiceNode[] {
    return [
        ...this.templates.flatMap(template => template.choicesFor(state)),
        ...this.parts.flatMap(part => part.choicesFor(state)) ];
  }
}

export class ResolvedComponentTemplate {

  constructor(private readonly condition: Resolvable,
              private readonly effects: Effect[],
              private readonly choices: ChoiceNode[]) {
  }

  applyTo(state: MutableDataContext) {
    if (this.condition.resolve(state)?.asBoolean() ?? false) {
      this.effects.forEach(effect => effect.applyTo(state));
      this.choices.forEach(choice => choice.applyTo(state));
    }
  }

  choicesFor(state: DataContext): ChoiceNode[] {
    if (this.condition.resolve(state)?.asBoolean() ?? false) {
      return this.choices.flatMap(choice => choice.choices(state));
    }
    return [];
  }

  templates(): Template[] {
    return this.choices.flatMap(choice => choice.templates());
  }
}