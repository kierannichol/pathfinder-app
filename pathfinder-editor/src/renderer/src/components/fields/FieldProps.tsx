export interface FieldProps<T> {
  value: T;
  onChange: (value: T) => void;
}