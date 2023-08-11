import {BaseDataContext, DataContext, Formula, Resolvable} from "@kierannichol/formula-js";
import {DataContextState} from "@kierannichol/formula-js/dist/DataContext";
import {Choice, FeatureSelectChoice, TextChoice} from "./Choice";
import ChoiceRef from "./ChoiceRef";
import ConditionalComponent from "./ConditionalComponent";
import Entity, {combinePath} from "./Entity";
import Feature from "./Feature";
import Link from "./Link";
import {ResolvedEntityContext} from "./ResolvedEntityContext";
import {Stack} from "./Stack";
import Unlink from "./Unlink";

class Ref<T> {
  constructor(public readonly path: string,
              public readonly value: T) {
  }
}

function evalCondition(formula: string | undefined, context: DataContext): boolean {
  return formula === undefined ||
      (Formula.parse(formula).resolve(context)?.asBoolean() ?? true);
}

class Deferred {
  public unlinks: Unlink[] = [];
  public readonly features: Ref<Feature>[] = [];
  public readonly stacks: Ref<Stack>[] = [];

  isUnlinked(featureId: string, context: DataContext): boolean {
    return this.unlinks.find(unlink => unlink.featureId === featureId
        && evalCondition(unlink.conditionFormula, context)) !== undefined;
  }
}

export default class AppliedEntityContext extends BaseDataContext {
  public readonly state: DataContextState = {};
  public readonly choices: ChoiceRef[] = [];
  public readonly features: Feature[] = [];

  static create(level: number, context: ResolvedEntityContext): AppliedEntityContext {
    const applied = new AppliedEntityContext(level, context);
    applied.applyEntity(context.baseEntity);
    return applied;
  }

  private constructor(public readonly level: number, private readonly context: ResolvedEntityContext) {
    super();
  }

  private applyEntity(entity: Entity): void {
    const deferred = new Deferred();
    for (let entityLevel of entity.levels) {
      if (entityLevel.level <= this.level) {
        let path = entityLevel.level > 0 ? `${entityLevel.level}` : '';
        entityLevel.effects.forEach(effect => effect.applyTo(this.state));
        entityLevel.choices.forEach(choice => this.applyChoice(path, choice, deferred));
      }
    }

    this.applyDeferred(deferred);
  }

  private applyDeferred(deferred: Deferred): void {
    const nextDeferred = new Deferred();
    nextDeferred.unlinks = [...deferred.unlinks];

    for (let stackRef of deferred.stacks) {
      this.applyStack(stackRef.path, stackRef.value, nextDeferred);
    }

    for (let featureRef of deferred.features) {
      this.applyFeature(featureRef.path, featureRef.value, nextDeferred);
    }

    if (nextDeferred.features.length > 0
        || nextDeferred.stacks.length > 0) {
      this.applyDeferred(nextDeferred);
    }
  }

  private applyLink(basePath: string, link: Link, deferred: Deferred): void {
    if (evalCondition(link.conditionFormula, this)) {
      const linkFeature = this.context.feature(link.featureId)
      if (linkFeature) {
        this.applyFeature(basePath, linkFeature, deferred);
      }
    }
  }

  private applyUnlink(unlink: Unlink, deferred: Deferred): void {
    deferred.unlinks.push(unlink);
    if (evalCondition(unlink.conditionFormula, this)) {
      this.removeFeature(unlink.featureId);
    }
  }

  private applyFeature(basePath: string, feature: Feature, deferred: Deferred): void {
    const isUnlinked = deferred.isUnlinked(feature.id, this);
    // const isEnabled = Formula.parse(feature.enabledFormula).resolve(this)?.asBoolean() ?? true;

    if (isUnlinked) {
      return;
    }

    const path = combinePath(basePath, feature.id);
    let previousCount = this.state[feature.id] as number ?? 0;
    let newCount = (this.state[feature.id] as number ?? 0) + 1;
    this.state[feature.id] = newCount;

    if (previousCount === 0) {
      this.features.push(feature);
    }

    for (let count = previousCount+1; count <= newCount; count++) {
      let stack = feature.stacks.next(count);
      if (stack.isEmpty()) {
        continue;
      }
      deferred.stacks.push(new Ref<Stack>(combinePath(path, count), stack));
    }
  }

  private removeFeature(featureId: string): void {
    delete this.state[featureId];
    for (let i = 0; i < this.features.length; i++) {
      if (this.features[i]?.id === featureId) {
        delete this.features[i];
        return;
      }
    }
    const feature = this.context.feature(featureId);
  }

  private applyStack(basePath: string, stack: Stack, deferred: Deferred): void {
    stack.effects.forEach(effect => effect.applyTo(this.state));
    stack.choices.forEach(choice => this.applyChoice(basePath, choice, deferred));
    stack.links.forEach(link => this.applyLink(basePath, link, deferred));
    stack.conditionalComponents.forEach(component => this.applyConditionalComponent(basePath, component, deferred));
    stack.unlinks.forEach(unlink => this.applyUnlink(unlink, deferred));
  }

  private applyChoice(basePath: string, choice: Choice, deferred: Deferred): void {
    const path = combinePath(basePath, choice.key);
    this.choices.push(ChoiceRef.create(path, choice));
    const selection = this.context.selected(path);
    if (choice instanceof TextChoice && selection) {
      this.state[choice.key] = selection;
    }
    else if (choice instanceof FeatureSelectChoice && selection) {
      const selectedFeature = this.context.feature(selection);
      if (selectedFeature) {
        deferred.features.push(new Ref<Feature>(path, selectedFeature));
      }
    }
  }

  private applyConditionalComponent(basePath: string, component: ConditionalComponent, deferred: Deferred): void {
    if (!evalCondition(component.conditionFormula, this)) {
      return;
    }
    component.effects.forEach(effect => effect.applyTo(this.state));
    component.choices.forEach(choice => this.applyChoice(basePath, choice, deferred));
    component.links.map(link => this.applyLink(basePath, link, deferred));
  }

  get(key: string): Resolvable | undefined {
    const value = this.state[key];
    if (value instanceof Resolvable) {
      return value;
    }
    return Resolvable.just(value);
  }
  keys(): string[] {
    return Object.keys(this.state);
  }
}