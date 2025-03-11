import * as React from 'react';
import {useMemo, useState} from 'react';
import {useDatabase} from "@/data/context.ts";
import {Feature} from "@/data/Feature.ts";
import {FeatureSummary} from "@/data/FeatureSummary.ts";
import {FeatureInfoPopup} from "@/components/feature/FeatureInfoPopup.tsx";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  feature: string | Feature | FeatureSummary;
}

export function FeatureCard({feature}: FeatureCardProps) {
  const database = useDatabase();
  const [show, setShow] = useState(false);

  const summary = useMemo(() => {
    if (typeof feature === 'string') {
      return database.feature(feature);
    }
    return feature;
  }, [feature]);

  if (!summary) {
    return <div>Not Found</div>
  }


 return (<>
  <div className={styles.card} onClick={() => setShow(true)}>
    {summary.name}
  </div>
   {show && <FeatureInfoPopup show={show} onClose={() => setShow(false)} feature={summary} />}
 </>)
}