export interface FieldProps<T> {
  value: T;
  onChange: ((value: (((prevState: T) => T) | T)) => void);
}