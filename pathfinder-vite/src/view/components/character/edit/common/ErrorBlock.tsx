import {PropsWithChildren} from "react";

interface ErrorBlockProps extends PropsWithChildren {

}

export default function ErrorBlock({ children }: ErrorBlockProps) {
  return <div>{children}</div>
}