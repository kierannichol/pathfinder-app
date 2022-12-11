import CharacterRepository from "./model/CharacterRepository";
import DataHub from "./model/DataHub";

const PathfinderDatabase = new DataHub([

]);

const PathfinderCharacterRepository = new CharacterRepository(PathfinderDatabase);