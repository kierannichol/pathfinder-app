import * as React from 'react';
import {EditorProps} from "./EditorProps";
import {ChoiceData} from "../../../../shared/pathfinder";
import {SimpleTextField} from "../fields/simple/SimpleTextField";
import {TagsField} from "../fields/TagsField";
import {DataSection} from "../DataSection";
import {IdField} from "../fields/IdField";
import {LabelField} from "../fields/LabelField";

function ChoiceEditor({ value, onChange }: EditorProps<ChoiceData>) {
 function update(data: Partial<ChoiceData>) {
  onChange?.({
   ...value,
   ...data
  });
 }

 return (
  <DataSection label="Choice">
   <IdField label="Choice ID" value={value.choice_id} onChange={updated => update({ choice_id: updated })} />
   <LabelField label="Label" value={value.label} onChange={updated => update({ label: updated })} />
   <SimpleTextField label="Type" value={value.type} onChange={updated => update({ type: updated })} />
   <TagsField label="Option Tags" value={value.option_tags} onChange={updated => update({ option_tags: updated })} />
  </DataSection>
 )
}

export default ChoiceEditor;