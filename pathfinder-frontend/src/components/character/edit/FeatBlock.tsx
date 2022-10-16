import {useFeatOnScreen} from "../../../database/v2/FeatDatabase";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import {Feat} from "../../../model/character/Feat";
import FeatureBlock from "../base/FeatureBlock";
import FeatDescription from "./FeatDescription";

interface FeatBlockProps {
  featId: string;
  characterAtLevel: CharacterAtLevel;
  disabled?: boolean;
}

export default function FeatBlock({ featId, characterAtLevel, disabled }: FeatBlockProps) {
  const isDisabled = disabled ?? false;

  const [ feat, elementRef ] = useFeatOnScreen(featId);

  const handleExpand = () => {
  }

  const handleCollapse = () => {
  }

  return <div ref={elementRef}><FeatureBlock
                        label={feat?.displayName() ?? '???'}
                        disabled={isDisabled}
                        onExpand={handleExpand}
                        onCollapse={handleCollapse}>
    {feat instanceof Feat &&
        <FeatDescription feat={feat} characterAtLevel={characterAtLevel} />}
  </FeatureBlock></div>
}