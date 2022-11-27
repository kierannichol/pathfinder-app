import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import {useFeatDatabase} from "../../../database/v2/FeatDatabase";
import Expression from "../../../logic/Expression";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import {Feat} from "../../../model/character/Feat";
import FeatureBlock from "../base/FeatureBlock";

interface FeatSelectOptionProps {
  feat: string|Feat;
  characterAtLevel: CharacterAtLevel;
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

export default function FeatSelectOption({ feat, characterAtLevel, selected, onSelect, disabled }: FeatSelectOptionProps) {
  const [ label, setLabel ] = useState('...');
  const [ description, setDescription ] = useState('');
  const isDisabled = disabled ?? false;

  const featDatabase = useFeatDatabase();
  useEffect(() => {
    if (feat instanceof Feat) {
      if (feat.description !== '') {
        setLabel(formatFeatLabel(feat) ?? `??${feat.id}??`);
        setDescription(selected ? formatFeatDescription(feat, characterAtLevel) : '');
      } else {
        setLabel(formatFeatLabel(feat) ?? `??${feat.id}??`);
        if (selected) {
          featDatabase.get(feat.id).then(featData =>
              setDescription(formatFeatDescription(featData, characterAtLevel)));
        } else {
          setDescription('');
        }
      }
    }
      else {
        featDatabase.get(feat).then(featData => {
          setLabel(formatFeatLabel(featData) ?? `??${feat}??`);
          setDescription(selected ? formatFeatDescription(featData, characterAtLevel) : '');
      });
    }
  }, [feat, characterAtLevel]);

  return <FeatureBlock label={label}
                       onClick={onSelect}
                       expanded={selected}
                       disabled={isDisabled} >
    <ReactMarkdown>{description}</ReactMarkdown>
  </FeatureBlock>
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

function formatFeatDescription(feat: Feat | undefined, characterAtLevel: CharacterAtLevel): string {
  if (feat === undefined) {
    return '';
  }

  const markdown = [];
  {feat.description !== '' && markdown.push(`_${feat.description}_`)}
  {feat.prerequisites !== '' && markdown.push(`**Prerequisites:** ${feat.prerequisites}`)}
  {feat.prerequisites_formula !== '' && markdown.push(`**Prerequisite Formula:** \`${feat.prerequisites_formula}\``)}
  {feat.benefit !== '' && markdown.push(`**Benefit:** ${feat.benefit}`)}
  {feat.normal !== '' && markdown.push(`**Normal:** ${feat.normal}`)}
  {feat.special !== '' && markdown.push(`**Special:** ${feat.special}`)}
  {feat.note !== '' && markdown.push(`**Note:** ${feat.note}`)}
  const markdownText = markdown.join("\n\n");
  return Expression.parse(markdownText)
  .resolve(characterAtLevel)?.asText() ?? markdownText;
}