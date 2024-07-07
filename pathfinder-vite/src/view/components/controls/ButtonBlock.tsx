import React, {ReactNode, useMemo} from "react";
import styles from "./ButtonBlock.module.scss";
import variants from "./ButtonVariants.module.scss";
import {array} from "@/app/pfutils.ts";
import {classNames} from "@/utils/classNames.ts";

interface ButtonBlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: string|string[];
  disabled?: boolean;
  labelPrefix?: ReactNode;
  dragging?: boolean;
}

function ButtonBlock({ variant = 'default', className, labelPrefix = undefined, children = undefined, disabled = false, dragging = false, ...divProps }: ButtonBlockProps) {
  const buttonClass = useMemo(() => {
    const buttonClassNames = [ dragging ? styles.buttonDragging : styles.button, className ];
    if (!disabled) {
      const variantArray = array(variant);
      variantArray.forEach(v => buttonClassNames.push(variants[v]));
    } else {
      buttonClassNames.push(styles.disabled);
    }
    return classNames(buttonClassNames);
  }, [dragging, className, variant, disabled]);

  return (
      <div {...divProps} className={buttonClass}>
          {children}
    </div>);
}

export default ButtonBlock;