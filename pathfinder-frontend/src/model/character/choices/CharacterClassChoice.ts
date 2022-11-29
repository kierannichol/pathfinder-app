import {CharacterClassDatabase} from "../../../database/v2/ClassDatabase";
import {CharacterClass} from "../CharacterClass";
import Trait from "../Trait";
import AdditiveTrait from "../traits/AdditiveTrail";
import {HeavyArmorProficiency, LightArmorProficiency, MediumArmorProficiency} from "../traits/ArmorProficiencies";
import ClassTraits from "../traits/ClassTraits";
import CustomTrait from "../traits/CustomTrait";
import MartialWeaponProficiencyTrait from "../traits/MartialWeaponProficiencyTrait";
import SimpleWeaponProficiencyTrait from "../traits/SimpleWeaponProficiencyTrait";
import TrainedSkillTrait from "../traits/TrainedSkillTrait";
import CharacterChoice, {ChoiceTag, ChoiceType} from "./CharacterChoice";
import FeatChoice from "./FeatChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";
import MercyChoice from "./MercyChoice";
import RagePowerChoice from "./RagePowerChoice";
import SkillPointChoice from "./SkillPointChoice";
import Special = CharacterClass.Special;

class CharacterClassChoice extends CharacterChoice {
  public readonly key = CharacterChoice.CLASS_1;
  public readonly type = ChoiceType.CHARACTER_CLASS;
  public readonly dependsOn = undefined;

  constructor(private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }
}

export class CharacterClassChoiceProcessor implements ICharacterChoiceProcessor<CharacterClassChoice> {
  public readonly supportedChoiceType = ChoiceType.CHARACTER_CLASS;

  constructor(private readonly classDatabase: CharacterClassDatabase) {
  }

  async select(choice: CharacterClassChoice, classId: string): Promise<CharacterChoice[]> {
    const choices: CharacterChoice[] = [ new CharacterClassChoice(classId) ];

    if (classId === '') {
      return choices;
    }

    const classDefinition = await this.classDatabase.load(classId);
    if (classDefinition === undefined) {
      console.warn("Unknown character class ID: " + classId);
      return [];
    }

    choices.push(new FeatChoice(1, 'level1:feat', choice.key));
    choices.push(new FeatChoice(3, 'level3:feat', choice.key));
    choices.push(new FeatChoice(5, 'level5:feat', choice.key));
    choices.push(new FeatChoice(7, 'level7:feat', choice.key));
    choices.push(new FeatChoice(9, 'level9:feat', choice.key));
    choices.push(new FeatChoice(11, 'level11:feat', choice.key));
    choices.push(new FeatChoice(13, 'level13:feat', choice.key));
    choices.push(new FeatChoice(15, 'level15:feat', choice.key));
    choices.push(new FeatChoice(17, 'level17:feat', choice.key));
    choices.push(new FeatChoice(19,  'level19:feat', choice.key));

    // TODO: data-drive skill points per level
    for (let i = 1; i <= 20; i++) {
      choices.push(SkillPointChoice.of(i, 0, choice.key));
      choices.push(SkillPointChoice.of(i, 1, choice.key));
    }

    for (let level of classDefinition.levels) {
      level.specials
        .map(special => this.parseSpecial(choice, level.levelNumber, special))
        .filter(result => result instanceof CharacterChoice)
        .forEach(choice => choices.push(choice as CharacterChoice));
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

    classDefinition.skills
    .forEach(skill => classTraits.push(TrainedSkillTrait(skill, 0)));

    for (let level of classDefinition.levels) {
      level.specials
      .map(special => this.parseSpecial(choice, level.levelNumber, special))
      .filter(result => !(result instanceof CharacterChoice) && !(result === undefined))
      .forEach(classTrait => classTraits.push(classTrait as Trait));
    }

    switch (classId) {
      case 'class:paladin':
        classTraits.push(
            LightArmorProficiency,
            MediumArmorProficiency,
            HeavyArmorProficiency,
            SimpleWeaponProficiencyTrait,
            MartialWeaponProficiencyTrait
        );
        break;
      case 'class:barbarian':
        classTraits.push(
            LightArmorProficiency,
            MediumArmorProficiency,
            SimpleWeaponProficiencyTrait,
            MartialWeaponProficiencyTrait
        );
        break;
      case 'class:rogue':
        classTraits.push(
            LightArmorProficiency,
            SimpleWeaponProficiencyTrait
        );
        break;
    }

    return [
      ClassTraits.of(classDefinition),
      CustomTrait.of('class_1', classId),
      ...classTraits
    ];
  }

  private parseSpecial(choice: CharacterClassChoice, level: number, special: Special): CharacterChoice | Trait | undefined {
    const classId = choice.current;
    switch (special.id.toLowerCase()) {
      case 'ability:bonus_feat': return new FeatChoice(level, `level${level}:${classId}_bonus_feat`, choice.key, [ ChoiceTag.BONUS ]);
      case 'ability:mercy': return MercyChoice.of(level, classId, choice.key);
      case 'ability:rage_power': return RagePowerChoice.of(level, choice.key);
      default:
        return new AdditiveTrait(special.id, 1, level);
    }
  }
}

export default CharacterClassChoice;