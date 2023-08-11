import {Choice, FeatureSelectChoice, TextChoice} from "./Choice";
import {Effect, SetTextEffect} from "./Effect";
import {EntityLevel} from "./Entity";
import Feature from "./Feature";
import {ResolvedEntityContext} from "./ResolvedEntityContext";

export default class AppliedEntityGraph {
  private readonly root: RootNode = new RootNode();

  static create(resolved: ResolvedEntityContext): AppliedEntityGraph {
    const graph = new AppliedEntityGraph(resolved);
    resolved.baseEntity.levels.forEach(entityLevel =>
        graph.addLevelNode(graph.root, entityLevel));
    return graph;
  }

  private addLevelNode(parent: Node, entityLevel: EntityLevel): void {
    const node = new LevelNode(parent, entityLevel.level.toString());
    node.addEffects(...entityLevel.effects);
    entityLevel.choices.forEach(choice => this.addChoiceNode(node, choice));

    parent.addChild(node);
  }

  private addChoiceNode(parent: Node, choice: Choice): void {
    const node = new ChoiceNode(parent, choice.key);

    const selected = this.resolved.selected(node.path);
    if (selected && choice instanceof TextChoice) {
      node.addEffects(new SetTextEffect(choice.key, selected));
    }

    if (selected && choice instanceof FeatureSelectChoice) {

    }

    parent.addChild(node);
  }

  private addFeatureNode(parent: Node, feature: Feature): void {
    const node = new FeatureNode(parent, feature.id);
    parent.addChild(node);
  }

  private constructor(private readonly resolved: ResolvedEntityContext) {
  }
}

interface Node {
  get path(): string;
  addChild(node: Node): void;
  addEffects(...effects: Effect[]): void;
}

abstract class BasicNode implements Node {
  protected readonly children: Node[] = [];
  protected readonly effects: Effect[] = [];
  public readonly path: string;

  protected constructor(protected readonly parent: Node,
                        protected readonly key: string) {
    this.path = this.parent + '/' + key;
  }

  addChild(node: Node): void {
    this.children.push(node);
  }

  addEffects(...effects: Effect[]): void {
    this.effects.push(...effects);
  }
}

class RootNode implements Node {
  private readonly children: Node[] = [];
  private readonly effects: Effect[] = [];

  public readonly path: string = '';

  constructor() {
  }

  addChild(node: Node): void {
    this.children.push(node);
  }

  addEffects(...effects: Effect[]): void {
    this.effects.push(...effects);
  }
}

class LevelNode extends BasicNode {

  constructor(parent: Node, key: string) {
    super(parent, key);
  }
}

class ChoiceNode extends BasicNode {

  constructor(parent: Node, key: string) {
    super(parent, key);
  }
}

class FeatureNode extends BasicNode {

  constructor(parent: Node, key: string) {
    super(parent, key);
  }
}