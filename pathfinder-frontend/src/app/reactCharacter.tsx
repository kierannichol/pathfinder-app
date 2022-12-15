import {createContext, useContext, useMemo, useState} from "react";
import {usePathfinderDatabase, withGlobalPathfinderDatabase} from "../database/v3/PathfinderDatabase";
import CharacterRepository from "../v3/model/CharacterRepository";

const CharacterRepositoryContext = createContext<CharacterRepository|undefined>(undefined);

let globalCharacterRepository: Promise<CharacterRepository> | undefined = undefined;

async function initializeCharacterRepository() {
  const dbs = await withGlobalPathfinderDatabase();
  return new CharacterRepository(dbs);
}

export function withGlobalCharacterRepository() {
  if (globalCharacterRepository === undefined) {
    globalCharacterRepository = initializeCharacterRepository();
  }
  return globalCharacterRepository;
}

export function CharacterRepositoryContextProvider({ children }: any) {
  const [ modified, setModified ] = useState({})
  const pathfinderDatabase = usePathfinderDatabase();
  const repository = useMemo(() => {
    const repository = new CharacterRepository(pathfinderDatabase);
    repository.onCharacterListChanged(() => setModified({}))
    return repository
      },
      [pathfinderDatabase, modified]);

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