import {FieldProps} from "../FieldProps";

export interface SimpleFieldProps<T> extends FieldProps<T> {
  label?: string;
  className?: string;
}