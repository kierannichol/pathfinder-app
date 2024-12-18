import {ComponentProps} from "react";
import Button from "@/components/base/form/Button.tsx";
import choiceSelectButtonStyles from "@/components/choice/ChoiceSelectButton.module.css";
import SelectDialogLink from "@/components/base/form/select/SelectDialogLink.tsx";
import {classNames} from "../../../../../../pathfinder-lib/utils/src/classNames.ts";

interface SelectInputProps extends ComponentProps<typeof SelectDialogLink> {

}

function SelectButton({ className, children, ...selectDialogLinkProps }: SelectInputProps) {
  return <SelectDialogLink
                           {...selectDialogLinkProps}>
    <Button className={classNames([choiceSelectButtonStyles.button, className])}>
      {children}
    </Button>
  </SelectDialogLink>
}

export default SelectButton;