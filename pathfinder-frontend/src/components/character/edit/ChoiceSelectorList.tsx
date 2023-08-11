import React, {ReactNode, useMemo} from "react";
import {usePathfinderDatabaseV7} from "../../../v7/PathfinderDatabaseV7";
import PathfinderSelect from "../../common/PathfinderSelect";
import FeatureIcon from "../../feature/FeatureIcon";

export class ChoiceSelectorOption {
  private cachedIsValid: boolean|undefined;

  constructor(public readonly id: string,
              public readonly name: string,
              private readonly isValidFn: boolean|(() => boolean),
              public readonly descriptionFn?: () => Promise<ReactNode>) {
  }

  public get isValid(): boolean {
    if (this.cachedIsValid === undefined) {
      this.cachedIsValid = typeof this.isValidFn === "boolean"
          ? this.isValidFn
          : this.isValidFn();
    }
    return this.cachedIsValid;
  }
}

export class ChoiceSelectorCategory {
  constructor(public readonly id: string,
              public readonly name: string) {
  }
}

export type ChoiceSelectorOptions = ChoiceSelectorOption
    | Array<ChoiceSelectorOption>;

interface ChoiceSelectorListProps {
  options: ChoiceSelectorOption[];
  variant?: string;
  selected?: string|undefined;
  onSelect?: (optionId: string|undefined) => void;
}

export default function ChoiceSelectorList({ options, variant, selected, onSelect }: ChoiceSelectorListProps) {

  function OptionItem(option: ChoiceSelectorOption) {
    return <PathfinderSelect.Item key={option.id}
                                  itemKey={option.id}
                                  label={<FeatureButtonLabel featureId={option.id} />}
                                  bodyFn={option.descriptionFn}
                                  disabled={!option.isValid}
                                  variant={variant} />
  }

  return <PathfinderSelect activeKey={selected} onChange={onSelect}>
    {options.map(option => OptionItem(option))}
  </PathfinderSelect>
}

interface FeatureButtonLabelProps {
  featureId: string;
}

function FeatureButtonLabel({ featureId }: FeatureButtonLabelProps) {
  const pathfinderDatabase = usePathfinderDatabaseV7();
  const summary = useMemo(() => pathfinderDatabase.feature(featureId), [featureId]);
  return <div className="d-flex flex-row gap-2">
    {summary && <FeatureIcon feature={summary} />}
    <div className="d-flex align-self-center">{summary?.name ?? featureId}</div>
  </div>;
}