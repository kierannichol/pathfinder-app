import React, {HTMLAttributes, ReactNode} from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode;
}

export default function Section({ children, header = undefined, ...divProps }: SectionProps) {
  return <>
    {header && <header>{header}</header>}
    <section {...divProps}>
      {children}
    </section>
  </>
}