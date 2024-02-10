import React, {useMemo} from "react";
import "./CharacterFeatureList.scss";
import FeatureDescription from "./FeatureDescription";
import PathfinderSelect from "../controls/SelectBlock.tsx";
import variants from "../controls/ButtonVariants.module.scss";
import Expression from "../../../utils/logic/Expression.ts";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import {FeatureModel} from "../../model/FeatureModel.ts";

interface CharacterFeatureListProps {
  characterAtLevel: CharacterAtLevelModel;
  features: FeatureModel[];
}

export default function CharacterFeatureList({ characterAtLevel, features }: CharacterFeatureListProps) {
  return <PathfinderSelect>
    {features.map(feature => <PathfinderSelect.Item key={feature.key}
                                                             itemKey={feature.key}
                                                             label={<FeatureButtonLabel characterAtLevel={characterAtLevel} feature={feature} />}
                                                             variant={determineVariant(feature)}
                                                             bodyFn={async () => <FeatureDescription
                                                                 feature={feature} />}
    />)}
  </PathfinderSelect>
}

interface FeatureButtonLabelProps {
  characterAtLevel: CharacterAtLevelModel;
  feature: FeatureModel;
}

function FeatureButtonLabel({ characterAtLevel, feature }: FeatureButtonLabelProps) {
  const label = useMemo(() => feature.label !== undefined ? Expression.parse(feature.label).resolve(characterAtLevel).asText() : feature.name, [feature, characterAtLevel]);

  return <div className="d-flex flex-row gap-2">
    <div className="d-flex align-self-center">{label}</div>
  </div>;
}

function determineVariant(feature: FeatureModel) {
  for (let tag of feature.tags) {
    if (tag in variants) {
      return tag;
    }
  }
  return "default";
}