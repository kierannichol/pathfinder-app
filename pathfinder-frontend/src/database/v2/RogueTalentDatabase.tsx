import {createAbilityDatabaseSource} from "./BaseAbilityDatabase";
import {usePathfinderDatabase} from "./PathfinderDatabase";

const RogueTalentDatabase = createAbilityDatabaseSource("RogueTalentDatabase", "roguetalent");

export function useRogueTalentDatabase() {
  return usePathfinderDatabase().rogueTalentDatabase;
}

export default RogueTalentDatabase;