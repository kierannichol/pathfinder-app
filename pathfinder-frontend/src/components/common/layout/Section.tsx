import {DetailedHTMLProps, HTMLAttributes} from "react";

function Section(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div className={'pf-section g-0'} {...props}/>;
}

export default Section;