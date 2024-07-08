import {FeatureRef} from "../../../../shared/pathfinder";
import CharacterClassEditor from "./CharacterClassEditor";
import FeatureEditor from "./FeatureEditor";

interface SegmentElementEditorProps {
  feature: FeatureRef;
  onSave?: (changed: FeatureRef) => void;
}

export function SegmentElementEditor({ feature, onSave }: SegmentElementEditorProps) {
  const segmentKey = feature.segmentKey;
  switch (segmentKey) {
    case 'class':
      return <CharacterClassEditor feature={feature} onSave={onSave} />
    default:
      return <FeatureEditor feature={feature} onSave={onSave} />
  }
}