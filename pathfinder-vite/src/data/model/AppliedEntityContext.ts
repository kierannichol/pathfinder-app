import {BaseDataContext, DataContext, Formula, Resolvable} from "@kierannichol/formula-js";
import {Choice, ChoiceInputType} from "./Choice.ts";
import ChoiceRef from "./ChoiceRef.ts";
import Entity, {combinePath, EntityLevel} from "./Entity.ts";
import Feature from "./Feature.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {Stack} from "./Stack.ts";
import Database from "./Database.ts";
import {CharacterState} from "./CharacterState.ts";
import {AppliedFeature, FeatureStack} from "./FeatureStack.ts";
import {SetNumberEffect, SetTextEffect} from "./Effect.ts";
import ApplyingEntityContext from "./ApplyingEntityContext.ts";
import ConditionalComponent from "./ConditionalComponent.ts";
import ConditionalStack from "./ConditionalStack.ts";

class EntityAppliedFeature extends AppliedFeature {

  static create(entity: Entity, maxLevel: number, context: ResolvedEntityContext): EntityAppliedFeature {
    const appliedFeature = new EntityAppliedFeature("");
    const applyingContext = new ApplyingEntityContext();
    entity.levels
      .filter(lv => lv.level <= maxLevel)
      .forEach(lv => appliedFeature.addsFeature(EntityLevelAppliedFeature.create(lv, "", context, applyingContext)));
    return appliedFeature;
  }
}

class EntityLevelAppliedFeature extends AppliedFeature {
  private constructor(id: string, public readonly path: string) {
    super(id);
  }

  static create(entityLevel: EntityLevel, basePath: string, context: ResolvedEntityContext, applyingContext: ApplyingEntityContext): EntityLevelAppliedFeature {
    const path = entityLevel.level > 0 ? combinePath(basePath, entityLevel.level) : basePath;
    const appliedFeature = new EntityLevelAppliedFeature(entityLevel.level.toString(), path);
    entityLevel.effects.forEach(effect => appliedFeature.addsEffect(effect));
    entityLevel.choices.forEach(choice => appliedFeature.addsFeature(ChoiceAppliedFeature.create(choice, path, context, applyingContext)));
    return appliedFeature;
  }
}

class ChoiceAppliedFeature extends AppliedFeature {

  private constructor(id: string, public readonly path: string, public readonly choice: Choice) {
    super(id);
  }

  static create(choice: Choice, basePath: string, context: ResolvedEntityContext, applyingContext: ApplyingEntityContext): ChoiceAppliedFeature {
    const path = combinePath(basePath, choice.key);
    const appliedFeature = new ChoiceAppliedFeature(choice.key, path, choice);
    const selectedFeatureId = context.selected(appliedFeature.path);
    if (selectedFeatureId) {

      if (choice.inputType === ChoiceInputType.Text) {
        appliedFeature.addsEffect(new SetTextEffect(choice.key, selectedFeatureId));
      } else {
        const selectedFeature = context.feature(selectedFeatureId);
        if (selectedFeature) {
          appliedFeature.addsFeature(FeatureAppliedFeature.create(selectedFeature, appliedFeature.path, context, applyingContext));
        } else {
          console.warn("Feature not resolved: " + selectedFeatureId);
        }
      }

      if (choice.repeatingIndex > 0) {
        const next = choice.repeat();
        appliedFeature.addsFeature(ChoiceAppliedFeature.create(next, basePath, context, applyingContext));
      }
    }

    return appliedFeature;
  }
}

class FeatureAppliedFeature extends AppliedFeature {

  private constructor(id: string, public readonly path: string, public readonly feature: Feature) {
    super(id);
  }

  static create(feature: Feature, basePath: string, context: ResolvedEntityContext, applyingContext: ApplyingEntityContext): FeatureAppliedFeature {
    const count = applyingContext.registerFeature(feature);
    const path = combinePath(basePath, feature.id, count);
    let appliedFeature = new FeatureAppliedFeature(feature.id, path, feature);

    if (feature.maxStacks && count > feature.maxStacks) {
      return appliedFeature;
    }

    feature.featureModifications.forEach(modification => {
      applyingContext.registerModification(modification);
      appliedFeature.modifiesFeature(modification);
    });

    let nextStack = feature.stacks.next(count);
    nextStack = applyingContext.applyModificationToStack(feature.id, count, nextStack);

    feature.conditionalStacks.forEach(stack =>
        appliedFeature.addsFeature(ConditionalStackAppliedFeature.create(stack, path, context, applyingContext)));

    appliedFeature.addsEffect(new SetNumberEffect(feature.id, count));
    appliedFeature.addsFeature(StackAppliedFeature.create(nextStack, path, context, applyingContext));

    return appliedFeature;
  }
}

class StackAppliedFeature extends AppliedFeature {

  static create(stack: Stack, basePath: string, context: ResolvedEntityContext, applyingContext: ApplyingEntityContext): StackAppliedFeature {
    const path = basePath;
    const appliedFeature = new StackAppliedFeature(path);

    stack.effects.forEach(effect => appliedFeature.addsEffect(effect));
    stack.choices.forEach(choice => appliedFeature.addsFeature(ChoiceAppliedFeature.create(choice, path, context, applyingContext)));
    stack.links.forEach(link => {
      const linkedFeature = context.feature(link.featureId);
      if (linkedFeature) {
        let linkedAppliedFeature: AppliedFeature = FeatureAppliedFeature.create(linkedFeature, path, context, applyingContext);
        if (link.conditionFormula) {
          linkedAppliedFeature = ConditionalAppliedFeature.create(link.conditionFormula, linkedAppliedFeature);
        }
        appliedFeature.addsFeature(linkedAppliedFeature);
      }
    });
    stack.unlinks.forEach(unlink => appliedFeature.removesFeatureAt(unlink.featureId, 0));
    stack.conditionalComponents.forEach(component =>
        appliedFeature.addsFeature(ComponentAppliedFeature.create(component, path, context, applyingContext)));

    return appliedFeature;
  }
}

export class ConditionalStackAppliedFeature extends AppliedFeature {
  constructor(id: string, public readonly formula: string) {
    super(id);
  }

  static create(stack: ConditionalStack, basePath: string, context: ResolvedEntityContext, applyingContext: ApplyingEntityContext): StackAppliedFeature {
    const path = basePath;
    const appliedFeature = new ConditionalStackAppliedFeature(path, stack.conditionFormula);

    stack.stack.effects.forEach(effect => appliedFeature.addsEffect(effect));
    stack.stack.choices.forEach(choice => appliedFeature.addsFeature(ChoiceAppliedFeature.create(choice, path, context, applyingContext)));
    stack.stack.links.forEach(link => {
      const linkedFeature = context.feature(link.featureId);
      if (linkedFeature) {
        let linkedAppliedFeature: AppliedFeature = FeatureAppliedFeature.create(linkedFeature, path, context, applyingContext);
        if (link.conditionFormula) {
          linkedAppliedFeature = ConditionalAppliedFeature.create(link.conditionFormula, linkedAppliedFeature);
        }
        appliedFeature.addsFeature(linkedAppliedFeature);
      }
    });
    stack.stack.unlinks.forEach(unlink => appliedFeature.removesFeatureAt(unlink.featureId, 0));
    stack.stack.conditionalComponents.forEach(component =>
        appliedFeature.addsFeature(ComponentAppliedFeature.create(component, path, context, applyingContext)));

    return appliedFeature;
  }
}

class ComponentAppliedFeature extends AppliedFeature {

  static create(component: ConditionalComponent, basePath: string, context: ResolvedEntityContext, applyingContext: ApplyingEntityContext): StackAppliedFeature {
    const path = basePath;
    let appliedFeature = new ComponentAppliedFeature(path);

    component.effects.forEach(effect => appliedFeature.addsEffect(effect));
    component.choices.forEach(choice => appliedFeature.addsFeature(ChoiceAppliedFeature.create(choice, path, context, applyingContext)));
    component.links.forEach(link => {
      const linkedFeature = context.feature(link.featureId);
      if (linkedFeature) {
        let linkedAppliedFeature: AppliedFeature = FeatureAppliedFeature.create(linkedFeature, path, context, applyingContext);
        if (link.conditionFormula) {
          linkedAppliedFeature = ConditionalAppliedFeature.create(link.conditionFormula, linkedAppliedFeature);
        }
        appliedFeature.addsFeature(linkedAppliedFeature);
      }
    });

    appliedFeature = ConditionalAppliedFeature.create(component.conditionFormula, appliedFeature);

    return appliedFeature;
  }
}

class ConditionalAppliedFeature extends AppliedFeature {

  private constructor(id: string, private readonly conditionFormula: string) {
    super(id);
  }

  static create(conditionFormula: string, wrapped: AppliedFeature|undefined = undefined): StackAppliedFeature {
    const appliedFeature = new ConditionalAppliedFeature("", conditionFormula);
    if (wrapped) {
      appliedFeature.addsFeature(wrapped);
    }
    return appliedFeature;
  }

  applyTo(state: CharacterState, isRemovedFn: (id: string) => boolean) {
    const dataContext = DataContext.of(state);
    const formula = Formula.parse(this.conditionFormula);
    if (formula.resolve(dataContext)?.asBoolean() ?? false) {
      super.applyTo(state, isRemovedFn);
    }
  }

  traverse(peekFn: (appliedFeature: AppliedFeature) => void, isRemovedFn: (id: string) => boolean, state: CharacterState) {
    const dataContext = DataContext.of(state);
    const formula = Formula.parse(this.conditionFormula);
    if (formula.resolve(dataContext)?.asBoolean() ?? false) {
      super.traverse(peekFn, isRemovedFn, state);
    }
  }
}

export default class AppliedEntityContext extends BaseDataContext {
  public readonly state: CharacterState = {};
  private featureStack: FeatureStack = new FeatureStack();
  public readonly choices: ChoiceRef[] = [];
  public readonly features: Feature[] = [];

  static create(level: number, context: ResolvedEntityContext, database: Database): AppliedEntityContext {
    const applied = new AppliedEntityContext(level, context, database);
    applied.applyEntity(context.baseEntity);
    return applied;
  }

  private constructor(public readonly level: number,
                      private readonly context: ResolvedEntityContext,
                      private readonly database: Database) {
    super();
    this.state['character_level'] = level;
  }

  private applyEntity(entity: Entity): void {
    this.featureStack.add(EntityAppliedFeature.create(entity, this.level, this.context));

    this.featureStack.applyTo(this.state);

    const featureMap: {[id:string]:Feature} = {};
    this.featureStack.traverse(appliedFeature => {
      if (appliedFeature instanceof FeatureAppliedFeature) {
        featureMap[appliedFeature.id] = appliedFeature.feature;
      }
      if (appliedFeature instanceof ChoiceAppliedFeature) {
        this.choices.push(ChoiceRef.create(appliedFeature.path, appliedFeature.choice, this.database));
      }
    }, this.state);

    this.features.push(...Object.values(featureMap));
  }

  get(key: string): Resolvable | undefined {
    const state: CharacterState = {};
    this.featureStack.applyTo(state);
    const value = state[key];
    if (value instanceof Resolvable) {
      return value;
    }
    return Resolvable.just(value);
  }

  keys(): string[] {
    const state: CharacterState = {};
    this.featureStack.applyTo(state);
    return Object.keys(state);
  }
}