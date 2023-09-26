import React, {ReactElement, ReactNode, useContext} from "react";
import {Accordion, AccordionContext, useAccordionButton} from "react-bootstrap";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";
import PathfinderButton from "./PathfinderButton";
import styles from "./PathfinderSelect.module.scss";

type SelectChildType = ReactElement<PathfinderSelectItemProps>|ReactElement<PathfinderSelectItemProps>[];

function classNames(classNames: string[]) {
  return classNames.join(' ');
}

interface PathfinderSelectProps {
  activeKey?: string|null;
  onChange?: (key: string|null) => void;
  children: SelectChildType;
}

const PathfinderSelect = ({ activeKey, onChange, children }: PathfinderSelectProps) => {
  function handleChangeSelection(eventKey: AccordionEventKey) {
    onChange?.(typeof eventKey === "string" ? eventKey : null);
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
  disabled?: boolean;
  variant?: string|string[];
  children?: ReactNode;
}

function PathfinderSelectItem({ itemKey, children, disabled = false, variant = 'special' }: PathfinderSelectItemProps) {
  return <PathfinderSelectItemWithoutBody itemKey={itemKey} children={children} disabled={disabled} variant={variant} />
}

function PathfinderSelectItemWithoutBody({ itemKey, children, disabled, variant }: PathfinderSelectItemProps) {
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
        <PathfinderButton variant={variant}
                          disabled={disabled}
                          className={classNames(buttonClassNames)}
                          onClick={selectOptionButton}>{children}</PathfinderButton>
      </div>);
}

PathfinderSelect.Item = PathfinderSelectItem;

export default PathfinderSelect;