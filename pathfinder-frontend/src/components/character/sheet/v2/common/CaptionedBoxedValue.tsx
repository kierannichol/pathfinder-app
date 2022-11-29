import {ComponentProps} from "react";
import classNames from "../../../../../app/classNames";
import BoxedValue from "./BoxedValue";
import styles from "./CaptionedBoxedValue.module.scss";
import Header from "./Header";
import Section from "./Section";

interface CaptionedBoxedValueProps extends ComponentProps<typeof BoxedValue> {
  captionTop?: string;
  captionBottom?: string;
}

export default function CaptionedBoxedValue({ captionTop, captionBottom, className, ...boxedValueProps }: CaptionedBoxedValueProps) {
  return <Section.Column className={classNames("header-gap", styles.element, className)}>
    {captionTop && <Header>{captionTop}</Header>}
    <BoxedValue {...boxedValueProps} />
    {captionBottom && <Header>{captionBottom}</Header>}
  </Section.Column>
}