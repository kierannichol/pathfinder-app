import React, {ReactElement, ReactNode, useCallback, useContext, useEffect, useRef, useState} from "react";
import {Accordion, AccordionContext, useAccordionButton} from "react-bootstrap";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";
import classNames from "../../app/classNames";
import {useOnScreen} from "../../app/reactHooks";
import {PathfinderButtonVariants} from "./PathfinderButton";
import styles from "./PathfinderSelect.module.scss";

interface PathfinderSelectProps {
  activeKey?: string;
  onChange?: (key: string|undefined) => void;
  children: ReactElement<PathfinderSelectItemProps>|ReactElement<PathfinderSelectItemProps>[];
}

const PathfinderSelect = ({ activeKey, onChange, children }: PathfinderSelectProps) => {
  function handleChangeSelection(eventKey: AccordionEventKey) {
    onChange?.(typeof eventKey === "string" ? eventKey : undefined);
  }

  return <Accordion activeKey={activeKey}
                   className={styles.control}
                   onSelect={handleChangeSelection}
                   flush={false}>
    {children}
  </Accordion>
}

interface PathfinderSelectItemProps {
  itemKey: string;
  label: ReactNode;
  bodyFn?: () => Promise<ReactNode>;
  body?: ReactNode;
  disabled?: boolean;
  variant?: PathfinderButtonVariants;
}

function PathfinderSelectItem({ itemKey, label, bodyFn, body, disabled = false, variant = 'special' }: PathfinderSelectItemProps) {
  const hasBody = body !== undefined || bodyFn !== undefined;
  return hasBody
      ? <PathfinderSelectItemWithBody itemKey={itemKey} label={label} bodyFn={bodyFn} body={body} disabled={disabled} variant={variant} />
      : <PathfinderSelectItemWithoutBody itemKey={itemKey} label={label} disabled={disabled} variant={variant} />
}

function PathfinderSelectItemWithoutBody({ itemKey, label, disabled, variant }: PathfinderSelectItemProps) {
  const { activeEventKey } = useContext(AccordionContext);
  const isActive = itemKey === activeEventKey;
  const selectOptionButton = useAccordionButton(itemKey);

  const itemClassNames = [ styles.item ];
  const buttonClassNames = [ styles.button ]
  if (variant) {
    buttonClassNames.push(styles[variant]);
  }
  if (isActive) {
    buttonClassNames.push(styles.active);
  }
  if (disabled) {
    buttonClassNames.push(styles.invalid);
  }

  return (
      <div className={classNames(...itemClassNames)}>
        <div className={classNames(...buttonClassNames)} onClick={selectOptionButton}>{label}</div>
      </div>);
}

function PathfinderSelectItemWithBody({ itemKey, label, bodyFn, body, disabled, variant }: PathfinderSelectItemProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(elementRef);
  const { activeEventKey } = useContext(AccordionContext);

  const isActive = itemKey === activeEventKey;
  const [ expanded, setExpanded ] = useState(isActive);
  const [ expanding, setExpanding ] = useState(false);
  const [ collapsing, setCollapsing ] = useState(false);

  const [ bodyState, setBodyState ] = useState<ReactNode>(body);
  useEffect(() => {
    if (!onScreen || bodyFn === undefined) {
      return;
    }

    let loading = true;
    let mounted = true;
    bodyFn().then(content => {
      if (mounted) {
        setBodyState(content);
      }
      loading = false;
    });
    return () => {
      mounted = false;
      if (!loading) {
        setBodyState(body);
      }
    }
  }, [itemKey, onScreen])

  const elementShownRef = useCallback((node: HTMLDivElement) => {
    node?.scrollIntoView({
      behavior: "auto",
      block: "center",
    });
  }, []);

  const selectOptionButton = useAccordionButton(itemKey);

  const handleExpanding = () => {
    setExpanding(true);
    setExpanded(false);
    setCollapsing(false);
  }

  const handleExpanded = () => {
    setExpanding(false);
    setExpanded(true);
  }

  const handleCollapsing = () => {
    setExpanding(false);
    setExpanded(false);
    setCollapsing(true);
  }

  const handleCollapsed = () => {
    setCollapsing(false);
    setExpanded(false);
  }

  const itemClassNames = [ styles.item ];
  const buttonClassNames = [ styles.button ]
  if (variant) {
    buttonClassNames.push(styles[variant]);
  }
  if (expanded) {
    buttonClassNames.push(styles.expanded);
  }
  if (expanding) {
    buttonClassNames.push(styles.expanding);
  }
  if (collapsing) {
    buttonClassNames.push(styles.collapsing);
  }
  if (isActive) {
    buttonClassNames.push(styles.active);
  }
  if (disabled) {
    buttonClassNames.push(styles.disabled);
  }

  return (
      <div className={classNames(...itemClassNames)} ref={elementRef}>
        <div className={classNames(...buttonClassNames)} onClick={selectOptionButton}>{label}</div>
        <Accordion.Collapse eventKey={itemKey}
                            appear={isActive}
                            // style={{ display: hasBody ? 'block' : 'none' }}
                            onEntering={_ => handleExpanding()}
                            onEntered={_ => handleExpanded()}
                            onExiting={_ => handleCollapsing()}
                            onExited={_ => handleCollapsed()}>
          <div className={styles.body} ref={elementShownRef}>
            {bodyState}
          </div>
        </Accordion.Collapse>
      </div>);
}

PathfinderSelect.Item = PathfinderSelectItem;

export default PathfinderSelect;