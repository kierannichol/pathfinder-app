import React, {useEffect, useState} from "react";

export type Props = {
  value: string;
  id?: string;
  onChange?: (value: string) => void;
  onEnter?: (value: string, event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
};

export default function TextInput({ value, id, onChange, onEnter, onFocus, onBlur, className, readonly = false, placeholder, autoFocus = false }: Props) {
  const [current, setCurrent] = useState(value);
  useEffect(() => setCurrent(value), [value]);

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      onEnter?.(current, event);
    }
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    event.target.select();
    onFocus?.(event);
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    !readonly && onChange?.(current)
    onBlur?.(event);
  }

  return (
      <input
          id={id}
          className={className}
          type={"text"}
          value={current}
          readOnly={readonly}
          tabIndex={readonly ? -1 : 0}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onFocus={handleFocus}
          onChange={event => !readonly && setCurrent(event.target.value)}
          onKeyUp={handleKeyUp}
          onBlur={handleBlur}
      />
  );
}