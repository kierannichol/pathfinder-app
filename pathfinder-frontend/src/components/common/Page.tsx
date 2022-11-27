import React, {useEffect} from "react";
import classNames from "../../app/classNames";

interface PageProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Page({ title, className, children }: PageProps) {
  useEffect(() => {
    if (title === undefined) {
      return;
    }
    document.title = title;
  }, [title])


  return <div className={classNames("d-flex flex-column flex-fill", className)}>
    {children}
  </div>
}