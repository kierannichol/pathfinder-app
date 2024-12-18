import React, {ReactNode} from "react";
import PathfinderSelect from "./SelectBlock.tsx";

export class ChoiceSelectorOption {
  constructor(public readonly id: string,
              public readonly label: ReactNode,
              private readonly isValidFn: boolean|(() => boolean),
              public readonly descriptionFn?: (setSubOptions?: ((subOptionId: string)=>void)) => Promise<ReactNode>,
              public readonly subOptions?: ChoiceSelectorOption[]) {
  }

  public get isValid(): boolean {
    return typeof this.isValidFn === "boolean"
          ? this.isValidFn
          : this.isValidFn();
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
  onChangeSelection?: (optionId: string|undefined) => void;
}

export default function ChoiceSelectorList({ options, variant, selected, onSelect, onChangeSelection }: ChoiceSelectorListProps) {

  function handleSelect(selection: string|undefined) {
    onSelect?.(selection);
  }

  function OptionItem(option: ChoiceSelectorOption, index: number) {
    return <PathfinderSelect.Item key={option.id + index}
                                  itemKey={option.id}
                                  label={<FeatureButtonLabel id={option.id} label={option.label} />}
                                  bodyFn={option.descriptionFn}
                                  disabled={!option.isValid}
                                  scrollTo={option.id === selected}
                                  variant={variant}/>
  }

  return <PathfinderSelect activeKey={selected} onChange={onSelect}>
    {options.map(OptionItem)}
  </PathfinderSelect>
}

interface OptionButtonLabelProps {
  id: string;
  label: ReactNode;
}

function FeatureButtonLabel({ id, label }: OptionButtonLabelProps) {
  return <div className="d-flex flex-row gap-2 flex-grow-1">
    <div className="d-flex align-self-center flex-grow-1">{label ?? id}</div>
  </div>;
}