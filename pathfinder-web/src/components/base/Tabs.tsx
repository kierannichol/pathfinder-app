import React, {ReactNode, useMemo} from "react";
import styles from "./Tabs.module.css";
import {classNames} from "../../../../pathfinder-lib/utils/src/classNames";


interface TabsProps {
  activeKey?: string;
  children?: ReactNode;
  onSelect?: (eventKey: string) => void;
}

interface TabProps {
  eventKey: string;
  header: string;
  children?: ReactNode;
}

function Tabs({ activeKey, onSelect, children }: TabsProps) {
  function handleTabClicked(eventKey: string) {
    onSelect?.(eventKey);
  }

  const contentNodes = useMemo(() => {
    return React.Children.toArray(children);
  }, [children]);

  const activeContentIndex = useMemo(() => {
    return React.Children.toArray(children)
      .findIndex((child, index) => isActiveTab(child, activeKey) ?? isFirstTab(index));
  }, [children, activeKey]);

  return <div className={styles.tabs}>
    <div className={styles.tabList}>
      {React.Children.map(children, (child: ReactNode, index: number) => {
        if (child && typeof child === 'object' && 'props' in child) {
          return <div className={classNames([styles.tab, (activeKey ? child.props.eventKey === activeKey : index === 0) ? styles.active : undefined])} onClick={() => handleTabClicked(child.props.eventKey)}>{child?.props.header}</div>
        }
        return <></>
      })}
    </div>
    {contentNodes[activeContentIndex]}
  </div>
}

function Tab({ children }: TabProps) {
  return children;
}

function isActiveTab(child: ReactNode, activeKey: string|undefined): boolean | undefined {
  if (!activeKey) return undefined;
  if (!child) return false;
  if (!(typeof child === 'object' && 'props' in child)) return false;
  return child.props.eventKey === activeKey;
}

function isFirstTab(index: number): boolean {
  return index === 0;
}

Tabs.Tab = Tab;

export default Tabs;