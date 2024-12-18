import {HTMLAttributes, useEffect, useRef, useState} from "react";
import styles from "./Collapse.module.css";
import {classNames} from "../../../../pathfinder-lib/utils/src/classNames.ts";

interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onExpanding?: () => void;
  onExpanded?: () => void;
  onCollapsing?: () => void;
  onCollapsed?: () => void;
}

function Collapse({ open, onExpanding, onExpanded, onCollapsing, onCollapsed, children, className, ...divProps }: CollapseProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [ height, setHeight ] = useState<number|undefined>(0);
  const [ previousOpen, setPreviousOpen ] = useState<boolean>(open);

  useEffect(() => {
    if (previousOpen === open) return;
    setPreviousOpen(open);

    if (open) onExpanding?.();
    else onCollapsing?.();
  }, [open]);

  useEffect(() => {
    if (open) setHeight(contentRef.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [open, contentRef]);

  useEffect(() => {
    if (!height || !open || !contentRef.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(contentRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, open, contentRef]);

  function handleTransitionEnd(event: any) {
    if (open) {
      onExpanded?.();
    } else {
      onCollapsed?.();
    }
    divProps?.onTransitionEnd?.(event);
  }

  return <div className={classNames([styles.collapse, className])}
              {...divProps}
              onTransitionEnd={handleTransitionEnd}
              style={{ height: height }}>
    <div ref={contentRef}>
      {children}
    </div>
  </div>
}

export default Collapse;