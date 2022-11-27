import {DetailedHTMLProps, HTMLAttributes} from "react";

function Section({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div className={`pfcs-section ${className}`} {...props} />
}

export default Section;