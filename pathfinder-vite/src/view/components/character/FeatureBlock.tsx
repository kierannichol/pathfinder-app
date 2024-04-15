import ButtonBlock from "../controls/ButtonBlock.tsx";
import {useMemo} from "react";
import {useDatabase} from "../../../data/context.tsx";

interface FeatureBlockProps {
  featureId: string;
  variant?: string;
}

export default function FeatureBlock({ featureId, variant }: FeatureBlockProps) {
  const database = useDatabase();
  const feature = useMemo(() => database.feature(featureId),
  [featureId]);

  return <ButtonBlock variant={variant}>{(feature?.name ?? '???')}</ButtonBlock>
}