import * as React from 'react';
import {HTMLAttributes, ReactNode, useState} from 'react';
import SelectListCategory from "@/components/base/form/select/SelectListCategory.ts";
import {SelectListEntry} from "@/components/base/form/select/SelectList.tsx";
import SelectDialog from "@/components/base/form/select/SelectDialog.tsx";
import {SelectListEntryInfoPopup} from "@/components/base/form/select/SelectListEntryInfoPopup.tsx";

interface SelectDialogLinkProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'value' | 'title'> {
  title: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  optionsFn: (query: string|undefined, category: SelectListCategory|undefined) => SelectListEntry[];
  categories?: SelectListCategory[];
  children?: ReactNode;
}

function SelectDialogLink({title, value, onChange, optionsFn, categories, className, children, ...buttonProps}: SelectDialogLinkProps) {
  const [showSelectDialog, setShowSelectDialog] = useState<boolean>(false);
  const [showInfoPopup, setShowInfoPopup] = useState<boolean>(false);

  function handleClickButton() {
    if (value) {
      setShowInfoPopup(true);
    } else {
      setShowSelectDialog(true);
    }
  }

  function handleSelect(value: string) {
    onChange?.(value);
    setShowSelectDialog(false);
  }

  function handleClose() {
    setShowSelectDialog(false);
  }

  function handleCloseInfo() {
    setShowInfoPopup(false);
  }

  function handleClickChange() {
    setShowInfoPopup(false);
    setShowSelectDialog(true);
  }

  return (
      <>
        <div onClick={handleClickButton} {...buttonProps}>
          {children}
        </div>
        {showSelectDialog && <SelectDialog show={true}
                                           title={title}
                                           onSelect={handleSelect}
                                           onClose={handleClose}
                                           value={value}
                                           optionsFn={optionsFn}
                                           categories={categories}/>}
        {showInfoPopup && value && <SelectListEntryInfoPopup show={true}
                                                             onClose={handleCloseInfo}
                                                             optionsFn={optionsFn}
                                                             value={value} onClickChange={handleClickChange} />}
      </>
  );
}

export default SelectDialogLink;