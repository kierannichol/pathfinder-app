import React, {useEffect, useId, useState} from "react";
import DescriptionEditor from "../DescriptionEditor";
import {data} from "../../../../../shared/compiled";
import DescriptionDbo = data.DescriptionDbo;

interface DescriptionFieldProps {
  value: DescriptionDbo|string;
  onChange: ((value: (((prevState: DescriptionDbo|string) => DescriptionDbo|string) | DescriptionDbo|string)) => void);
}

export function DescriptionField({ value, onChange }: DescriptionFieldProps) {
  const [ descriptionDbo, setDescriptionDbo ] = useState(new DescriptionDbo());
  const fieldId = useId();

  useEffect(() => {
    if (value instanceof DescriptionDbo) {
      setDescriptionDbo(value);
      return;
    }

    const dbo = new DescriptionDbo();
    dbo.text = value;
    setDescriptionDbo(dbo);
  }, [value]);

  function handleDboChanged(dbo: DescriptionDbo) {
    if (Object.keys(dbo.sections).length > 0) {
      onChange?.(dbo);
      return;
    }
    onChange?.(dbo.text);
  }

  return <div>
    <label htmlFor={fieldId}>Description</label>
    <DescriptionEditor id={fieldId} value={descriptionDbo} onChange={handleDboChanged} />
  </div>
}