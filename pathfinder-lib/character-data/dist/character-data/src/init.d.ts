import CharacterStore from "./CharacterStore.ts";
import Database, { ItemDatabase } from "./Database.ts";
import { EquipmentSetStore } from "./EquipmentSetStore.ts";
export declare function withGlobalCharacterStore(): Promise<CharacterStore>;
export declare function withGlobalEquipmentSetStore(): Promise<EquipmentSetStore>;
export declare function withGlobalDatabase(): Promise<Database>;
export declare function withGlobalItemDatabase(): Promise<ItemDatabase>;
