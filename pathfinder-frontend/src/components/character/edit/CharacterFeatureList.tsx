import React from "react";
import {usePathfinderDatabase} from "../../../database/v2/PathfinderDatabase";
import PathfinderSelect from "../../common/PathfinderSelect";
import "./CharacterFeatureList.scss";

interface CharacterFeatureListProps {
  featureIds: string[];
  variant?: string;
}

export default function CharacterFeatureList({ featureIds, variant }: CharacterFeatureListProps) {
  const pathfinderDatabase = usePathfinderDatabase();

  return <PathfinderSelect>
    {featureIds.map(id => <PathfinderSelect.Item key={id}
                                                  itemKey={id}
                                                  label={pathfinderDatabase.name(id) ?? id}
                                                  variant={variant}
                                                  bodyFn={() => pathfinderDatabase.description(id)}/>)}
  </PathfinderSelect>
}