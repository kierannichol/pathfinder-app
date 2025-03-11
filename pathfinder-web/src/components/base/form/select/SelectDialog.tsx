import DialogBox from "@/components/base/DialogBox.tsx";
import SelectList, {
  SelectListEntry,
  SelectListOptionGroup,
  SelectListProps
} from "@/components/base/form/select/SelectList.tsx";
import {ReactNode, useCallback, useState} from "react";
import styles from "./SelectDialog.module.css";
import TextInput from "@/components/base/form/TextInput.tsx";
import {FaMagnifyingGlass} from "react-icons/fa6";
import SelectListCategory from "@/components/base/form/select/SelectListCategory.ts";
import {classNames} from "../../../../../../pathfinder-lib/utils/src/classNames.ts";

interface SelectDialogProps extends Omit<SelectListProps, 'onChange' | 'optionsFn'> {
  show: boolean;
  title: ReactNode;
  onSelect: (value: string) => void;
  onClose: () => void;
  categories?: SelectListCategory[];
  optionsFn: (query: string|undefined, category: SelectListCategory|undefined) => SelectListEntry[];
}

function SelectDialog({
                        value,
                        title,
                        show,
                        onSelect,
                        onClose,
                        optionsFn,
                        categories,
                        ...selectListProps }: SelectDialogProps) {
  const [ selected, setSelected ] = useState<string|undefined>(value);
  const [ query, setQuery ] = useState<string|undefined>(undefined);
  const [ workingQuery, setWorkingQuery ] = useState<string>('');
  const [ activeCategory, setActiveCategory ] = useState<SelectListCategory|undefined>(categories?.[0]);
  const [ showGroup, setShowGroup ] = useState<SelectListOptionGroup | undefined>(undefined);

  const queryOptionsFn = useCallback(() => {
      return optionsFn(query, activeCategory);
  }, [optionsFn, query, activeCategory]);

  function handleChange(entry: SelectListEntry, value: string | undefined) {
    setSelected(value);
    if (entry.type === 'group') {
      setShowGroup(entry as SelectListOptionGroup);
    } else {
      setShowGroup(undefined);
    }
  }

  function handleConfirm() {
    if (selected) {
      onSelect(selected);
    }
  }

  function handleQuery(query: string) {
    setQuery(query.toLowerCase());
    setActiveCategory(undefined);
  }

  function handleClickCategory(category: SelectListCategory) {
    setActiveCategory(category);
    setQuery(undefined);
    setWorkingQuery('');
  }

  function handleClose() {
    onClose?.();
  }

  return <>
    <DialogBox className={styles.dialog} show={show} onClose={handleClose}>
    <DialogBox.Title>
      {title}
    </DialogBox.Title>
    <DialogBox.Header className={styles.header}>
      <search className={styles.searchbar}>
        <FaMagnifyingGlass />
        <TextInput value={workingQuery} onChange={setWorkingQuery} onEnter={handleQuery} />
      </search>
      {categories &&
          <div className={styles.categories}>
            {categories.map(category => <div key={category.name}
                                             className={classNames([styles.category, category === activeCategory ? styles.active : undefined])}
                                             onClick={() => handleClickCategory(category)}>
              {category.name}
            </div>)}
          </div>}
    </DialogBox.Header>
    <DialogBox.Body className={styles.body}>
        <SelectList value={selected}
                    onChange={handleChange}
                    optionsFn={queryOptionsFn}
                    {...selectListProps} />
    </DialogBox.Body>
    <DialogBox.Footer className={styles.footer}>
      <button className="light"
              disabled={selected === undefined}
              onClick={handleConfirm}>Confirm</button>
    </DialogBox.Footer>
  </DialogBox>
    {showGroup && (<SelectDialog show={true}
                                 title={'Select...'}
                                 onSelect={onSelect}
                                 onClose={() => setShowGroup(undefined)}
                                 optionsFn={(query, _2) => showGroup.optionsFn(query)}
                                 {...selectListProps} />)}
  </>;
}

export default SelectDialog;