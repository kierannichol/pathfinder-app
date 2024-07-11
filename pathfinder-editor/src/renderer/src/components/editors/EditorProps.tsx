export interface EditorProps<T> {
  value: T;
  onChange: (value: T) => void;
}