import {Resolvable} from "@kierannichol/formula-js";
import {ChoiceTree} from "../../core/Choice";
import Description from "../../core/Description";
import {Entity} from "../../v4/Entity";
import EntityDatabase from "../../v4/EntityDatabase";
import BaseStats, {BaseStat} from "../BaseStats";

function baseStatToEntity(stat: BaseStat): Entity {
  return new Entity(stat.id, stat.name, Resolvable.True, ['base'], Description.empty(), [], ChoiceTree.None)
}

const BaseStatDatabase = new EntityDatabase("base",
    BaseStats.all.map(baseStatToEntity),
    async id => {
      const stat = BaseStats.find(id);
      if (!stat) {
        return undefined;
      }
      return baseStatToEntity(stat);
    });

export default BaseStatDatabase;