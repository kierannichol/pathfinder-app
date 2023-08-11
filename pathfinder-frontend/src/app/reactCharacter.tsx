import {createContext, useContext, useEffect, useState} from "react";
import LoadingBlock from "../components/common/LoadingBlock";
import CharacterRepository from "../core/CharacterRepository";
import Database from "../v7/Database";
import {withGlobalPathfinderDatabaseV7} from "../v7/PathfinderDatabaseV7";

const CharacterRepositoryContext = createContext<CharacterRepository|undefined>(undefined);

let globalCharacterRepository: Promise<CharacterRepository> | undefined = undefined;

async function initializeCharacterRepository(): Promise<CharacterRepository> {
  const dbs = await withGlobalPathfinderDatabaseV7();
  return new CharacterRepository(dbs);
}

export function withGlobalCharacterRepository(): Promise<CharacterRepository> {
  if (globalCharacterRepository === undefined) {
    globalCharacterRepository = initializeCharacterRepository();
  }
  return globalCharacterRepository;
}

export function CharacterRepositoryContextProvider({ database, children }: { database: Database, children: any }) {
  const [ repository, setRepository ] = useState<CharacterRepository>();

  useEffect(() => {
    if (database) {
      setRepository(new CharacterRepository(database));
    }
  }, [database])

  // const repository = useMemo(() => {
  //   const repository = new CharacterRepository(pathfinderDatabase);
  //   repository.onCharacterListChanged(() => setModified({}))
  //   return repository
  //     },
  //     [pathfinderDatabase, modified]);

  if (!repository) {
    return <LoadingBlock />
  }

  return (
      <CharacterRepositoryContext.Provider value={repository}>
        {children}
      </CharacterRepositoryContext.Provider>
  );
}

export function useCharacterRepository(): CharacterRepository {
  const value = useContext(CharacterRepositoryContext);
  if (value === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return value;
}