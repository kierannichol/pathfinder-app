import {FeatureRef} from "../../../../shared/pathfinder";
import CharacterClassEditor from "./feature/CharacterClassEditor";
import FeatureEditor from "./feature/FeatureEditor";
import ArchetypeEditor from "./feature/ArchetypeEditor";
import FeatEditor from "./feature/FeatEditor";

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
    case 'feat':
      return <FeatEditor {...props} />
    default:
      return <FeatureEditor {...props} />
  }
}