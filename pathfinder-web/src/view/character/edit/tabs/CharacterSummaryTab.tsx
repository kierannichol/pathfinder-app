import ChoiceInputList from "@/view/character/edit/ChoiceInputList.tsx";
import * as React from "react";
import {useMemo} from "react";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import ClassEditorButton from "@/components/character/ClassEditorButton.tsx";
import styles from "./CharacterSummaryTab.module.css";
import {ResolvedFeature} from "@/data/Feature.ts";
import {FeatureCard} from "@/components/feature/FeatureCard.tsx";

function CharacterSummaryTab() {
  const characterAtLevel = useCharacterAtLevel();

  const classFeatures = useMemo(() => characterAtLevel.features
  .filter(feature => feature.tags.includes('class_feature')), [characterAtLevel]);

  const feats = useMemo(() => characterAtLevel.features
  .filter(feature => feature.tags.includes('feat')), [characterAtLevel]);

  return <>
    <section>
      <ChoiceInputList
          characterAtLevel={characterAtLevel}
          choices={[
            'character_name',
            'current_level',
            'race',
            'alignment',
          ]}/>
      <label>Class</label>
      <ClassEditorButton characterAtLevel={characterAtLevel}/>
    </section>
    <header>Feats</header>
    <FeatureList features={feats} />
    <header>Class Features</header>
    <FeatureList features={classFeatures} />
  </>
}

function FeatureList({ features }: { features: ResolvedFeature[] }) {
  return (
      <section className={styles.wall}>
        {features.map(feature => (
            <FeatureCard key={feature.key} feature={feature.key} />

            // <details className={`${styles.brick} ${feature.tags.map(tag => styles['feature-' + tag]).join(' ')}`}
            //          name={'feature'}
            //          key={feature.key}>
            //   <summary>
            //     <div className={styles.featureText}>{feature.name}</div>
            //   </summary>
            //   <section className={styles.description}>
            //     <DescriptionBlock description={feature.description}/>
            //   </section>
            // </details>
        ))}
      </section>
  );
}

export default CharacterSummaryTab;