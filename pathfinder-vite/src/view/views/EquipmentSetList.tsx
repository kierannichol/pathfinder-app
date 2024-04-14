import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import useAsyncMemo from "../../utils/useAsyncMemo.tsx";
import LoadingBlock from "../components/LoadingBlock.tsx";
import styles from "./EquipmentSetList.module.scss";
import Panel from "../components/Panel.tsx";
import {classNames} from "../../utils/classNames.ts";
import DeleteIcon from "../components/icons/DeleteIcon.tsx";
import {Button} from "react-bootstrap";
import NewEquipmentSetDialog from "../components/character/NewEquipmentSetDialog.tsx";
import {useEquipmentSetStore} from "../../data/context.tsx";
import {EquipmentSet} from "../../data/v8/Equipment.ts";

export function EquipmentSetList() {
  const equipmentSetStore = useEquipmentSetStore();
  const navigate = useNavigate();

  const [ equipmentSets, setEquipmentSets ] = useState<EquipmentSet[]>([]);

  const [ loadedEquipmentSets, isLoading ] = useAsyncMemo(() => equipmentSetStore.list(),
      [equipmentSetStore]);

  useEffect(() => {
    setEquipmentSets(loadedEquipmentSets);
  }, [ loadedEquipmentSets ]);

  const handleCreate = async (name: string) => {
    const created = await equipmentSetStore.create(name);
    navigate(`/equipment/edit/${created.id}`)
  };

  const handleDelete = async (id: string) => {
    setEquipmentSets(equipmentSets.filter(equipmentSet => equipmentSet.id !== id))
    await equipmentSetStore.delete(id);
  };

  return <main>
    <header>Equipment Sets</header>
    <section>
      {isLoading ? <LoadingBlock/> : <div className={styles.equipmentSets}>
        {equipmentSets?.map(equipmentSet => <EquipmentSetListEntry
            key={equipmentSet.id}
            equipmentSet={equipmentSet}
            onDelete={handleDelete} />)}
      </div>}
      <div className={styles.controls}>
        <AddCharacterButton disabled={isLoading} onCreate={handleCreate} />
      </div>
    </section>
  </main>
}

interface EquipmentSetListEntryProps {
  equipmentSet: EquipmentSet;
  onDelete: (id: string) => void;
}

function EquipmentSetListEntry({ equipmentSet, onDelete }: EquipmentSetListEntryProps) {
  const navigate = useNavigate();
  return <Panel
      className={styles.equipmentSet}>

    <div className={classNames([styles.nameContainer, 'clickable'])} onClick={() => {
      navigate(`/equipment/edit/${equipmentSet.id}`)
    }}>
      {equipmentSet.name}
    </div>
    <div className={classNames([styles.deleteButtonContainer, 'clickable'])} onClick={() => {
      onDelete(equipmentSet.id);
    }}>
      <DeleteIcon />
    </div>
  </Panel>
}

interface AddEquipmentSetButtonProps {
  onCreate: (name: string) => void;
  disabled?: boolean;
}

function AddCharacterButton({ onCreate, disabled = false }: AddEquipmentSetButtonProps) {
  const [ show, setShow ] = useState(false);

  function handleCreate(name: string) {
    setShow(false);
    onCreate(name);
  }

  function handleCancel() {
    setShow(false);
  }

  return (<>
    <Button disabled={disabled} onClick={_ => setShow(true)} size="lg">+ Equipment Set</Button>
    {show && <NewEquipmentSetDialog show={show}
                                 onCreate={handleCreate}
                                 onCancel={handleCancel} />}
  </>);
}