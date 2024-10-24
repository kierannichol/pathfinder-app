import {ChoiceRef} from "@/data/v8/Choice.ts";
import {useMemo} from "react";
import {FeatureRef} from "@/data/v8/Feature.ts";

interface ChoicePathLabelProps {
  choice: ChoiceRef;
  separator?: string;
}

export default function ChoicePathLabel({ choice, separator = ' - ' }: ChoicePathLabelProps) {
  return useMemo(() => {
    let previous: FeatureRef | undefined = choice.parent;
    let i = 0;
    while (previous) {
      if (previous.parent === undefined) {
        break;
      }
      previous = previous.parent;
    }
    return previous?.name + separator + choice.label;
  }, [choice]);
}