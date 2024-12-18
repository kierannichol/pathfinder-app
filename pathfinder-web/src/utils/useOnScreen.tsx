import {RefObject, useEffect, useState} from "react";

export function useOnScreen(ref: RefObject<HTMLDivElement|undefined>, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (ref === undefined) {
      return;
    }
    let current: Element|undefined = undefined;
    const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
    );
    if (ref.current) {
      current = ref.current;
      observer.observe(current);
    }
    return () => {
      current && observer.unobserve(current);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
}