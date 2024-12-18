import {ChoiceRef} from "@/data/Choice.ts";
import {useMemo} from "react";
import {FeatureRef} from "@/data/Feature.ts";

interface ChoicePathLabelProps {
  choiceRef: ChoiceRef;
}

function ChoicePathLabel({ choiceRef }: ChoicePathLabelProps) {
  const label = useMemo(() => {
    let label = choiceRef.label;
    let parent: FeatureRef | undefined = choiceRef.parent;
    while (parent) {
      if (parent.type === 'level' || (parent.parent?.type === 'level' && parent.parent?.name === 'Base')) {
        break;
      }
      parent = parent.parent;
    }
    if (parent) {
      label = parent.name + " - " + label;
    }
    return label;
  }, [choiceRef]);

  return <span>{label}</span>
}

export default ChoicePathLabel;