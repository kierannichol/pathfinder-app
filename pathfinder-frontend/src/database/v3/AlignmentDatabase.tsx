import Effect from "../../v3/model/Effect";
import {Modification, ModificationSummary} from "../../v3/model/Modification";
import ModificationDatabase from "../../v3/model/ModificationDatabase";
import Alignments from "../Alignments";

const AlignmentDatabase = new ModificationDatabase("alignment", Alignments.all.map(alignment =>
        new ModificationSummary(alignment.id, alignment.name, 0, "", [])),
    [],
    async id => {
      const alignment = Alignments.find(id);
      if (!alignment) {
        return undefined;
      }
      return new Modification(alignment.id, alignment.name, 0, "", [], "", "", "", "", "", [
          Effect.setState(0, "alignment", alignment.id),
          Effect.setState(0, id, 1)
      ])
    });

export default AlignmentDatabase;