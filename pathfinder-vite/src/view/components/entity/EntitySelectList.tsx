import React, {ReactNode, useState} from "react";
import {entityId, EntitySelectOption, OptionalEntityId} from "@/view/components/entity/EntitySelectOption.tsx";
import {AccordionEventKey} from "react-bootstrap/AccordionContext";
import {Accordion} from "react-bootstrap";
import styles from "@/view/components/controls/PathfinderSelect.module.scss";
import useAsyncMemo from "@/utils/useAsyncMemo.tsx";
import LoadingBlock from "@/view/components/LoadingBlock.tsx";

interface EntitySelectListProps {
  options: EntitySelectOption[];
  selected?: OptionalEntityId;
  onSelect?: (entityId: OptionalEntityId) => void;
  onChangeSelection?: (optionId: OptionalEntityId) => void;
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
                    flush={false}>
    {options.map(option =>
        <EntitySelectItem key={option.id} option={option} />
    )}
  </Accordion>
}

interface EntitySelectItemProps {
  option: EntitySelectOption;
}

function EntitySelectItem({ option }: EntitySelectItemProps) {
  const [ body ] = useAsyncMemo<ReactNode>(async () => option.bodyFn ? option.bodyFn() : undefined, [option], <LoadingBlock/>)

  return <Accordion.Item eventKey={entityId.toKey(option.id)}>
    <Accordion.Header>{option.label}</Accordion.Header>
    <Accordion.Body>
      {body}
    </Accordion.Body>
  </Accordion.Item>
}