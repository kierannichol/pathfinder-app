import {ClassData} from "../../../compiled";
import Trait from "../Trait";
import AdditiveTrait from "../traits/AdditiveTrail";
import {HeavyArmorProficiency, LightArmorProficiency, MediumArmorProficiency} from "../traits/ArmorProficiencies";
import ClassTraits from "../traits/ClassTraits";
import CustomTrait from "../traits/CustomTrait";
import MartialWeaponProficiencyTrait from "../traits/MartialWeaponProficiencyTrait";
import SimpleWeaponProficiencyTrait from "../traits/SimpleWeaponProficiencyTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import FeatChoice from "./FeatChoice";
import MercyChoice from "./MercyChoice";
import RagePowerChoice from "./RagePowerChoice";

class CharacterClassChoice extends CharacterChoice<ClassData|undefined> {
  public readonly key = CharacterChoice.CLASS_1;
  public readonly type = ChoiceType.CLASS;
  public readonly dependsOn = undefined;

  constructor(private readonly value: ClassData|undefined = undefined) {
    super();
  }

  get current(): ClassData|undefined {
    return this.value;
  }

  select(value: ClassData|undefined): CharacterChoice<any>[] {
    const choices: CharacterChoice<any>[] = [ new CharacterClassChoice(value) ];

    if (value === undefined) {
      return choices;
    }

    choices.push(new FeatChoice(1, 'level1:feat', this.key));
    choices.push(new FeatChoice(3, 'level3:feat', this.key));
    choices.push(new FeatChoice(5, 'level5:feat', this.key));
    choices.push(new FeatChoice(7, 'level7:feat', this.key));
    choices.push(new FeatChoice(9, 'level9:feat', this.key));
    choices.push(new FeatChoice(11, 'level11:feat', this.key));
    choices.push(new FeatChoice(13, 'level13:feat', this.key));
    choices.push(new FeatChoice(15, 'level15:feat', this.key));
    choices.push(new FeatChoice(17, 'level17:feat', this.key));
    choices.push(new FeatChoice(19,  'level19:feat', this.key));

    for (let level = 1; level <= 20; level++) {
      const levelSpecials = value.levels[level - 1].special;
      levelSpecials
          .map(special => special.replaceAll("\\s+\\d+\\/day$", ""))
          .map(special => this.parseSpecial(value.id, level, special))
          .filter(result => result instanceof CharacterChoice)
          .forEach(choice => choices.push(choice as CharacterChoice<any>));
    }

    return choices;
  }

  traits(): Trait[] {
    const value = this.value;
    if (value === undefined) {
      return [];
    }

    const classTraits: Trait[] = [];

    for (let level = 1; level <= 20; level++) {
      const levelSpecials = value.levels[level - 1].special;
      levelSpecials
          .map(special => special.replaceAll(/\s+\d+.day$/ig, ""))
          .map(special => this.parseSpecial(value.id, level, special))
          .filter(result => !(result instanceof CharacterChoice) && !(result === undefined))
          .forEach(classTrait => classTraits.push(classTrait as Trait));
    }

    switch (value.id) {
      case 'paladin':
        classTraits.push(
            LightArmorProficiency,
            MediumArmorProficiency,
            HeavyArmorProficiency,
            SimpleWeaponProficiencyTrait,
            MartialWeaponProficiencyTrait
        );
        break;
      case 'barbarian':
        classTraits.push(
            LightArmorProficiency,
            MediumArmorProficiency,
            SimpleWeaponProficiencyTrait,
            MartialWeaponProficiencyTrait
        );
        break;
      case 'rogue':
        classTraits.push(
            LightArmorProficiency,
            SimpleWeaponProficiencyTrait
        );
        break;
    }

    return [
        ClassTraits.of(value),
        CustomTrait.of('class_1', value.id),
        ...classTraits
    ];
  }

  private parseSpecial(classId: string, level: number, special: string): CharacterChoice<any> | Trait | undefined {
    switch (special.toLowerCase()) {
      case 'bonus_feat': return new FeatChoice(level, `level${level}:${classId}_bonus_feat`, this.key);
      case 'mercy': return MercyChoice.of(level, classId, this.key);
      case 'rage_power': return RagePowerChoice.of(level, this.key);
      // case 'smite evil': return CustomTrait.of('ability:smite_evil', 1, level);
      // case 'lay on hands': return CustomTrait.of('ability:lay_on_hands', 1, level);
      // case 'aura of good': return CustomTrait.of('ability:aura_of_good', 1, level);
      // default: console.log("Unknown special: " + special.toLowerCase());
      default:
        return new AdditiveTrait(`ability:${classId}:${special}`, 1, level);
    }
  }
}

export default CharacterClassChoice;