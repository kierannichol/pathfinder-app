import {DependencyList, RefObject, useEffect, useState} from "react";

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

/* eslint react-hooks/exhaustive-deps: "off" */
export function useAsyncMemo<T>(promiseFn: () => Promise<T|undefined>, deps?: DependencyList): [ result: T|undefined, error: Error|undefined ] {
  const [ result, setResult ] = useState<T|undefined>();
  const [ error, setError ] = useState<Error|undefined>();

  useEffect(() => {
    let mounted = true;
    promiseFn().then(result => {
      if (mounted) {
        setResult(result);
      }
    }).catch(error => {
      console.error(error);
      if (mounted) {
        setError(error);
      }
    });

    return () => {
      mounted = false;
    }
  }, deps);
  return [ result, error ];
}

export function scrollToElement(elementRef: RefObject<HTMLDivElement>) {
  elementRef.current?.scrollIntoView({
    block: "start",
    inline: "nearest"
  });
}