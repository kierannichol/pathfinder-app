import {EventHandler, useEffect, useState} from "react";
import {useFeatDatabase} from "../../../database/v2/FeatDatabase";
import {Feat} from "../../../model/character/Feat";
import FeatureBadge from "../base/FeatureBadge";
import "./FeatBadge.css";

interface FeatBadgeProps {
  featId: string;
  onClick?: EventHandler<any>;
}

export default function FeatBadge({ featId, onClick }: FeatBadgeProps) {
  const [ featLabel, setFeatLabel ] = useState('...');

  const featDatabase = useFeatDatabase();
  useEffect(() => {
    featDatabase.get(featId).then(feat => setFeatLabel(formatFeatLabel(feat) ?? `??${featId}??`));
  }, [featId]);

  return <FeatureBadge text={featLabel} type={'feat'} choice={false} onClick={onClick} />
}

function formatFeatLabel(feat: Feat|undefined): string | undefined {
  if (feat === undefined) {
    return undefined;
  }
  return `${feat.name} (${feat.types.map(formatFeatType).join(', ')})`;
}

function formatFeatType(type: Feat.Type): string {
  switch (type) {
    case Feat.Type.Combat: return 'Combat';
    case Feat.Type.General: return 'General';
    case Feat.Type.Achievement: return 'Achievement';
    case Feat.Type.Faction: return 'Faction';
    case Feat.Type.Bloodhex: return 'Blood Hex';
    case Feat.Type.Critical: return 'Critical';
    case Feat.Type.Metamagic: return 'Metamagic';
    case Feat.Type.Monster: return 'Monster';
    case Feat.Type.Mythic: return 'Mythic';
    case Feat.Type.Grit: return 'Grit';
    case Feat.Type.Panache: return 'Panache';
    case Feat.Type.Teamwork: return 'Teamwork';
    case Feat.Type.ItemCreation: return 'Item Creation';
    default: return '?';
  }
}