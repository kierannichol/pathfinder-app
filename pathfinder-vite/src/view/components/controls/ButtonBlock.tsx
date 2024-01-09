import React from "react";
import styles from "./ButtonBlock.module.scss";
import variants from "./ButtonVariants.module.scss";
import {array} from "../../../app/pfutils.ts";
import {classNames} from "../../../utils/classNames.ts";

interface ButtonBlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: string|string[];
  disabled?: boolean;
}

function ButtonBlock({ variant = 'default', className, disabled = false, ...divProps }: ButtonBlockProps) {
  const buttonClassNames = [ styles.button, className ];
  const variantArray = variant && array(variant);
  if (variantArray && !disabled) {
    variantArray.forEach(v => buttonClassNames.push(variants[v]));
  }
  if (disabled) {
    buttonClassNames.push(styles.disabled);
  }

  return (
      <div
          {...divProps}
          className={classNames(buttonClassNames)}>
    </div>);
}

export default ButtonBlock;