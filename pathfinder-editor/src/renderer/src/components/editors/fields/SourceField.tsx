import {FieldProps} from "./FieldProps";
import React, {useEffect, useId, useState} from "react";
import {useSources} from "../../../SourcesContext";
import LoadingBlock from "../../LoadingBlock";

export function SourceField({ value, onChange }: FieldProps<string>) {
  const sources = useSources();
  const [ selectedSource, setSelectedSource ] = useState<string>();
  const fieldId = useId();

  useEffect(() => {
    if (!sources) {
      setSelectedSource('');
      return;
    }
    setSelectedSource(sources.find(value)?.code ?? '');
  }, [value, sources]);

  function handleSelectionChanged(event: React.ChangeEvent<HTMLSelectElement>) {
    const selected = event.target.value;
    onChange?.(selected);
  }

  if (!sources) {
    return <div className="inline-field">
      <label htmlFor="source">Source</label>
      <LoadingBlock />
    </div>
  }

  return <div className="inline-field">
    <label htmlFor={fieldId}>Source</label>
    <select id={fieldId} value={selectedSource} onChange={handleSelectionChanged}>
      <option value=''></option>
      {sources.all.map(sourceRef =>
        <option key={sourceRef.code} value={sourceRef.code}>{sourceRef.name}</option>)}
    </select>
  </div>
}