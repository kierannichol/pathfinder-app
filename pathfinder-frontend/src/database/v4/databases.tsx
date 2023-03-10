import EntityDatabase from "../../v4/EntityDatabase";
import AbilityScoreDatabase from "./AbilityScoreDatabase";
import AlignmentDatabase from "./AlignmentDatabase";
import BaseStatDatabase from "./BaseStatDatabase";
import {loadDatabaseV5} from "./loader";
import ProficiencyDatabase from "./ProficiencyDatabase";
import SkillDatabase from "./SkillDatabase";

const databasesV4: (Promise<EntityDatabase>|EntityDatabase)[] = [
    loadDatabaseV5("PZO1110"),
    loadDatabaseV5("PZO1114"),
    loadDatabaseV5("PZO1115"),
    loadDatabaseV5("PZO1117"),
    loadDatabaseV5("PZO1118"),
    loadDatabaseV5("PZO1121"),
    loadDatabaseV5("PZO1123"),
    loadDatabaseV5("PZO1129"),
    loadDatabaseV5("PZO1131"),
    // loadDatabase("FeatDatabase", "feat"),
    // loadDatabase("RaceDatabase", "race"),
    // loadDatabase("ClassDatabase", "class"),
    // loadDatabase("FavoredClassDatabase", "favored_class"),
    // loadDatabase("ClassFeatureDatabase", "class_feature"),
    // loadDatabase("ArchetypeDatabase", "archetype"),
    // loadDatabase("ArchetypeFeatureDatabase", "archetype_feature"),
    // loadDatabase("RagePowerDatabase", "rage_power"),
    // loadDatabase("BloodragerBloodlineDatabase", "bloodrager_bloodline"),
    // loadDatabase("BloodragerBloodlineFeatureDatabase", "bloodrager_bloodline_feature"),
    AlignmentDatabase,
    SkillDatabase,
    BaseStatDatabase,
    AbilityScoreDatabase,
    ProficiencyDatabase
]

export default databasesV4;