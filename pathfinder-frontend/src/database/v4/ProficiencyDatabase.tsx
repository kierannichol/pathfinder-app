import {ChoiceTree} from "../../core/Choice";
import Description from "../../core/Description";
import Effect from "../../core/Effect";
import Resolvable from "../../logic/Resolvable";
import {WeaponType} from "../../model/character/WeaponType";
import {Entity} from "../../v4/Entity";
import EntityDatabase from "../../v4/EntityDatabase";
import Weapons from "../Weapons";


function proficiencyToEntity(proficiency: WeaponType): Entity {
  return new Entity("proficiency:" + proficiency.id,
      "Proficient with " + proficiency.name, Resolvable.True,
      ['proficiency', 'weapon'],
      Description.empty(),
      [ Effect.addNumber("proficiency:" + proficiency.id, 1)],
      ChoiceTree.None);
}

const ProficiencyDatabase = new EntityDatabase("proficiency",
    Weapons.all.map(proficiencyToEntity),
    async id => {
      const key = id.split(":")[1];
      const weapon = Weapons.find(key);
      if (!weapon) {
        return undefined;
      }
      return proficiencyToEntity(weapon);
    });

export default ProficiencyDatabase;