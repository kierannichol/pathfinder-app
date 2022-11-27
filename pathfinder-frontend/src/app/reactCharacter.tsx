import {createContext, useContext, useMemo, useState} from "react";
import {useCharacterClassDatabase, withGlobalCharacterClassDatabase} from "../database/v2/ClassDatabase";
import {useRaceDatabase, withGlobalRaceDatabase} from "../database/v2/RaceDatabase";
import CharacterRepository from "../model/character/CharacterRepository";

const CharacterRepositoryContext = createContext<CharacterRepository|undefined>(undefined);

let globalCharacterRepository: Promise<CharacterRepository> | undefined = undefined;

async function initializeCharacterRepository() {
  const dbs = await Promise.all([
      withGlobalCharacterClassDatabase(),
      withGlobalRaceDatabase()
  ]);
  return new CharacterRepository(dbs[0], dbs[1]);
}

export function withGlobalCharacterRepository() {
  if (globalCharacterRepository === undefined) {
    globalCharacterRepository = initializeCharacterRepository();
  }
  return globalCharacterRepository;
}

export function CharacterRepositoryContextProvider({ children }: any) {
  const [ modified, setModified ] = useState({})
  const classDatabase = useCharacterClassDatabase();
  const raceDatabase = useRaceDatabase();
  const repository = useMemo(() => {
    if (!classDatabase.isLoaded || !raceDatabase.isLoaded) {
      return undefined;
    }
    const repository = new CharacterRepository(classDatabase, raceDatabase);
    repository.onCharacterListChanged(() => setModified({}))
    return repository
      },
      [classDatabase, raceDatabase, modified]);

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