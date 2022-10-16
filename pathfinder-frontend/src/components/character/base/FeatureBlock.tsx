import {faCaretDown, faCaretRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {RefAttributes, useEffect, useState} from "react";
import {Button, Collapse} from "react-bootstrap";
import "./FeatureBlock.scss"

interface FeatureBlockProps extends RefAttributes<HTMLDivElement> {
  label: string;
  children?: React.ReactNode;
  className?: string;
  expanded?: boolean;
  onClick?: () => void;
  onExpand?: () => void;
  onCollapse?: () => void;
  disabled?: boolean;
}

const FeatureBlock = (props: FeatureBlockProps) => {
  const [ expanded, setExpanded ] = useState(props.expanded ?? false);
  const disabled = props.disabled ?? false;

  useEffect(() => {
    props.expanded && setExpanded(props.expanded);
  }, [props.expanded]);

  return <div ref={props.ref} className={`pf-feature-block ${props.className ?? ''}`}>
    <Button
        className={`pf-feature-block-expand-button`
            + ' '
            + (disabled
                ? 'invalid'
                : (expanded
                    ? `expanded`
                    : `collapsed`))}
        size={"lg"}
        onClick={() => {
          props.onClick && props.onClick();
          props.expanded === undefined && setExpanded(!expanded);
        }}
    ><FontAwesomeIcon className={'pf-feature-block-caret'} icon={expanded ? faCaretDown : faCaretRight} /> <span className={`pf-feature-block-label-text`}>{props.label}</span></Button>
    {props.children && <Collapse
        dimension={'height'}
        onEnter={props.onExpand}
        onExited={props.onCollapse}
        in={expanded}>
      <div>
        <div className={'pf-feature-block-description'}>
          {props.children}
          {/*<ReactMarkdown>{props.description}</ReactMarkdown>*/}
        </div>
      </div>
    </Collapse>}
  </div>;
}

export default FeatureBlock;