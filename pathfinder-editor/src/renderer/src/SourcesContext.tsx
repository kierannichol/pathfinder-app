import {createContext, ReactNode, useContext} from "react";
import useAsyncMemo from "./utils/useAsyncMemo";
import {SourceRef, Sources} from "../../shared/sources";

export const SourcesContext = createContext<Sources|undefined>(undefined);

export function SourcesProvider({ children }: { children: ReactNode }) {
  const [ sources, isLoading ] = useAsyncMemo(async () => {
    const data = await window.api.load_sources();
    return new Sources(data.map(d => new SourceRef(d.name, d.code, d.aliases)));
  }, []);

  return <SourcesContext.Provider value={sources}>
    {children}
  </SourcesContext.Provider>
}

export function useSources(): Sources|undefined {
  return useContext(SourcesContext);
}