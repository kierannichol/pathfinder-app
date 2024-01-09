import {ComponentProps} from "react";
import BoxedValue from "./BoxedValue.tsx";
import styles from "./CaptionedBoxedValue.module.scss";
import Header from "./Header.tsx";
import Section from "./Section.tsx";
import {classNames} from "../../../../../utils/classNames.ts";

interface CaptionedBoxedValueProps extends ComponentProps<typeof BoxedValue> {
  captionTop?: string;
  captionBottom?: string;
}

export default function CaptionedBoxedValue({ captionTop, captionBottom, className, ...boxedValueProps }: CaptionedBoxedValueProps) {
  return <Section.Column className={classNames(["header-gap", styles.element, className])}>
    {captionTop && <Header>{captionTop}</Header>}
    <BoxedValue {...boxedValueProps} />
    {captionBottom && <Header>{captionBottom}</Header>}
  </Section.Column>
}