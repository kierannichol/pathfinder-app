import {FeatureRef} from "../../../../shared/pathfinder";
import CharacterClassEditor from "./CharacterClassEditor";
import FeatureEditor from "./FeatureEditor";
import ArchetypeEditor from "./ArchetypeEditor";

interface SegmentElementEditorProps {
  feature: FeatureRef;
  onSave?: (changed: FeatureRef) => Promise<void>;
}

export function SegmentElementEditor(props: SegmentElementEditorProps) {
  const segmentKey = props.feature.segmentKey;
  switch (segmentKey) {
    case 'class':
      return <CharacterClassEditor {...props} />
    case 'archetype':
      return <ArchetypeEditor {...props} />
    default:
      return <FeatureEditor {...props} />
  }
}