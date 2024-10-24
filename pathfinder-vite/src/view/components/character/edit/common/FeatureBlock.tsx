import {ResolvedFeature} from "@/data/v8/Feature.ts";
import styles from "./FeatureBlock.module.css";
import React, {ReactNode, useMemo, useState} from "react";
import Description from "@/data/Description.ts";
import {FaChevronDown, FaChevronRight} from "react-icons/fa";
import {Collapse} from "react-bootstrap";

interface FeatureBlockProps {
  feature: ResolvedFeature;
}

export default function FeatureBlock({ feature }: FeatureBlockProps) {
  let description: Description | undefined = feature.description;
  description ??= 'description' in feature ? feature.description : undefined;
  description ??= Description.empty();

  const [showDescription, setShowDescription] = useState(false);

  const descriptionTextElement = useMemo(() => {
    if (!description || description.text === '') {
      return <></>;
    }
    let element: ReactNode = splitIntoParagraphs(description.text);
    if (!description.sections || Object.keys(description.sections).length > 0) {
      element = <i>{element}</i>
    }

    return <span>{element}</span>;
  }, [description]);

  function handleCollapse() {
    setShowDescription(false);
  }

  function handleExpand() {
    setShowDescription(true);
  }

  return <div className={styles['feature-block']}>
    <div className={styles['name']}>{showDescription ? <FaChevronDown onClick={handleCollapse}/> : <FaChevronRight onClick={handleExpand} />} {feature.name}</div>
    <Collapse in={showDescription}>
      <div>
        <span className={styles.p}>{descriptionTextElement}</span>
        {Object.keys(description.sections).map(sectionLabel =>
            <p key={sectionLabel}><span className={styles.sectionLabel}>{sectionLabel}:</span> <span
                className={styles.p}>{description?.sections[sectionLabel]}</span></p>)}
      </div>
    </Collapse>
  </div>
}

function splitIntoParagraphs(text: string): ReactNode[] {
  return text.split(/\n+/).map((paragraphText, i) => <p key={i}>{paragraphText}</p>);
}