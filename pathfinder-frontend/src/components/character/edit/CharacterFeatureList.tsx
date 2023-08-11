import React, {useMemo} from "react";
import {usePathfinderDatabaseV7} from "../../../v7/PathfinderDatabaseV7";
import PathfinderSelect from "../../common/PathfinderSelect";
import FeatureIcon from "../../feature/FeatureIcon";
import "./CharacterFeatureList.scss";
import FeatureDescription from "./FeatureDescription";

interface CharacterFeatureListProps {
  featureIds: string[];
  variant?: string;
}

export default function CharacterFeatureList({ featureIds, variant }: CharacterFeatureListProps) {
  const pathfinderDatabase = usePathfinderDatabaseV7();

  return <PathfinderSelect>
    {featureIds.map(id => <PathfinderSelect.Item key={id}
                                                 itemKey={id}
                                                 label={<FeatureButtonLabel featureId={id} />}
                                                 variant={variant}
                                                 bodyFn={async () => <FeatureDescription
                                                     featureId={id}
                                                     maxStacks={null}
                                                     description={await pathfinderDatabase.description(id)}/>}
    />)}
  </PathfinderSelect>
}

interface FeatureButtonLabelProps {
  featureId: string;
}

function FeatureButtonLabel({ featureId }: FeatureButtonLabelProps) {
  const pathfinderDatabase = usePathfinderDatabaseV7();
  const summary = useMemo(() => pathfinderDatabase.feature(featureId), [featureId]);
  return <div className="d-flex flex-row gap-2">
    {summary && <FeatureIcon feature={summary} />}
    <div className="d-flex align-self-center">{summary?.name ?? featureId}</div>
  </div>;
}