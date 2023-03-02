import EntityDatabase from "../../v4/EntityDatabase";
import AbilityScoreDatabase from "./AbilityScoreDatabase";
import AlignmentDatabase from "./AlignmentDatabase";
import BaseStatDatabase from "./BaseStatDatabase";
import {loadDatabase} from "./loader";
import ProficiencyDatabase from "./ProficiencyDatabase";
import SkillDatabase from "./SkillDatabase";

const databasesV4: (Promise<EntityDatabase>|EntityDatabase)[] = [
    loadDatabase("FeatDatabase", "feat"),
    loadDatabase("RaceDatabase", "race"),
    loadDatabase("ClassDatabase", "class"),
    loadDatabase("FavoredClassDatabase", "favored_class"),
    loadDatabase("ClassFeatureDatabase", "class_feature"),
    loadDatabase("ArchetypeDatabase", "archetype"),
    loadDatabase("ArchetypeFeatureDatabase", "archetype_feature"),
    loadDatabase("RagePowerDatabase", "rage_power"),
    AlignmentDatabase,
    SkillDatabase,
    BaseStatDatabase,
    AbilityScoreDatabase,
    ProficiencyDatabase
]

export default databasesV4;