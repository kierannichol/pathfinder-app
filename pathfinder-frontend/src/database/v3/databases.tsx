import ModificationDatabase from "../../v3/model/ModificationDatabase";
import AbilityScoreDatabase from "./AbilityScoreDatabase";
import AlignmentDatabase from "./AlignmentDatabase";
import {loadDatabase} from "./loader";
import SkillDatabase from "./SkillDatabase";

const databases: Promise<ModificationDatabase>[] = [
    loadDatabase("ClassDatabase", "class"),
    loadDatabase("RaceDatabase", "race"),
    loadDatabase("FeatDatabase", "feat"),
    loadDatabase("RagePowerDatabase", "rage_power"),
    loadDatabase("RogueTalentDatabase", "rogue_talent"),
    loadDatabase("AlchemistDiscoveryDatabase", "alchemist_discovery"),
    loadDatabase("MagusArcanaDatabase", "magusarcana"),
    loadDatabase("SorcererBloodlineDatabase", "sorcerer_bloodline"),
    new Promise(resolved => resolved(AlignmentDatabase)),
    new Promise(resolved => resolved(AbilityScoreDatabase)),
    new Promise(resolved => resolved(SkillDatabase)),
]

export default databases;