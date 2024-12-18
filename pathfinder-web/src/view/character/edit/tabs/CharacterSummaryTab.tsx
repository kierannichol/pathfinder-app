import ChoiceInputList from "@/view/character/edit/ChoiceInputList.tsx";
import {useMemo, useState} from "react";
import SelectList, {SelectListEntry} from "@/components/base/form/select/SelectList.tsx";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import featureToSelectListEntry from "@/utils/featureToSelectListEntry.tsx";

function CharacterSummaryTab() {
  const characterAtLevel = useCharacterAtLevel();
  console.log(characterAtLevel);
  const [selectedFeature, setSelectedFeature] = useState<string|undefined>(undefined);

  const classFeatures = useMemo(() => characterAtLevel.features
    .filter(feature => feature.tags.includes('class_feature')), [characterAtLevel]);

  const feats = useMemo(() => characterAtLevel.features
    .filter(feature => feature.tags.includes('feat')), [characterAtLevel]);

  function handleSelectChanged(_: SelectListEntry, value: string | undefined) {
    setSelectedFeature(value);
  }

  return <>
    <section>
      <ChoiceInputList choices={[
        'character_name',
        'current_level',
        'race',
        'alignment',
        'favored_class'
      ]}/>
    </section>
    <header>Feats</header>
    <section>
      <SelectList value={selectedFeature}
                  onChange={handleSelectChanged}
                  optionsFn={() => feats.map(featureToSelectListEntry)} />
    </section>
    <header>Class Features</header>
    <section>
      <SelectList value={selectedFeature}
                  onChange={handleSelectChanged}
                  optionsFn={() => classFeatures.map(featureToSelectListEntry)} />
    </section>
  </>
}

export default CharacterSummaryTab;