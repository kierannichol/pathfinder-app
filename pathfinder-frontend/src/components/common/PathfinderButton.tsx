import React from "react";
import classNames from "../../app/classNames";
import {array} from "../../util/pfutils";
import styles from "./PathfinderButton.module.scss";
import variants from "./PathfinderButtonVariants.module.scss";

interface PathfinderButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: string|string[];
  disabled?: boolean;
}

function PathfinderButton({ variant = 'default', className, disabled = false, ...divProps }: PathfinderButtonProps) {
  const buttonClassNames = [ styles.button, variants.default, className ];
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
          className={classNames(...buttonClassNames)}>
    </div>);
}

export default PathfinderButton;