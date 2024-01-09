import React, {ReactElement, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {Accordion, AccordionContext, Collapse, useAccordionButton} from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";
import ButtonBlock from "./ButtonBlock.tsx";
import styles from "./PathfinderSelect.module.scss";
import {classNames} from "../../../utils/classNames.ts";
import {useOnScreen} from "../../../utils/useOnScreen.tsx";
import LoadingBlock from "../LoadingBlock.tsx";

type SelectChildType = ReactElement<SelectBlockItemProps>|ReactElement<SelectBlockItemProps>[];

interface SelectBlockProps {
  activeKey?: string;
  onChange?: (key: string|undefined) => void;
  children: SelectChildType;
}

const SelectBlock = ({ activeKey, onChange, children }: SelectBlockProps) => {
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

interface SelectBlockItemProps {
  itemKey: string;
  label: ReactNode;
  bodyFn?: () => Promise<ReactNode>;
  disabled?: boolean;
  variant?: string|string[];
  children?: ReactNode;
}

function SelectBlockItem({ itemKey, label, bodyFn, disabled = false, variant = 'special', children = undefined }: SelectBlockItemProps) {
  const hasBody = bodyFn !== undefined || children !== undefined;
  return hasBody
      ? <SelectBlockItemWithBody itemKey={itemKey} label={label} bodyFn={bodyFn} disabled={disabled} variant={variant}>
        {children}
      </SelectBlockItemWithBody>
      : <SelectBlockItemWithoutBody itemKey={itemKey} label={label} disabled={disabled} variant={variant} />
}

function SelectBlockItemWithoutBody({ itemKey, label, disabled, variant }: SelectBlockItemProps) {
  const { activeEventKey } = useContext(AccordionContext);
  const isActive = itemKey === activeEventKey;
  const selectOptionButton = useAccordionButton(itemKey);

  const itemClassNames = [ styles.item ];
  const buttonClassNames = [ styles.button, styles.collapsed ];
  if (isActive) {
    buttonClassNames.push(styles.active);
  }

  return (
      <div className={classNames(itemClassNames)}>
        <ButtonBlock variant={variant}
                     disabled={disabled}
                     className={classNames(buttonClassNames)}
                     onClick={selectOptionButton}>{label}</ButtonBlock>
      </div>);
}

function SelectBlockItemWithBody({ itemKey, label, bodyFn, disabled, variant, children }: SelectBlockItemProps) {
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
      <div className={classNames(itemClassNames)} ref={elementRef}>
        <ButtonBlock variant={variant} disabled={disabled} className={classNames(buttonClassNames)} onClick={selectOptionButton}>{label}</ButtonBlock>
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

interface SelectBlockItemContainerProps {
  label: ReactNode;
  disabled?: boolean;
  variant?: string;
  childrenFn: () => SelectChildType;
}

function SelectBlockItemContainer({ label, childrenFn, disabled, variant }: SelectBlockItemContainerProps) {
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
      <div className={classNames(itemClassNames)} ref={elementRef}>
        <ButtonBlock variant={variant} disabled={disabled} className={classNames(buttonClassNames)} onClick={_ => handleToggleOpen()}>{openIcon} {label}</ButtonBlock>
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

SelectBlock.Item = SelectBlockItem;
SelectBlock.ItemContainer = SelectBlockItemContainer;

export default SelectBlock;