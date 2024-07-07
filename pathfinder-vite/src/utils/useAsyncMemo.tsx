import {DependencyList, useEffect, useState} from "react";

export default function useAsyncMemo<T>(promiseFn: () => Promise<T|undefined>,
                                        deps?: DependencyList): [ result: T, isLoading: boolean, error: Error|undefined ];
export default function useAsyncMemo<T>(promiseFn: () => Promise<T>,
                                        deps: DependencyList,
                                        initialValue: T): [ result: T, isLoading: boolean, error: Error|undefined ];

/* eslint react-hooks/exhaustive-deps: "off" */
export default function useAsyncMemo<T>(
    promiseFn: () => Promise<T|undefined>,
    deps?: DependencyList,
    initialValue?: T): [ result: T|undefined, isLoading: boolean, error: Error|undefined ] {
  const [ result, setResult ] = useState<T|undefined>(initialValue);
  const [ isLoading, setLoading ] = useState<boolean>(true);
  const [ error, setError ] = useState<Error|undefined>();

  useEffect(() => {
    setLoading(true);
    let mounted = true;
    promiseFn().then(result => {
      if (mounted) {
        setResult(result);
        setError(undefined);
        setLoading(false);
      }
    }).catch(error => {
      console.error(error);
      if (mounted) {
        setError(error);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      setResult(undefined);
      setError(undefined);
      console.log("Setting loading to false");
      setLoading(false);
    }
  }, deps);
  return [ result, isLoading, error ];
}