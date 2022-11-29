import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export default function forwardDiv<P = {}>(contentFn: (props: P) => ReactNode) {
  return (props: P & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <div {...props}>
    {contentFn(props)}
  </div>
}