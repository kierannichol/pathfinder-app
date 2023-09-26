import React from "react";
import styles from "./PathfinderButton.module.css";
import variants from "./PathfinderButtonVariants.module.scss";

interface PathfinderButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: string|string[];
  disabled?: boolean;
}

function PathfinderButton({ variant = 'default', className, disabled = false, ...divProps }: PathfinderButtonProps) {
  const buttonClassNames = [ styles.button, className ];
  const variantArray = variant && (variant instanceof Array ? variant : [ variant ]);
  if (variantArray && !disabled) {
    variantArray.forEach(v => buttonClassNames.push(variants[v]));
  }
  if (disabled) {
    buttonClassNames.push(styles.disabled);
  }

  return (
      <div
          {...divProps}
          className={buttonClassNames.join(' ')}>
    </div>);
}

export default PathfinderButton;