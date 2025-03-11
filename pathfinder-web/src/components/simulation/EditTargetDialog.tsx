import * as React from 'react';
import DialogBox from "@/components/base/DialogBox.tsx";

interface EditTargetDialogProps {
  show: boolean;
  onSave: () => void;
  onClose: () => void;
}

export function EditTargetDialog({ show, onSave, onClose }: EditTargetDialogProps) {
  function handleSave() {
    onSave();
    onClose();
  }

  return (
  <DialogBox show={show} onClose={onClose}>
    <DialogBox.Title>Edit Target</DialogBox.Title>
    <DialogBox.Body>

    </DialogBox.Body>
    <DialogBox.Footer>
      <button onClick={handleSave}>Save</button>
    </DialogBox.Footer>
  </DialogBox>
 )
}