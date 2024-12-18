import React, {useEffect, useState} from "react";

export type Props = {
  value: string;
  id?: string;
  onChange?: (value: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onEnter?: (value: string, event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readonly?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
};

function TextInput({ value, id, onChange, onFocus, onBlur, onEnter, className, readonly = false, placeholder, autoFocus = false }: Props) {
  const [current, setCurrent] = useState(value);
  useEffect(() => setCurrent(value), [value]);

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      commitChange();
      event.currentTarget.blur();
      onEnter?.(current, event);
    }
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    event.target.select();
    onFocus?.(event);
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    commitChange();
    onBlur?.(event);
  }

  function commitChange() {
    if (!readonly && current !== value) {
      onChange?.(current)
    }
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

export default TextInput;