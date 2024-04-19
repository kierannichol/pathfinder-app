import React, {memo, ReactNode, useEffect, useRef, useState} from "react";
import {entityId, EntitySelectOption, OptionalEntityId} from "@/view/components/entity/EntitySelectOption.tsx";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";
import {Accordion} from "react-bootstrap";
import styles from "./EntitySelectList.module.css";
import {useOnScreen} from "@/utils/useOnScreen.tsx";
import LoadingBlock from "@/view/components/LoadingBlock.tsx";

interface EntitySelectListProps {
  options: EntitySelectOption[];
  selected?: OptionalEntityId;
  onSelect?: (entityId: OptionalEntityId) => void;
}

export function EntitySelectList({ options, selected, onSelect }: EntitySelectListProps) {
  const [ activeKey, setActiveKey ] = useState<AccordionEventKey>(entityId.toKeyOrUndefined(selected));

  function handleSelect(eventKey: AccordionEventKey) {
    setActiveKey(eventKey);

    const option = options.find(opt => entityId.toKey(opt.id) === eventKey);
    onSelect?.(option?.id);
  }

  return <Accordion activeKey={activeKey}
                    className={styles.control}
                    onSelect={handleSelect}
                    flush={false} >
    {options.map(option =>
        <EntitySelectItem key={option.id} option={option} />
    )}
  </Accordion>
}

interface EntitySelectItemProps {
  option: EntitySelectOption;
}

const EntitySelectItem = memo(function EntitySelectItem({ option }: EntitySelectItemProps) {
  const [ body, setBody ] = useState<ReactNode>();

  const elementRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(elementRef);

  useEffect(() => {
    if (!onScreen || !option.bodyFn) {
      setBody(undefined);
      return;
    }

    let mounted = true;
    setBody(<LoadingBlock/>);
    option.bodyFn()
      .then(loadedBody =>
          mounted && setBody(loadedBody));

    return () => {
      mounted = false;
      setBody(undefined);
    };
  }, [onScreen, option]);

  return <Accordion.Item eventKey={entityId.toKey(option.id)}
                         className={styles.item}
                         ref={elementRef}>
    <Accordion.Header>
      <div className={styles.label}>{option.label}</div>
    </Accordion.Header>
    <Accordion.Body>
      {body}
    </Accordion.Body>
  </Accordion.Item>
});