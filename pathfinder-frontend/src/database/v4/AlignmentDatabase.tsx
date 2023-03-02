import {ChoiceTree} from "../../core/Choice";
import Description from "../../core/Description";
import Effect from "../../core/Effect";
import Resolvable from "../../logic/Resolvable";
import Alignment from "../../model/character/Alignment";
import {Entity} from "../../v4/Entity";
import EntityDatabase from "../../v4/EntityDatabase";
import Alignments from "../Alignments";

function alignmentToEntity(alignment: Alignment): Entity {
  return new Entity(alignment.id, alignment.name, Resolvable.True,
      ['alignment'],
      Description.empty(),
      [
          Effect.setValue("alignment", alignment.id),
          Effect.setValue(alignment.id, 1)
      ], ChoiceTree.None);
}

const AlignmentDatabase = new EntityDatabase("alignment",
    Alignments.all.map(alignmentToEntity),
    async id => {
      const alignment = Alignments.find(id);
      if (!alignment) {
        return undefined;
      }
      return alignmentToEntity(alignment);
    });

export default AlignmentDatabase;