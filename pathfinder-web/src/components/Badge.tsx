import {HTMLAttributes} from "react";
import styles from "./Badge.module.css";
import {classNames} from "../../../pathfinder-lib/utils/classNames.ts";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {

}

function Badge({ className, ...divProps }: BadgeProps) {
  return <div className={classNames([styles.badge, className])} {...divProps} />
}

export default Badge;