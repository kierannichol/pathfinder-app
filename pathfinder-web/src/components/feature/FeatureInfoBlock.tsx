import * as React from 'react';
import {Feature} from "@/data/Feature.ts";
import {FeatureSummary} from "@/data/FeatureSummary.ts";
import {useDatabase} from "@/data/context.ts";
import useAsyncMemo from "@/utils/useAsyncMemo.tsx";
import DescriptionBlock from "@/components/DescriptionBlock.tsx";

interface FeatureInfoBlockProps {
  feature: string | Feature | FeatureSummary;
}

export function FeatureInfoBlock({feature}: FeatureInfoBlockProps) {
  const database = useDatabase();

  const [ loaded, isLoading ] = useAsyncMemo(async () => {
    if (typeof feature === 'string') {
      return database.load(feature);
    } else if (feature instanceof Feature) {
      return feature;
    }
    return database.load(feature.key);
  }, [feature]);

  if (isLoading) {
    return <div>
      ...
    </div>
  }

  return (
      <div>
        <DescriptionBlock description={loaded.description} />
      </div>
  )
}