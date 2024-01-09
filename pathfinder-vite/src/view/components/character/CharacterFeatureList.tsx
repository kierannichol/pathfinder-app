import React, {useMemo} from "react";
import "./CharacterFeatureList.scss";
import FeatureDescription from "./FeatureDescription";
import PathfinderSelect from "../controls/SelectBlock.tsx";
import variants from "../controls/ButtonVariants.module.scss";
import Expression from "../../../utils/logic/Expression.ts";
import Feature from "../../../data/model/Feature.ts";
import CharacterAtLevel from "../../../data/model/CharacterAtLevel.ts";

interface CharacterFeatureListProps {
  characterAtLevel: CharacterAtLevel;
  features: Feature[];
}

export default function CharacterFeatureList({ characterAtLevel, features }: CharacterFeatureListProps) {
  return <PathfinderSelect>
    {features.map(feature => <PathfinderSelect.Item key={feature.id}
                                                             itemKey={feature.id}
                                                             label={<FeatureButtonLabel characterAtLevel={characterAtLevel} feature={feature} />}
                                                             variant={determineVariant(feature)}
                                                             bodyFn={async () => <FeatureDescription
                                                                 feature={feature} />}
    />)}
  </PathfinderSelect>
}

interface FeatureButtonLabelProps {
  characterAtLevel: CharacterAtLevel;
  feature: Feature;
}

function FeatureButtonLabel({ characterAtLevel, feature }: FeatureButtonLabelProps) {
  const label = useMemo(() => feature.label !== undefined ? Expression.parse(feature.label).resolve(characterAtLevel).asText() : feature.name, [feature, characterAtLevel]);

  return <div className="d-flex flex-row gap-2">
    <div className="d-flex align-self-center">{label}</div>
  </div>;
}

function determineVariant(feature: Feature) {
  for (let tag of feature.tags) {
    if (tag in variants) {
      return tag;
    }
  }
  return "default";
}