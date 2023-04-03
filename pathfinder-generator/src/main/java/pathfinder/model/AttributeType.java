package pathfinder.model;

import lombok.Getter;

public enum AttributeType {
    NONE(""),
    FEAT("feat"),
    ABILITY("ability"),
    CLASS("class"),
    RACE("race"),
    PROFICIENCY("proficiency"),
    SKILL("skill"),
    WEAPON("weapon"),
    RAGE_POWER("rage_power"),
    ROGUE_TALENT("rogue_talent"),
    MAGUS_ARCANA("magus_arcana"),
    ALCHEMIST_DISCOVERY("discovery"),
    BARDIC_MASTERPIECE("masterpiece"),
    GUNSLINGER_DEED("deed"),
    ORACLE_MYSTERY("mystery"),
    ORACLE_CURSE("curse"),
    VIGILANTE_SOCIAL_TALENT("vigilante_social_talent"),
    VIGILANTE_TALENT("vigilante_talent"),
    WITCH_HEX("witch_hex"),
    ARCANIST_EXPLOIT("arcanist_exploit"),
    INVESTIGATOR_TALENT("investigator_talent"),
    SHAMAN_HEX("shaman_hex"),
    SLAYER_TALENT("slayer_talent"),
    SWASHBUCKLER_DEED("swashbuckler_deed"),
    WARPRIEST_BLESSINGS("warpriest_blessing"),
    UNCHAINED_RAGE_POWER("unchained_rage_power"),
    UNCHAINED_KI_POWER("unchained_ki_power"),
    UNCHAINED_ROGUE_TALENT("unchained_rogue_talent"),
    SORCERER_BLOODLINE("sorcerer_bloodline"),
    BLOODRAGER_BLOODLINE("bloodrager_bloodline"),

    SPELL("spell"),
    ;

    @Getter private final String key;

    AttributeType(String label) {
        this.key = label;
    }
}
