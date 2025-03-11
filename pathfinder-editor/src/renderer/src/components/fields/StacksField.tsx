import React, {useMemo, useState} from "react";
import {StackData} from "../../../../shared/pathfinder";
import {SimpleSelectField} from "./simple/SimpleSelectField";
import {DataSection} from "../DataSection";
import {StackEditor} from "../editors/stack/StackEditor";
import ListEditor from "../editors/ListEditor";

export interface StacksFieldProps {
  fixedStacks: StackData[]|undefined;
  repeatingStack: StackData|undefined;
  onChangeFixedStack: (value: StackData[]|undefined) => void;
  onChangeRepeatingStack: (value: StackData|undefined) => void;
}

export function StacksField({ fixedStacks, repeatingStack, onChangeFixedStack, onChangeRepeatingStack }: StacksFieldProps) {
  const [ type, setType ] = useState<string>(() => (repeatingStack !== undefined) ? 'repeating' : (fixedStacks !== undefined ? 'fixed' : 'none'));

  const control = useMemo(() => {
    switch (type) {
      case 'repeating':
        return <StackEditor value={repeatingStack ?? ({} as StackData)} onChange={updated => {
          onChangeFixedStack?.(undefined);
          onChangeRepeatingStack?.(updated);
        }} />
      case 'fixed':
        return <ListEditor<StackData> values={fixedStacks ?? []} onAddItem={() => ({} as StackData)} onListChanged={updated => {
          onChangeRepeatingStack?.(undefined);
          onChangeFixedStack?.(updated);
        }}>
          {(item, index, setItem, actions) =>
              <DataSection key={index} label={'Stack'} onRemove={actions.remove}>
                <StackEditor value={item} onChange={setItem}/>
              </DataSection>}
        </ListEditor>
    }
    return <></>
  }, [type, fixedStacks, repeatingStack]);

  return <div className="field">
    <DataSection label={'Stacks'}>
      <SimpleSelectField label={"Type"} value={type} onChange={setType}>
        {{
          'None': 'none',
          'Repeating': 'repeating',
          'Fixed': 'fixed'
        }}
      </SimpleSelectField>
      {control}
    </DataSection>
  </div>
}