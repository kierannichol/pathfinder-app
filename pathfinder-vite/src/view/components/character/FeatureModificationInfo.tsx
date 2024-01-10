import FeatureModification from "../../../data/model/FeatureModification.ts";
import FeatureBlock from "./FeatureBlock.tsx";
import {ButtonBlockGroup} from "../controls/ButtonBlockGroup.tsx";
import {useMemo} from "react";
import {PlusLg} from "react-bootstrap-icons";
import {BiMinus} from "react-icons/bi";

interface FeatureModificationInfoProps {
  featureModification: FeatureModification;
}

export default function FeatureModificationInfo({ featureModification }: FeatureModificationInfoProps) {

  const sortedStackModifications = useMemo(() => {
    return featureModification.stackModifications.sort((a, b) => a.targetStackCount - b.targetStackCount);
  }, [featureModification])

  return <ButtonBlockGroup>
    {sortedStackModifications.map(stackModification => <div key={'sm-lvl-' + stackModification.targetStackCount} className={'d-flex flex-column gap-1'}>
      <label>Level {stackModification.targetStackCount}</label>
      {stackModification.linksToAdd.map((featureId, i) =>
          <div key={`mod-add-${i}`} className={'d-flex gap-2'}>
            <div className={'d-flex align-items-center'}><PlusLg/></div>
            <FeatureBlock variant={'blue'} featureId={featureId} />
          </div>)}
      {stackModification.linksToRemove.map((featureId, i) =>
          <div key={`mod-remove-${i}`} className={'d-flex gap-2'}>
            <div className={'d-flex align-items-center'}><BiMinus/></div>
            <FeatureBlock variant={'red'} featureId={featureId} />
          </div>)}
  </div>)}
  </ButtonBlockGroup>
}