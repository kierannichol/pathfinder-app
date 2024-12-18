import {HTMLAttributes, ReactNode} from "react";
import styles from "./Button.module.css";
import {classNames} from "../../../../../pathfinder-lib/utils/src/classNames.ts";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: ReactNode;
  theme?: 'dark' | 'light';
}

function Button({ className, children, disabled = false, theme = 'dark', ...inputProps }: ButtonProps) {
  const buttonClassNames = [styles.button, styles[`${theme}-button`], className];
  if (disabled) {
    buttonClassNames.push(styles.disabled);
  }

  return <button className={classNames(buttonClassNames)} disabled={disabled} {...inputProps}>
    {children}
  </button>
}

export default Button;