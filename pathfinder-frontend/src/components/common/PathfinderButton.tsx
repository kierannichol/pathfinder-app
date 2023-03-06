import React from "react";
import classNames from "../../app/classNames";
import styles from "./PathfinderButton.module.scss";
import variants from "./PathfinderButtonVariants.module.scss";

interface PathfinderButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: string;
  disabled?: boolean;
}

function PathfinderButton({ variant = 'default', className, disabled = false, ...divProps }: PathfinderButtonProps) {
  const buttonClassNames = [ styles.button, variants.default, className ];
  if (variant && !disabled) {
    buttonClassNames.push(variants[variant]);
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