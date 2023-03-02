import {createContext, useContext} from "react";
import {useAsyncMemo} from "../../app/reactHooks";
import {IDataHub, LoadingDataHub} from "../../core/DataHub";
import DataHubV4 from "../../v4/DataHubV4";
import Databases from "./databases";

let globalPathfinderDatabase: Promise<IDataHub> | undefined = undefined;

async function initializeGlobalPathfinderDatabase(): Promise<IDataHub> {
  const databases = await Promise.all(Databases);

  return new DataHubV4(...databases);
}

export function withGlobalPathfinderDatabase(): Promise<IDataHub> {
  if (globalPathfinderDatabase === undefined) {
    globalPathfinderDatabase = initializeGlobalPathfinderDatabase();
  }
  return globalPathfinderDatabase;
}

const PathfinderDatabaseContext = createContext<IDataHub|undefined>(undefined);

export function PathfinderDatabaseContextProvider({ children}: any) {

  const [ database ] = useAsyncMemo(() => withGlobalPathfinderDatabase(), []);

  return (
    <PathfinderDatabaseContext.Provider value={database ?? LoadingDataHub}>
      {children}
    </PathfinderDatabaseContext.Provider>
  );
}

export function usePathfinderDatabase(): IDataHub {
  const pathfinderDb = useContext(PathfinderDatabaseContext);
  if (pathfinderDb === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return pathfinderDb;
}