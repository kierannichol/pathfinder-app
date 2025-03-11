import {Feature} from "@/data/Feature.ts";
import {FeatureSummary} from "@/data/FeatureSummary.ts";
import DialogBox from "@/components/base/DialogBox.tsx";
import React from "react";
import {FeatureInfoBlock} from "@/components/feature/FeatureInfoBlock.tsx";
import {useDatabase} from "@/data/context.ts";

interface FeatureInfoPopupProps {
  show: boolean;
  onClose: () => void;
  feature: string | Feature | FeatureSummary;
}

export function FeatureInfoPopup({show, onClose, feature}: FeatureInfoPopupProps) {
  const database = useDatabase();
  const summary = typeof feature === 'string'
      ? database.feature(feature)
      : feature;

  return (
    <DialogBox show={show} onClose={onClose}>
      <DialogBox.Title>
        {summary?.name}
      </DialogBox.Title>
      <DialogBox.Body>
        <FeatureInfoBlock feature={feature}/>
      </DialogBox.Body>
    </DialogBox>
  )
}