import React, {useId, useState} from "react";
import DescriptionEditor from "../editors/DescriptionEditor";
import {data} from "../../../../shared/compiled";
import DescriptionDbo = data.DescriptionDbo;

interface DescriptionFieldProps {
  value: DescriptionDbo|string;
  onChange: (value: DescriptionDbo|string) => void;
}

export function DescriptionField({ value, onChange }: DescriptionFieldProps) {
  const [ descriptionDbo, setDescriptionDbo ] = useState(() => toDbo(value));
  const fieldId = useId();

  function toDbo(value: DescriptionDbo|string): DescriptionDbo {
    if (typeof value === 'string') {
      const dbo = new DescriptionDbo();
      dbo.text = value;
      return dbo;
    }
    return value;
  }

  function toValue(dbo: DescriptionDbo): DescriptionDbo|string {
    if (Object.keys(dbo.sections).length > 0) {
      return dbo;
    }
    return dbo.text;
  }

  function handleDboChanged(dbo: DescriptionDbo) {
    setDescriptionDbo(dbo);
    onChange?.(toValue(dbo));
  }

  return <div>
    <label htmlFor={fieldId}>Description</label>
    <DescriptionEditor id={fieldId} value={descriptionDbo} onChange={handleDboChanged} />
  </div>
}