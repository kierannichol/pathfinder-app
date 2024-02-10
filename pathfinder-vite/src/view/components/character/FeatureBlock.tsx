import ButtonBlock from "../controls/ButtonBlock.tsx";
import {useMemo} from "react";
import {useDatabaseModel} from "../../model/DatabaseModel.ts";

interface FeatureBlockProps {
  featureId: string;
  variant?: string;
}

export default function FeatureBlock({ featureId, variant }: FeatureBlockProps) {
  const database = useDatabaseModel();
  const feature = useMemo(() => database.feature(featureId),
  [featureId]);

  return <ButtonBlock variant={variant}>{(feature?.name ?? '???')}</ButtonBlock>
}