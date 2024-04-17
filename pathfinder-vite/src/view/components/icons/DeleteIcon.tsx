import * as Icon from "react-bootstrap-icons";
import React from "react";
import styles from "./DeleteIcon.module.css";
import {classNames} from "@/utils/classNames";

interface DeleteIconProps {
  className?: string;
}

export default function DeleteIcon({ className }: DeleteIconProps) {
  return <Icon.Trash className={classNames([styles.icon, className])}/>
}