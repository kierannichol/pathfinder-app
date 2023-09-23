import React from "react";
import styles from "./PathfinderButton.module.scss";
import variants from "./PathfinderButtonVariants.module.scss";
import {array} from "../../../app/pfutils.ts";
import {classNames} from "../../../utils/classNames.ts";

interface PathfinderButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: string|string[];
  disabled?: boolean;
}

function PathfinderButton({ variant = 'default', className, disabled = false, ...divProps }: PathfinderButtonProps) {
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

export default PathfinderButton;