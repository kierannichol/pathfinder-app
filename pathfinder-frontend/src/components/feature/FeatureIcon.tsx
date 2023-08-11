import React, {useMemo} from "react";
import {FaQuestion} from "react-icons/fa";
import {FaHandFist} from "react-icons/fa6";
import {
  GiAssassinPocket,
  GiBookmarklet,
  GiCowled,
  GiFireAxe,
  GiFlatPawPrint,
  GiGearHammer,
  GiHealingShield,
  GiHolyGrail,
  GiLyre,
  GiMagicSwirl,
  GiShoulderArmor,
  GiSpinningSword,
  GiWolfHead
} from "react-icons/gi";
import {FeatureSummary} from "../../v7/Feature";
import styles from "./FeatureIcon.module.scss";

interface FeatureIconProps {
  feature: FeatureSummary;
}

const ClassIcons = {
  barbarian: GiFireAxe,
  paladin: GiHealingShield,
  rogue: GiAssassinPocket,
  ranger: GiWolfHead,
  wizard: GiBookmarklet,
  sorcerer: GiMagicSwirl,
  monk: FaHandFist,
  fighter: GiShoulderArmor,
  druid: GiFlatPawPrint,
  cleric: GiHolyGrail,
  bard: GiLyre,
}

const FeatIcons = {
  combat: GiSpinningSword,
  general: GiGearHammer
}

function forClass(feature: FeatureSummary, classKey: string): boolean {
  return feature.tags.includes(classKey)
    || feature.id === ('favored_class:'+classKey)
    || feature.id === ('class:'+classKey);
}

function raceIcon(feature: FeatureSummary) {
  const tags = feature.tags;
  if (!tags.includes('race')) {
    return undefined;
  }

  return GiCowled;
}

function classIcon(feature: FeatureSummary) {
  return Object.entries(ClassIcons)
    .filter(([key]) => forClass(feature, key))
    .map(([, icon]) => icon)
    .at(0);
}

export default function FeatureIcon({ feature }: FeatureIconProps) {
  const Icon = useMemo(() => {
    const tags = feature.tags;
    if (tags.includes('feat')) {
      if (tags.includes('combat')) {
        return FeatIcons.combat;
      }
      return FeatIcons.general;
    }

    return classIcon(feature) || raceIcon(feature) || FaQuestion;

  }, [feature]);

  return <div className={styles.icon}>
    <svg viewBox="0 0 100 100">
      <defs>
        <mask id={feature.id}>
          <rect x={0} y={0} width="100%" height="100%" fill="white"/>
          <Icon size="100%"
                stroke="black"
                fill="black" />
        </mask>
      </defs>
      <rect x={0} y={0} width="100%" height="100%" fill="currentColor" mask={`url(#${feature.id})`} />
    </svg>
  </div>
}
