import React, {Children, ReactNode} from "react";
import {Col, Row} from "react-bootstrap";

export type LabelRowProps = {
  label?: string|ReactNode,
  visible?: boolean,
  children: any
};

export function LabelRow(props: LabelRowProps) {
  const label = props.label ?? null;
  const children = props.children;
  const visible = props.visible ?? true;

  if (!visible) {
    return null;
  }

  return (
      <Row className="flex-nowrap">
        {label &&
            <Col lg={3} className={'label-col'}>
              <label>{label}</label>
            </Col>}
        {Children.map(children, child => <Col>{child}</Col>)}
      </Row>
  );
}

export type HeaderRowProps = {
  children: string
};

export function HeaderRow(props: HeaderRowProps) {
  return (<header>{props.children}</header>);
}
