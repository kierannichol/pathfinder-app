import * as Icon from "react-bootstrap-icons";
import React from "react";
import styles from "./DuplicateIcon.module.css";
import {classNames} from "@/utils/classNames";

interface DuplicateIconProps {
  className?: string;
}

export default function DuplicateIcon({ className }: DuplicateIconProps) {
  return <Icon.Copy className={classNames([styles.icon, className])}/>
}