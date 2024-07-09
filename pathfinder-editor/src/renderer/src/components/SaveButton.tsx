import {Button} from "react-bootstrap";
import {useState} from "react";

interface SaveButtonProps {
  saveFn: () => Promise<void>;
}

export function SaveButton({ saveFn }: SaveButtonProps) {
  const [ saving, setSaving ] = useState(false);

  function handleSave() {
    setSaving(true);
    saveFn().then(() => {
      setSaving(false);
    });
  }

  return <Button variant="primary"
                 disabled={saving}
                 onClick={handleSave}>Save</Button>
}