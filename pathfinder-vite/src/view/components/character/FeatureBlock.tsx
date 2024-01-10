import ButtonBlock from "../controls/ButtonBlock.tsx";
import {usePathfinderDatabase} from "../../../data/model/PathfinderDatabase.tsx";
import {useMemo} from "react";

interface FeatureBlockProps {
  featureId: string;
  variant?: string;
}

export default function FeatureBlock({ featureId, variant }: FeatureBlockProps) {
  const database = usePathfinderDatabase();
  const feature = useMemo(() => database.feature(featureId),
  [featureId]);

  return <ButtonBlock variant={variant}>{(feature?.name ?? '???')}</ButtonBlock>
}