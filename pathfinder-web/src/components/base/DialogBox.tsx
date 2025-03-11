import {classNames} from "../../../../pathfinder-lib/utils/src/classNames.ts";
import styles from "./DialogBox.module.css";
import React, {createContext, ReactElement, ReactNode, RefObject, use, useEffect, useRef} from "react";
import {GrClose} from "react-icons/gr";

export interface DialogBoxProps {
  show: boolean;
  className?: string;
  onClose?: (event: React.SyntheticEvent<HTMLDialogElement>) => void;
  children?: ReactElement<DialogBoxComponent>|(ReactElement<DialogBoxComponent>|undefined)[];
}

interface DialogBoxComponent {

}

interface DialogBoxHeaderProps extends DialogBoxComponent {
  children?: ReactNode;
  className?: string;
}

interface DialogBoxBodyProps extends DialogBoxComponent {
  children?: ReactNode;
  className?: string;
}

interface DialogBoxFooterProps extends DialogBoxComponent {
  children?: ReactNode;
  className?: string;
}

const DialogContext = createContext<RefObject<HTMLDialogElement | null> | undefined>(undefined);

function DialogBox({ show, className, onClose, children }: DialogBoxProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (show) {
      dialogRef.current?.showModal();
      return;
    }
    dialogRef.current?.close();
  }, [show]);

  function handleClickDialog(event: React.MouseEvent<HTMLDialogElement>) {
    // if (event.target === event.currentTarget) {
    //   dialogRef.current?.close();
    // }
  }

  return <dialog ref={dialogRef}
                 onClose={onClose}
                 onClick={handleClickDialog}
                 className={classNames([styles.dialog])}>
    <div className={classNames([styles.container, className])}>
      <DialogContext.Provider value={dialogRef}>
        {children}
      </DialogContext.Provider>
    </div>
  </dialog>
}

function Title({ children, className }: DialogBoxHeaderProps) {
  const dialogRef = use(DialogContext);

  function handleClickClose(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    dialogRef?.current?.close();
  }

  return <header className={styles.title}>
    <div className={className}>{children}</div>
    <div className={styles.close} onClick={handleClickClose}><GrClose/></div>
  </header>
}

function Header({ children, className }: DialogBoxHeaderProps) {
  return <header className={className}>
    {children}
  </header>
}

function Body({ children, className }: DialogBoxBodyProps) {
  return <section className={[styles.body, className].join(' ')}>{children}</section>
}

function Footer({ children, className }: DialogBoxFooterProps) {
  return <div className={[styles.footer, className].join(' ')}>{children}</div>
}

DialogBox.Title = Title;
DialogBox.Header = Header;
DialogBox.Body = Body;
DialogBox.Footer = Footer;

export default DialogBox;