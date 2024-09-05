import {useState} from "react";
import EditSkillsPopup from "@/view/components/character/plan/EditSkillsPopup.tsx";
import styles from "@/view/components/character/equipment/EquipmentEditorButton.module.css";
import {GiSkills} from "react-icons/gi";
import {SkillsEditorProps} from "@/view/components/character/plan/SkillsEditor.tsx";

interface EditSkillsButtonProps extends SkillsEditorProps {

}

export default function EditSkillsButton({ ...skillsEditorProps }: EditSkillsButtonProps) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true)
  }

  function handleClose() {
    setShow(false);
  }

  return <>
    <div className={styles.button}>
      <GiSkills size={64} className="clickable" onClick={handleShow} />
    </div>
    <EditSkillsPopup show={show} onClose={handleClose} {...skillsEditorProps} />
  </>
}