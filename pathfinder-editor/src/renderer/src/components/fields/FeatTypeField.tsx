import {FieldProps} from "./FieldProps";
import React from "react";
import {SimpleSelectField} from "./simple/SimpleSelectField";

export function FeatTypeField({ value, onChange }: FieldProps<string>) {
  return <SimpleSelectField label={"Type"} value={value} onChange={onChange}>
    {{
      '': '',
      'General': 'GENERAL',
      'Combat': 'COMBAT',
      'Metamagic': 'METAMAGIC',
      'Teamwork': 'TEAMWORK',
      'Grit': 'GRIT',
      'Critical': 'CRITICAL',
      'Racial': 'RACIAL',
      'Style': 'STYLE',
      'Performance': 'PERFORMANCE',
      'Item Creation': 'ITEM_CREATION',
      'Companion': 'COMPANION',
      'Panache': 'PANACHE'
    }}
  </SimpleSelectField>
}