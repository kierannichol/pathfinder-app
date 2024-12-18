import {classNames} from "../../../../pathfinder-lib/utils/src/classNames.ts";
import styles from "./DialogBox.module.css";
import React, {createContext, MutableRefObject, ReactElement, ReactNode, useContext, useEffect, useRef} from "react";
import {GrClose} from "react-icons/gr";

export interface DialogBoxProps {
  show: boolean;
  className?: string;
  onClose?: () => void;
  children?: (ReactElement<DialogBoxComponent>|undefined)[];
}

interface DialogBoxComponent {

}

interface DialogBoxHeaderProps extends DialogBoxComponent {
  children?: ReactNode;
}

interface DialogBoxBodyProps extends DialogBoxComponent {
  children?: ReactNode;
}

interface DialogBoxFooterProps extends DialogBoxComponent {
  children?: ReactNode;
}

const DialogContext = createContext<MutableRefObject<HTMLDialogElement | null> | undefined>(undefined);

function DialogBox({ show, className, onClose, children }: DialogBoxProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (show) {
      dialogRef.current?.showModal();
      return;
    }
    dialogRef.current?.close();
  }, [show]);

  return <dialog ref={dialogRef}
                 onClose={onClose}
                 className={classNames([styles.dialog, show ? styles.show : styles.hide])}>
    <div className={classNames([styles.container, className])}>
      <DialogContext.Provider value={dialogRef}>
        {children}
      </DialogContext.Provider>
    </div>
  </dialog>
}

function Title({ children }: DialogBoxHeaderProps) {
  const dialogRef = useContext(DialogContext);

  function handleClickClose() {
    dialogRef?.current?.close();
  }

  return <div className={styles.header}>
    <div>{children}</div>
    <div onClick={handleClickClose}><GrClose/></div>
  </div>
}

function Header({ children }: DialogBoxHeaderProps) {

  return <div className={styles.header}>
    {children}
  </div>
}

function Body({ children }: DialogBoxBodyProps) {
  return <section className={styles.body}>{children}</section>
}

function Footer({ children }: DialogBoxFooterProps) {
  return <div className={styles.footer}>{children}</div>
}

DialogBox.Title = Title;
DialogBox.Header = Header;
DialogBox.Body = Body;
DialogBox.Footer = Footer;

export default DialogBox;