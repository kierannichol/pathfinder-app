import {CharacterClassDatabase} from "../../../database/v2/ClassDatabase";
import Trait from "../Trait";
import ClassTraits from "../traits/ClassTraits";
import CustomTrait from "../traits/CustomTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";
import SkillPointChoice from "./SkillPointChoice";

class CharacterClassChoice extends CharacterChoice {
  public readonly key = CharacterChoice.CLASS_1;
  public readonly type = ChoiceType.CHARACTER_CLASS;
  public readonly label = "Class";

  constructor(public readonly dependsOn: string | undefined = undefined, private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }

  withDependsOn(dependsOn: string | undefined): CharacterChoice {
    return new CharacterClassChoice(dependsOn, this.current);
  }
}

export class CharacterClassChoiceProcessor implements ICharacterChoiceProcessor<CharacterClassChoice> {
  public readonly supportedChoiceType = ChoiceType.CHARACTER_CLASS;

  constructor(private readonly classDatabase: CharacterClassDatabase) {
  }

  async select(choice: CharacterClassChoice, classId: string): Promise<CharacterChoice[]> {
    const choices: CharacterChoice[] = [ new CharacterClassChoice(choice.dependsOn, classId) ];

    if (classId === '') {
      return choices;
    }

    const classDefinition = await this.classDatabase.load(classId);
    if (classDefinition === undefined) {
      console.warn("Unknown character class ID: " + classId);
      return [];
    }

    classDefinition.effects.forEach(effect => choices.push(...effect.choices(choice.key)))

    // TODO: data-drive skill points per level
    for (let i = 1; i <= 20; i++) {
      choices.push(SkillPointChoice.of(i, 0, choice.key));
      choices.push(SkillPointChoice.of(i, 1, choice.key));
    }

    return choices;
  }

  async traits(choice: CharacterClassChoice): Promise<Trait[]> {
    const classId = choice.current;
    if (classId === undefined || classId === '') {
      return [];
    }

    const classDefinition = await this.classDatabase.load(classId);
    if (classDefinition === undefined) {
      console.warn("Unknown class: " + classId);
      return [];
    }

    const classTraits: Trait[] = [];

    classDefinition.effects.forEach(effect => classTraits.push(...effect.traits()));

    return [
      ClassTraits.of(classDefinition),
      CustomTrait.of('class_1', classId),
      ...classTraits
    ];
  }
}

export default CharacterClassChoice;