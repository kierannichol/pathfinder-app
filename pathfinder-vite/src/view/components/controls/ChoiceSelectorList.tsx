import React, {ReactNode} from "react";
import PathfinderSelect from "./SelectBlock.tsx";

export class ChoiceSelectorOption {
  private cachedIsValid: boolean|undefined;

  constructor(public readonly id: string,
              public readonly label: ReactNode,
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

export type ChoiceSelectorOptions = ChoiceSelectorOption
    | Array<ChoiceSelectorOption>;

export class ChoiceSelectorCategory {

  constructor(public readonly label: ReactNode,
              public readonly tag: string,
              public readonly key: string = tag) {
  }
}

interface ChoiceSelectorListProps {
  options: ChoiceSelectorOption[];
  variant?: string|string[];
  selected?: string|undefined;
  onSelect?: (optionId: string|undefined) => void;
}

export default function ChoiceSelectorList({ options, variant, selected, onSelect }: ChoiceSelectorListProps) {

  function OptionItem(option: ChoiceSelectorOption) {
    return <PathfinderSelect.Item key={option.id}
                                  itemKey={option.id}
                                  label={<FeatureButtonLabel id={option.id} label={option.label} />}
                                  bodyFn={option.descriptionFn}
                                  disabled={!option.isValid}
                                  variant={variant} />
  }

  return <PathfinderSelect activeKey={selected} onChange={onSelect}>
    {options.map(option => OptionItem(option))}
  </PathfinderSelect>
}

interface OptionButtonLabelProps {
  id: string;
  label: ReactNode;
}

function FeatureButtonLabel({ id, label }: OptionButtonLabelProps) {
  return <div className="d-flex flex-row gap-2">
    <div className="d-flex align-self-center">{label ?? id}</div>
  </div>;
}