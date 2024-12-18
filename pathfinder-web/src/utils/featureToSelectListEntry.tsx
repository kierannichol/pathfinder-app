import {ResolvedFeature} from "@/data/Feature.ts";
import {SelectListEntry} from "@/components/base/form/select/SelectList.tsx";
import DescriptionBlock from "@/components/DescriptionBlock.tsx";

function featureToSelectListEntry(feature: ResolvedFeature) {
  return SelectListEntry.builder(feature.key, feature.name)
  .label(feature.label ?? feature.name)
  .description(async () => <DescriptionBlock description={feature.description} />)
  .enabled(true)
  .build();
}

export default featureToSelectListEntry;