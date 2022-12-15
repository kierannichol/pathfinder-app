import {createContext, useContext, useMemo} from "react";
import {useAsyncMemo} from "../../app/reactHooks";
import DataHub from "../../v3/model/DataHub";
import Databases from "./databases";

let globalPathfinderDatabase: Promise<DataHub> | undefined = undefined;

async function initializeGlobalPathfinderDatabase(): Promise<DataHub> {
  const databases = await Promise.all(Databases);

  return new DataHub(databases);
}

export function withGlobalPathfinderDatabase(): Promise<DataHub> {
  if (globalPathfinderDatabase === undefined) {
    globalPathfinderDatabase = initializeGlobalPathfinderDatabase();
  }
  return globalPathfinderDatabase;
}

const PathfinderDatabaseContext = createContext<DataHub|undefined>(undefined);

export function PathfinderDatabaseContextProvider({ children}: any) {

  const empty = useMemo(() => new DataHub([]), []);
  const [ database ] = useAsyncMemo(() => withGlobalPathfinderDatabase(), []);

  return (
    <PathfinderDatabaseContext.Provider value={database ?? empty}>
      {children}
    </PathfinderDatabaseContext.Provider>
  );
}

export function usePathfinderDatabase(): DataHub {
  const pathfinderDb = useContext(PathfinderDatabaseContext);
  if (pathfinderDb === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return pathfinderDb;
}