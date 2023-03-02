import {timedAsync} from "../util/pfutils";
import {ResolvedTemplate, Template} from "../v4/Template";
import CharacterAtLevel from "./CharacterAtLevel";
import {CharacterState, CharacterStateMutator} from "./CharacterState";
import {IDataHub} from "./DataHub";
import PackedCharacter, {PackedChoices} from "./PackedCharacter";


export default class Character {

  static async create(id: string, db: IDataHub, initialState: CharacterState, template: Template, selections: PackedChoices = {}): Promise<Character> {
    const resolvedTemplate = await template.resolve(db, selections);
    return new Character(id, selections, initialState, template, resolvedTemplate, db);
  }

  private constructor(public readonly id: string,
              private readonly selections: PackedChoices,
              private readonly state: CharacterState,
              private readonly baseTemplate: Template,
              private readonly resolvedTemplate: ResolvedTemplate,
              private readonly datahub: IDataHub) {
  }

  public async select(choiceId: string, value: any): Promise<Character> {
    return this.selectAll({ [choiceId]: value });
  }

  public selected(key: string): string|undefined {
    return this.selections[key];
  }

  public async selectAll(values: PackedChoices): Promise<Character> {
    if (!values) {
      values = {};
    }

    values = { ...this.selections, ...values };

    // console.log(values);

    const template = await timedAsync(() => this.baseTemplate.resolve(this.datahub, values), "Resolving template");

    return new Character(this.id,
        values,
        this.state,
        this.baseTemplate,
        template,
        this.datahub);
  }

  public async atLevel(level: number): Promise<CharacterAtLevel> {
    const mutator = new CharacterStateMutator(this.state);
    mutator.set('character_level', level);

    this.resolvedTemplate.applyTo(mutator);

    // console.log(mutator.state);

    return new CharacterAtLevel(level,
        mutator.state,
        this.resolvedTemplate.choicesFor(mutator));
  }

  public async unpack(packed: PackedChoices): Promise<Character> {
    return this.selectAll(packed);
  }

  public pack(): PackedCharacter {
    return {id: this.id, choices: this.selections};
  }
}