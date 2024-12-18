import Database, { ItemDatabase } from "./Database.ts";
import { CharacterTemplate } from "./CharacterTemplate.ts";
export declare function loadBaseCharacterTemplate(): Promise<CharacterTemplate>;
export declare function initializePathfinderDatabase(): Promise<Database>;
export declare function initializePathfinderItemDatabase(): Promise<ItemDatabase>;
