import React, {useMemo} from "react";
import "./CharacterFeatureList.scss";
import PathfinderSelect from "../controls/SelectBlock.tsx";
import variants from "../controls/ButtonVariants.module.scss";
import Expression from "../../../utils/logic/Expression.ts";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import {FeatureModel} from "../../model/FeatureModel.ts";
import FeatureDescription from "./FeatureDescription.tsx";

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
                                                                 feature={feature}
                                                                 characterAtLevel={characterAtLevel} />}
    />)}
  </PathfinderSelect>
}

interface FeatureButtonLabelProps {
  characterAtLevel: CharacterAtLevelModel;
  feature: FeatureModel;
  type?: string;
}

function FeatureButtonLabel({ characterAtLevel, feature, type = undefined }: FeatureButtonLabelProps) {
  const label = useMemo(() => feature.label !== undefined ? Expression.parse(feature.label).resolve(characterAtLevel).asText() : feature.name, [feature, characterAtLevel]);

  const fType = useMemo(() => {
    const regex = /(^[a-z]| [a-z])/ig
    let abrv = feature.name.match(regex)?.slice(0,2)?.join('') ?? '';
    abrv = abrv.replace(' ', '');
    if (abrv.length === 1) {
      abrv = feature.name.substring(0, 2);
    }
    return abrv;
  }, [feature]);

  return <div className="d-flex flex-row gap-2 align-self-stretch">
    {/*<div className={styles.type}>{fType}</div>*/}
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