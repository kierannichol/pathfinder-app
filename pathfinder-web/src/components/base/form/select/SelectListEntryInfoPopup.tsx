import * as React from 'react';
import {SelectListEntry, SelectListOption} from "@/components/base/form/select/SelectList.tsx";
import SelectListCategory from "@/components/base/form/select/SelectListCategory.ts";
import DialogBox from "@/components/base/DialogBox.tsx";
import useAsyncMemo from "@/utils/useAsyncMemo.tsx";
import styles from "@/components/base/form/select/SelectListEntryInfoPopup.module.css";

interface SelectInfoPopupProps {
  show: boolean;
  onClose: () => void;
  value: string;
  optionsFn: (query: string | undefined, category: SelectListCategory | undefined) => SelectListEntry[];
  onClickChange: () => void;
}

export function SelectListEntryInfoPopup({show, onClose, value, optionsFn, onClickChange}: SelectInfoPopupProps) {
  const selected = optionsFn(undefined, undefined)
  .find(entry => entry.value === value);

  return (
      <DialogBox show={show} onClose={onClose}>
        <DialogBox.Title>
          {selected?.label ?? selected?.name ?? "Not Found"}
        </DialogBox.Title>
        <DialogBox.Body>
          {selected instanceof SelectListOption &&
              <SelectListOptionBlock option={selected} onClickChange={onClickChange}/>}
        </DialogBox.Body>
      </DialogBox>
  )
}

interface SelectListOptionBlockProps {
  option: SelectListOption;
  onClickChange: () => void;
}

export function SelectListOptionBlock({option, onClickChange}: SelectListOptionBlockProps) {
  const [description, isLoading] = useAsyncMemo(async () => option.descriptionFn?.(), [option]);

  return (
      <div>
        <div className={styles.controls}>
          <button onClick={onClickChange}>Change</button>
        </div>
        <div>
          {description}
        </div>
      </div>
  )
}