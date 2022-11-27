import {ReactNode} from "react";

interface TextFieldProps {
  children: ReactNode;
  type?: 'line' | 'box';
  label?: string;
}

export default function TextField({ children, type, label }: TextFieldProps) {
  return <div>{children}</div>
}