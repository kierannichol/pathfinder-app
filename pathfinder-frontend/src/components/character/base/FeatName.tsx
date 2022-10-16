import {useMemo} from "react";
import {useFeatDatabase} from "../../../database/v2/FeatDatabase";

interface FeatNameProps {
  featId: string;
}

export default function FeatName({ featId }: FeatNameProps) {
  const featDatabase = useFeatDatabase();
  const featLabel = useMemo(() => featDatabase.summary(featId)?.displayName() ?? '???', [featId]);

  return <span>{featLabel}</span>
}