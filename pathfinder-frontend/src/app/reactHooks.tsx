import {DependencyList, RefObject, useEffect, useState} from "react";

export function useOnScreen(ref: RefObject<HTMLDivElement|undefined>, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (ref === undefined) {
      return;
    }
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
      observer.observe(ref.current);
    }
    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, [ref]);
  return isIntersecting;
}

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