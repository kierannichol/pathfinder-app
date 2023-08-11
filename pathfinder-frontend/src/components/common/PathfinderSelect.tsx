import React, {ReactElement, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {Accordion, AccordionContext, Collapse, useAccordionButton} from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";
import classNames from "../../app/classNames";
import {useOnScreen} from "../../app/reactHooks";
import LoadingBlock from "./LoadingBlock";
import PathfinderButton from "./PathfinderButton";
import styles from "./PathfinderSelect.module.scss";

type SelectChildType = ReactElement<PathfinderSelectItemProps>|ReactElement<PathfinderSelectItemProps>[];

interface PathfinderSelectProps {
  activeKey?: string;
  onChange?: (key: string|undefined) => void;
  children: SelectChildType;
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
  disabled?: boolean;
  variant?: string;
  children?: ReactNode;
}

function PathfinderSelectItem({ itemKey, label, bodyFn, disabled = false, variant = 'special', children = undefined }: PathfinderSelectItemProps) {
  const hasBody = bodyFn !== undefined || children !== undefined;
  return hasBody
      ? <PathfinderSelectItemWithBody itemKey={itemKey} label={label} bodyFn={bodyFn} disabled={disabled} variant={variant}>
        {children}
      </PathfinderSelectItemWithBody>
      : <PathfinderSelectItemWithoutBody itemKey={itemKey} label={label} disabled={disabled} variant={variant} />
}

function PathfinderSelectItemWithoutBody({ itemKey, label, disabled, variant }: PathfinderSelectItemProps) {
  const { activeEventKey } = useContext(AccordionContext);
  const isActive = itemKey === activeEventKey;
  const selectOptionButton = useAccordionButton(itemKey);

  const itemClassNames = [ styles.item ];
  const buttonClassNames = [ styles.button, styles.collapsed ];
  if (isActive) {
    buttonClassNames.push(styles.active);
  }

  return (
      <div className={classNames(...itemClassNames)}>
        <PathfinderButton variant={variant}
                          disabled={disabled}
                          className={classNames(...buttonClassNames)}
                          onClick={selectOptionButton}>{label}</PathfinderButton>
      </div>);
}

function PathfinderSelectItemWithBody({ itemKey, label, bodyFn, disabled, variant, children }: PathfinderSelectItemProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(elementRef);
  const { activeEventKey } = useContext(AccordionContext);

  const isActive = itemKey === activeEventKey;
  const [ expanded, setExpanded ] = useState(isActive);
  const [ expanding, setExpanding ] = useState(false);
  const [ collapsing, setCollapsing ] = useState(false);
  const [ collapsed, setCollapsed ] = useState(!isActive);

  const [ bodyState, setBodyState ] = useState<ReactNode>();
  useEffect(() => {
    setBodyState(children);
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
        setBodyState(undefined);
      }
    }
  }, [itemKey, onScreen, bodyFn])

  const selectOptionButton = useAccordionButton(itemKey);

  const handleExpanding = () => {
    setExpanding(true);
    setExpanded(false);
    setCollapsing(false);
    setCollapsed(false);
  }

  const handleExpanded = () => {
    setExpanding(false);
    setExpanded(true);
    setCollapsed(false);
  }

  const handleCollapsing = () => {
    setExpanding(false);
    setExpanded(false);
    setCollapsing(true);
    setCollapsed(false);
  }

  const handleCollapsed = () => {
    setCollapsing(false);
    setExpanded(false);
    setCollapsed(true);
  }

  const itemClassNames = [ styles.item ];
  const buttonClassNames = [ styles.button ]
  if (expanded) {
    buttonClassNames.push(styles.expanded);
  }
  if (expanding) {
    buttonClassNames.push(styles.expanding);
  }
  if (collapsing) {
    buttonClassNames.push(styles.collapsing);
  }
  if (collapsed) {
    buttonClassNames.push(styles.collapsed);
  }
  if (isActive) {
    buttonClassNames.push(styles.active);
  }

  return (
      <div className={classNames(...itemClassNames)} ref={elementRef}>
        <PathfinderButton variant={variant} disabled={disabled} className={classNames(...buttonClassNames)} onClick={selectOptionButton}>{label}</PathfinderButton>
        <Accordion.Collapse eventKey={itemKey}
                            appear={isActive}
                            onEntering={_ => handleExpanding()}
                            onEntered={_ => handleExpanded()}
                            onExiting={_ => handleCollapsing()}
                            onExited={_ => handleCollapsed()}>
          <div className={styles.body}>
            {bodyState}
          </div>
        </Accordion.Collapse>
      </div>);
}

interface PathfinderSelectItemContainerProps {
  label: ReactNode;
  disabled?: boolean;
  variant?: string;
  childrenFn: () => SelectChildType;
}

function PathfinderSelectItemContainer({ label, childrenFn, disabled, variant }: PathfinderSelectItemContainerProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  // const onScreen = useOnScreen(elementRef);

  const [ expanded, setExpanded ] = useState(false);
  const [ expanding, setExpanding ] = useState(false);
  const [ collapsing, setCollapsing ] = useState(false);
  const [ collapsed, setCollapsed ] = useState(true);
  const [ open, setOpen ] = useState(false);

  const [ bodyState, setBodyState ] = useState<ReactNode>(<LoadingBlock/>);

  function handleToggleOpen() {
    setOpen(!open);
  }

  const handleExpanding = () => {
    setBodyState(childrenFn());
    // scrollToElement(elementRef);
    setExpanding(true);
    setExpanded(false);
    setCollapsing(false);
    setCollapsed(false);
  }

  const handleExpanded = () => {
    setExpanding(false);
    setExpanded(true);
    setCollapsed(false);
  }

  const handleCollapsing = () => {
    setExpanding(false);
    setExpanded(false);
    setCollapsing(true);
    setCollapsed(false);
  }

  const handleCollapsed = () => {
    setCollapsing(false);
    setExpanded(false);
    setCollapsed(true);
    setBodyState(<LoadingBlock/>);
  }

  const itemClassNames = [ styles.item ];
  const buttonClassNames = [ styles.button ]
  if (expanded) {
    buttonClassNames.push(styles.expanded);
  }
  if (expanding) {
    buttonClassNames.push(styles.expanding);
  }
  if (collapsing) {
    buttonClassNames.push(styles.collapsing);
  }
  if (collapsed) {
    buttonClassNames.push(styles.collapsed);
  }

  const openIcon = open ? <Icons.CaretDownFill /> : <Icons.CaretRightFill />;

  return (
      <div className={classNames(...itemClassNames)} ref={elementRef}>
        <PathfinderButton variant={variant} disabled={disabled} className={classNames(...buttonClassNames)} onClick={_ => handleToggleOpen()}>{openIcon} {label}</PathfinderButton>
        <Collapse in={open}
                  onEntering={_ => handleExpanding()}
                  onEntered={_ => handleExpanded()}
                  onExiting={_ => handleCollapsing()}
                  onExited={_ => handleCollapsed()}>
          <div className={styles.body}>
            {bodyState}
          </div>
        </Collapse>
      </div>);
}

PathfinderSelect.Item = PathfinderSelectItem;
PathfinderSelect.ItemContainer = PathfinderSelectItemContainer;

export default PathfinderSelect;