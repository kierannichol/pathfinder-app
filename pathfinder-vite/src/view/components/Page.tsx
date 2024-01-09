import {classNames} from "../../utils/classNames";
import {useEffect} from "react";

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


  return <div className={classNames(["d-flex flex-column flex-fill", className])}>
    {children}
  </div>
}