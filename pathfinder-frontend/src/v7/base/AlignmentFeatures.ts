import Alignments from "../../database/Alignments";
import {Choice, FeatureSelectChoice} from "../Choice";
import Feature, {FeatureBuilder} from "../Feature";

export const AlignmentFeatures: Feature[] = Alignments.all.map(alignment =>
    new FeatureBuilder(alignment.id)
      .name(alignment.name)
      .tag('alignment')
      .build());

export const AlignmentChoice: Choice = new FeatureSelectChoice('alignment', 'Alignment', 'alignment', ['alignment']);