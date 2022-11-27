import React from "react";
import "./PathfinderButton.scss";

export type PathfinderButtonVariants = 'grey' | 'white' | 'feat' | 'special' | 'ragepower';

interface PathfinderButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: PathfinderButtonVariants;
}

function PathfinderButton({ variant, ...divProps }: PathfinderButtonProps) {
  return (
      <div
        className={`pf-button pf-button--${variant}`}
        {...divProps}>
    </div>);
}

export default PathfinderButton;