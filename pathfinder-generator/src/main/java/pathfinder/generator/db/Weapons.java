package pathfinder.generator.db;

import static pathfinder.generator.db.WeaponRange.MELEE;
import static pathfinder.generator.db.WeaponRange.RANGED;
import static pathfinder.generator.db.WeaponRange.REACH;

import java.util.List;
import java.util.Set;
import pathfinder.parser.db.WeaponType;

public class Weapons {

    public static final WeaponProficiency SIMPLE = WeaponProficiency.SIMPLE;
    public static final WeaponProficiency MARTIAL = WeaponProficiency.MARTIAL;
    public static final WeaponProficiency EXOTIC = WeaponProficiency.EXOTIC;

    public static final Set<WeaponProficiency> PROFICIENCIES = Set.of(SIMPLE, MARTIAL, EXOTIC);

    public static final WeaponType GAUNTLET = WeaponType.of("Gauntlet", SIMPLE, MELEE);
    public static final WeaponType UNARMED = WeaponType.of("Unarmed", SIMPLE, MELEE);
    public static final WeaponType BATTLE_ASPERGILLUM = WeaponType.of("Battle aspergillum", SIMPLE, MELEE);
    public static final WeaponType BRASS_KNIFE = WeaponType.of("Brass knife", SIMPLE, MELEE);
    public static final WeaponType BRASS_KNUCKLES = WeaponType.of("Brass knuckles", SIMPLE, MELEE);
    public static final WeaponType CESTUS = WeaponType.of("Cestus", SIMPLE, MELEE);
    public static final WeaponType DAGGER = WeaponType.of("Dagger", SIMPLE, MELEE);
    public static final WeaponType DAGGER_PUNCHING = WeaponType.of("Dagger, punching", SIMPLE, MELEE);
    public static final WeaponType GAUNTLET_SPIKED = WeaponType.of("Gauntlet, spiked", SIMPLE, MELEE);
    public static final WeaponType HANDWRAPS = WeaponType.of("Handwraps", SIMPLE, MELEE);
    public static final WeaponType TRAVELING_KETTLE = WeaponType.of("Traveling kettle", SIMPLE, MELEE);
    public static final WeaponType HOOK_HAND = WeaponType.of("Hook hand", SIMPLE, MELEE);
    public static final WeaponType KUNAI = WeaponType.of("Kunai", SIMPLE, MELEE);
    public static final WeaponType MACE_LIGHT = WeaponType.of("Mace, light", SIMPLE, MELEE);
    public static final WeaponType SICKLE = WeaponType.of("Sickle", SIMPLE, MELEE);
    public static final WeaponType SPRING_BLADE = WeaponType.of("Spring blade", SIMPLE, MELEE);
    public static final WeaponType WOODEN_STAKE = WeaponType.of("Wooden stake", SIMPLE, MELEE);
    public static final WeaponType CLUB = WeaponType.of("Club", SIMPLE, MELEE);
    public static final WeaponType CLUB_MERE = WeaponType.of("Club, mere", SIMPLE, MELEE);
    public static final WeaponType MACE_HEAVY = WeaponType.of("Mace, heavy", SIMPLE, MELEE);
    public static final WeaponType MORNINGSTAR = WeaponType.of("Morningstar", SIMPLE, MELEE);
    public static final WeaponType SHORTSPEAR = WeaponType.of("Shortspear", SIMPLE, MELEE);
    public static final WeaponType BAYONET = WeaponType.of("Bayonet", SIMPLE, MELEE);
    public static final WeaponType BOARDING_PIKE = WeaponType.of("Boarding pike", SIMPLE, MELEE);
    public static final WeaponType KUMADE = WeaponType.of("Kumade", SIMPLE, MELEE);
    public static final WeaponType KUMADE_COLLAPSIBLE = WeaponType.of("Kumade, collapsible", SIMPLE, MELEE);
    public static final WeaponType LANTERN_STAFF = WeaponType.of("Lantern staff", SIMPLE, MELEE);
    public static final WeaponType LONGSPEAR = WeaponType.of("Longspear", SIMPLE, MELEE);
    public static final WeaponType QUARTERSTAFF = WeaponType.of("Quarterstaff", SIMPLE, MELEE);
    public static final WeaponType SPEAR = WeaponType.of("Spear", SIMPLE, MELEE);
    public static final WeaponType BLOWGUN = WeaponType.of("Blowgun", SIMPLE, RANGED);
    public static final WeaponType CROSSBOW_HEAVY = WeaponType.of("Crossbow, heavy", SIMPLE, RANGED);
    public static final WeaponType CROSSBOW_LIGHT = WeaponType.of("Crossbow, light", SIMPLE, RANGED);
    public static final WeaponType DART = WeaponType.of("Dart", SIMPLE, RANGED);
    public static final WeaponType JAVELIN = WeaponType.of("Javelin", SIMPLE, RANGED);
    public static final WeaponType SLING = WeaponType.of("Sling", SIMPLE, RANGED);
    public static final WeaponType STINGCHUCK = WeaponType.of("Stingchuck", SIMPLE, RANGED);
    public static final WeaponType STONEBOW = WeaponType.of("Stonebow", SIMPLE, RANGED);
    public static final WeaponType AXE = WeaponType.of("Axe", MARTIAL, MELEE);
    public static final WeaponType AXE_THROWING = WeaponType.of("Axe, throwing", MARTIAL, MELEE);
    public static final WeaponType BLADE_BOOT = WeaponType.of("Blade boot", MARTIAL, MELEE);
    public static final WeaponType WHIP = WeaponType.of("Whip", MARTIAL, MELEE);
    public static final WeaponType CLAW_BLADES = WeaponType.of("Claw blades", MARTIAL, MELEE);
    public static final WeaponType DAGGER_DUELING = WeaponType.of("Dagger, dueling", MARTIAL, MELEE);
    public static final WeaponType DOGSLICER = WeaponType.of("Dogslicer", MARTIAL, MELEE);
    public static final WeaponType HAMMER_LIGHT = WeaponType.of("Hammer, light", MARTIAL, MELEE);
    public static final WeaponType GLADIUS = WeaponType.of("Gladius", MARTIAL, MELEE);
    public static final WeaponType HANDAXE = WeaponType.of("Handaxe", MARTIAL, MELEE);
    public static final WeaponType KATAR = WeaponType.of("Katar", MARTIAL, MELEE);
    public static final WeaponType KUKRI = WeaponType.of("Kukri", MARTIAL, MELEE);
    public static final WeaponType MACHETE = WeaponType.of("Machete", MARTIAL, MELEE);
    public static final WeaponType PICK_LIGHT = WeaponType.of("Pick, light", MARTIAL, MELEE);
    public static final WeaponType SAP = WeaponType.of("Sap", MARTIAL, MELEE);
    public static final WeaponType SHIELD_LIGHT = WeaponType.of("Shield, light", MARTIAL, MELEE);
    public static final WeaponType SPIKED_ARMOR = WeaponType.of("Spiked armor", MARTIAL, MELEE);
    public static final WeaponType SPIKED_SHIELD_LIGHT = WeaponType.of("Spiked shield, light", MARTIAL,
            MELEE);
    public static final WeaponType STARKNIFE = WeaponType.of("Starknife", MARTIAL, MELEE);
    public static final WeaponType SWORD_SHORT = WeaponType.of("Sword, short", MARTIAL, MELEE);
    public static final WeaponType WAR_RAZOR = WeaponType.of("War razor", MARTIAL, MELEE);
    public static final WeaponType ANKUS = WeaponType.of("Ankus", MARTIAL, MELEE);
    public static final WeaponType BATTLEAXE = WeaponType.of("Battleaxe", MARTIAL, MELEE);
    public static final WeaponType COMBAT_SCABBARD = WeaponType.of("Combat scabbard", MARTIAL, MELEE);
    public static final WeaponType CUTLASS = WeaponType.of("Cutlass", MARTIAL, MELEE);
    public static final WeaponType FLAIL_LIGHT = WeaponType.of("Flail, light", MARTIAL, MELEE);
    public static final WeaponType GANDASA = WeaponType.of("Gandasa", MARTIAL, MELEE);
    public static final WeaponType KLAR = WeaponType.of("Klar", MARTIAL, MELEE);
    public static final WeaponType LONGSWORD = WeaponType.of("Longsword", MARTIAL, MELEE);
    public static final WeaponType MANOPLE = WeaponType.of("Manople", MARTIAL, MELEE);
    public static final WeaponType PICK_HEAVY = WeaponType.of("Pick, heavy", MARTIAL, MELEE);
    public static final WeaponType RAPIER = WeaponType.of("Rapier", MARTIAL, MELEE);
    public static final WeaponType SCIMITAR = WeaponType.of("Scimitar", MARTIAL, MELEE);
    public static final WeaponType SCIZORE = WeaponType.of("Scizore", MARTIAL, MELEE);
    public static final WeaponType SHIELD_HEAVY = WeaponType.of("Shield, heavy", MARTIAL, MELEE);
    public static final WeaponType SPIKED_SHIELD_HEAVY = WeaponType.of("Spiked shield, heavy", MARTIAL,
            MELEE);
    public static final WeaponType SWORD_CANE = WeaponType.of("Sword cane", MARTIAL, MELEE);
    public static final WeaponType TERBUTJE = WeaponType.of("Terbutje", MARTIAL, MELEE);
    public static final WeaponType TRIDENT = WeaponType.of("Trident", MARTIAL, MELEE);
    public static final WeaponType WARHAMMER = WeaponType.of("Warhammer", MARTIAL, MELEE);
    public static final WeaponType BARDICHE = WeaponType.of("Bardiche", MARTIAL, REACH);
    public static final WeaponType BILL = WeaponType.of("Bill", MARTIAL, MELEE);
    public static final WeaponType EARTH_BREAKER = WeaponType.of("Earth breaker", MARTIAL, MELEE);
    public static final WeaponType FALCHION = WeaponType.of("Falchion", MARTIAL, MELEE);
    public static final WeaponType FLAIL_HEAVY = WeaponType.of("Flail, heavy", MARTIAL, MELEE);
    public static final WeaponType GLAIVE = WeaponType.of("Glaive", MARTIAL, REACH);
    public static final WeaponType GREATAXE = WeaponType.of("Greataxe", MARTIAL, MELEE);
    public static final WeaponType GREATCLUB = WeaponType.of("Greatclub", MARTIAL, MELEE);
    public static final WeaponType GREATSWORD = WeaponType.of("Greatsword", MARTIAL, MELEE);
    public static final WeaponType GUISARME = WeaponType.of("Guisarme", MARTIAL, MELEE);
    public static final WeaponType HALBERD = WeaponType.of("Halberd", MARTIAL, MELEE);
    public static final WeaponType HORSECHOPPER = WeaponType.of("Horsechopper", MARTIAL, MELEE);
    public static final WeaponType LANCE = WeaponType.of("Lance", MARTIAL, REACH);
    public static final WeaponType OGRE_HOOK = WeaponType.of("Ogre hook", MARTIAL, MELEE);
    public static final WeaponType PICKAXE = WeaponType.of("Pickaxe", MARTIAL, MELEE);
    public static final WeaponType PLANSON = WeaponType.of("Planson", MARTIAL, MELEE);
    public static final WeaponType RANSEUR = WeaponType.of("Ranseur", MARTIAL, MELEE);
    public static final WeaponType SCYTHE = WeaponType.of("Scythe", MARTIAL, MELEE);
    public static final WeaponType SPEAR_SYRINGE = WeaponType.of("Spear, syringe", MARTIAL, MELEE);
    public static final WeaponType AMMENTUM = WeaponType.of("Ammentum", MARTIAL, RANGED);
    public static final WeaponType CHAKRAM = WeaponType.of("Chakram", MARTIAL, RANGED);
    public static final WeaponType DART_JOLTING = WeaponType.of("Dart, jolting", MARTIAL, RANGED);
    public static final WeaponType HUNGA_MUNGA = WeaponType.of("Hunga munga", MARTIAL, RANGED);
    public static final WeaponType HURLBAT = WeaponType.of("Hurlbat", MARTIAL, RANGED);
    public static final WeaponType LONGBOW = WeaponType.of("Longbow", MARTIAL, RANGED);
    public static final WeaponType PILUM = WeaponType.of("Pilum", MARTIAL, RANGED);
    public static final WeaponType SHORTBOW = WeaponType.of("Shortbow", MARTIAL, RANGED);
    public static final WeaponType AKLYS = WeaponType.of("Aklys", EXOTIC, RANGED);
    public static final WeaponType AXE_KNUCKLE = WeaponType.of("Axe, knuckle", EXOTIC, MELEE);
    public static final WeaponType BARBAZU_BEARD = WeaponType.of("Barbazu beard", EXOTIC, MELEE);
    public static final WeaponType BATTLE_POI = WeaponType.of("Battle poi", EXOTIC, MELEE);
    public static final WeaponType DAGGER_SWORDBREAKER = WeaponType.of("Dagger, swordbreaker", EXOTIC,
            MELEE);
    public static final WeaponType FLYING_TALON = WeaponType.of("Flying Talon", EXOTIC, MELEE);
    public static final WeaponType GNOME_PINCHER = WeaponType.of("Gnome pincher", EXOTIC, MELEE);
    public static final WeaponType HALFLING_ROPE_SHOT = WeaponType.of("Halfling rope-shot", EXOTIC, MELEE);
    public static final WeaponType HELMET_DWARVEN_BOULDER = WeaponType.of("Helmet, dwarven boulder", EXOTIC,
            MELEE);
    public static final WeaponType KAMA = WeaponType.of("Kama", EXOTIC, MELEE);
    public static final WeaponType KNIFE_BUTTERFLY = WeaponType.of("Knife, butterfly", EXOTIC, MELEE);
    public static final WeaponType KNIFE_DEER_HORN = WeaponType.of("Knife, deer horn", EXOTIC, MELEE);
    public static final WeaponType MAULAXE_DWARVEN = WeaponType.of("Maulaxe, dwarven", EXOTIC, MELEE);
    public static final WeaponType NUNCHAKU = WeaponType.of("Nunchaku", EXOTIC, MELEE);
    public static final WeaponType QUADRENS = WeaponType.of("Quadrens", EXOTIC, MELEE);
    public static final WeaponType RAZOR_DROW = WeaponType.of("Razor, drow", EXOTIC, MELEE);
    public static final WeaponType ROPE_GAUNTLET = WeaponType.of("Rope gauntlet", EXOTIC, MELEE);
    public static final WeaponType SABRE_SAWTOOTH = WeaponType.of("Sabre, sawtooth", EXOTIC, MELEE);
    public static final WeaponType SAI = WeaponType.of("Sai", EXOTIC, MELEE);
    public static final WeaponType SANPKHANG = WeaponType.of("Sanpkhang", EXOTIC, MELEE);
    public static final WeaponType SIANGHAM = WeaponType.of("Siangham", EXOTIC, MELEE);
    public static final WeaponType SICA = WeaponType.of("Sica", EXOTIC, MELEE);
    public static final WeaponType THORN_BRACER = WeaponType.of("Thorn bracer", EXOTIC, MELEE);
    public static final WeaponType WAR_SHIELD_DWARVEN = WeaponType.of("War-shield, dwarven", EXOTIC, MELEE);
    public static final WeaponType WAVEBLADE = WeaponType.of("Waveblade", EXOTIC, MELEE);
    public static final WeaponType WHIP_SCORPION = WeaponType.of("Whip, scorpion", EXOTIC, MELEE);
    public static final WeaponType AXE_GAUNTLET_DWARVEN_HEAVY = WeaponType.of("Axe-Gauntlet, Dwarven Heavy", EXOTIC,
            MELEE);
    public static final WeaponType AXE_HOOKED = WeaponType.of("Axe, hooked", EXOTIC, MELEE);
    public static final WeaponType BROKEN_BACK_SEAX = WeaponType.of("Broken-back seax", EXOTIC, MELEE);
    public static final WeaponType ESTOC = WeaponType.of("Estoc", EXOTIC, MELEE);
    public static final WeaponType FALCATA = WeaponType.of("Falcata", EXOTIC, MELEE);
    public static final WeaponType FLICKMACE = WeaponType.of("Flickmace", EXOTIC, MELEE);
    public static final WeaponType FLINDBAR = WeaponType.of("Flindbar", EXOTIC, MELEE);
    public static final WeaponType KHOPESH = WeaponType.of("Khopesh", EXOTIC, MELEE);
    public static final WeaponType KNOBKERRIE = WeaponType.of("Knobkerrie", EXOTIC, MELEE);
    public static final WeaponType RAM_HAMMER_DWARVEN = WeaponType.of("Ram Hammer, Dwarven", EXOTIC, MELEE);
    public static final WeaponType RAPIER_SPIRAL = WeaponType.of("Rapier, spiral", EXOTIC, MELEE);
    public static final WeaponType RHOKA = WeaponType.of("Rhoka", EXOTIC, MELEE);
    public static final WeaponType SABRE_SAWTOOTHAG = WeaponType.of("Sabre, sawtooth", EXOTIC, MELEE);
    public static final WeaponType SHOTEL = WeaponType.of("Shotel", EXOTIC, MELEE);
    public static final WeaponType SICKLE_SWORD = WeaponType.of("Sickle-sword", EXOTIC, MELEE);
    public static final WeaponType SPLIT_BLADE_SWORD = WeaponType.of("Split-blade sword", EXOTIC, MELEE);
    public static final WeaponType SWORD_DUELING = WeaponType.of("Sword, dueling", EXOTIC, MELEE);
    public static final WeaponType SWORD_BASTARD = WeaponType.of("Sword, bastard", EXOTIC, MELEE);
    public static final WeaponType TONGI = WeaponType.of("Tongi", EXOTIC, MELEE);
    public static final WeaponType WARAXE_DWARVEN = WeaponType.of("Waraxe, dwarven", EXOTIC, MELEE);
    public static final WeaponType WARAXE_DWARVEN_DOUBLE = WeaponType.of("Waraxe, dwarven double", EXOTIC,
            MELEE);
    public static final WeaponType AXE_ORC_DOUBLE = WeaponType.of("Axe, Orc Double", EXOTIC, MELEE);
    public static final WeaponType AXE_BUTCHERING = WeaponType.of("Axe, Butchering", EXOTIC, MELEE);
    public static final WeaponType BATTLE_LADDER_GNOME = WeaponType.of("Battle Ladder, gnome", EXOTIC,
            MELEE);
    public static final WeaponType BOARDING_GAFF = WeaponType.of("Boarding gaff", EXOTIC, MELEE);
    public static final WeaponType CHAIN_HAMMER = WeaponType.of("Chain-hammer", EXOTIC, MELEE);
    public static final WeaponType CHAIN_SPIKED = WeaponType.of("Chain, spiked", EXOTIC, MELEE);
    public static final WeaponType CROOK = WeaponType.of("Crook", EXOTIC, MELEE);
    public static final WeaponType CURVE_BLADE_ELVEN = WeaponType.of("Curve blade, elven", EXOTIC, MELEE);
    public static final WeaponType DORN_DERGAR_DWARVEN = WeaponType.of("Dorn-Dergar, dwarven", EXOTIC,
            MELEE);
    public static final WeaponType DOUBLE_SPEAR = WeaponType.of("Double spear", EXOTIC, MELEE);
    public static final WeaponType ELVEN_BRANCHED_SPEAR = WeaponType.of("Elven branched spear", EXOTIC,
            MELEE);
    public static final WeaponType FAUCHARD = WeaponType.of("Fauchard", EXOTIC, MELEE);
    public static final WeaponType FLAIL_DIRE = WeaponType.of("Flail, dire", EXOTIC, MELEE);
    public static final WeaponType FLAILPOLE = WeaponType.of("Flailpole", EXOTIC, MELEE);
    public static final WeaponType FLAMBARD = WeaponType.of("Flambard", EXOTIC, MELEE);
    public static final WeaponType FLYING_BLADE = WeaponType.of("Flying blade", EXOTIC, MELEE);
    public static final WeaponType GARROTE = WeaponType.of("Garrote", EXOTIC, MELEE);
    public static final WeaponType GIANT_STICKER_DWARVEN = WeaponType.of("Giant-Sticker, Dwarven", EXOTIC,
            MELEE);
    public static final WeaponType HAMMER_GNOME_HOOKED = WeaponType.of("Hammer, Gnome hooked", EXOTIC,
            MELEE);
    public static final WeaponType HARPOON = WeaponType.of("Harpoon", EXOTIC, MELEE);
    public static final WeaponType LONGAXE_DWARVEN = WeaponType.of("Longaxe, dwarven", EXOTIC, MELEE);
    public static final WeaponType LONGHAMMER_DWARVEN = WeaponType.of("Longhammer, dwarven", EXOTIC, MELEE);
    public static final WeaponType MANCATCHER = WeaponType.of("Mancatcher", EXOTIC, MELEE);
    public static final WeaponType ORC_SKULL_RAM = WeaponType.of("Orc skull ram", EXOTIC, MELEE);
    public static final WeaponType PISTON_MAUL_GNOME = WeaponType.of("Piston maul, gnome", EXOTIC, MELEE);
    public static final WeaponType RIPSAW_GLAIVE_GNOME = WeaponType.of("Ripsaw glaive, gnome", EXOTIC,
            MELEE);
    public static final WeaponType SCARF_BLADED = WeaponType.of("Scarf, bladed", EXOTIC, MELEE);
    public static final WeaponType SPEAR_TOTEM = WeaponType.of("Spear, totem", EXOTIC, MELEE);
    public static final WeaponType SPHINX_HAMMER_DWARVEN = WeaponType.of("Sphinx Hammer, Dwarven", EXOTIC,
            MELEE);
    public static final WeaponType SWITCHSCYTHE = WeaponType.of("Switchscythe", EXOTIC, MELEE);
    public static final WeaponType SWORD_TWO_BLADED = WeaponType.of("Sword, two-bladed", EXOTIC, MELEE);
    public static final WeaponType URGROSH_DWARVEN = WeaponType.of("Urgrosh, dwarven", EXOTIC, MELEE);
    public static final WeaponType BOLA = WeaponType.of("Bola", EXOTIC, RANGED);
    public static final WeaponType BOLA_BRUTAL = WeaponType.of("Bola, Brutal", EXOTIC, RANGED);
    public static final WeaponType BOOMERANG = WeaponType.of("Boomerang", EXOTIC, RANGED);
    public static final WeaponType BOW_THORN = WeaponType.of("Bow, thorn", EXOTIC, RANGED);
    public static final WeaponType CROSSBOW_CRANK_HEAVY = WeaponType.of("Crossbow, crank (heavy)", EXOTIC,
            RANGED);
    public static final WeaponType CROSSBOW_CRANK_LIGHT = WeaponType.of("Crossbow, crank (light)", EXOTIC,
            RANGED);
    public static final WeaponType CROSSBOW_DOUBLE = WeaponType.of("Crossbow, double", EXOTIC, RANGED);
    public static final WeaponType CROSSBOW_HAND = WeaponType.of("Crossbow, hand", EXOTIC, RANGED);
    public static final WeaponType CROSSBOW_LAUNCHING = WeaponType.of("Crossbow, launching", EXOTIC, RANGED);
    public static final WeaponType CROSSBOW_REPEATING_HEAVY = WeaponType.of("Crossbow, repeating heavy", EXOTIC,
            RANGED);
    public static final WeaponType CROSSBOW_REPEATING_LIGHT = WeaponType.of("Crossbow, repeating light", EXOTIC,
            RANGED);
    public static final WeaponType FLASK_THROWER = WeaponType.of("Flask Thrower", EXOTIC, RANGED);
    public static final WeaponType GRAPPLING_HOOK = WeaponType.of("Grappling hook", EXOTIC, RANGED);
    public static final WeaponType HORNBOW_ORC = WeaponType.of("Hornbow, orc", EXOTIC, RANGED);
    public static final WeaponType JAVELIN_STORMSHAFT = WeaponType.of("Javelin, stormshaft", EXOTIC, RANGED);
    public static final WeaponType LASSO = WeaponType.of("Lasso", EXOTIC, RANGED);
    public static final WeaponType NET = WeaponType.of("Net", EXOTIC, RANGED);
    public static final WeaponType NET_SNAG = WeaponType.of("Net, snag", EXOTIC, RANGED);
    public static final WeaponType PELLETBOW_DWARVEN_HEAVY = WeaponType.of("Pelletbow, Dwarven Heavy", EXOTIC,
            RANGED);
    public static final WeaponType PELLETBOW_DWARVEN_LIGHT = WeaponType.of("Pelletbow, Dwarven Light", EXOTIC,
            RANGED);
    public static final WeaponType SHIELD_THROWING = WeaponType.of("Shield, throwing", EXOTIC, RANGED);
    public static final WeaponType SHRILLSHAFT_JAVELIN = WeaponType.of("Shrillshaft javelin", EXOTIC, RANGED);
    public static final WeaponType SHURIKEN = WeaponType.of("Shuriken (5)", EXOTIC, RANGED);
    public static final WeaponType SLING_DOUBLE = WeaponType.of("Sling, double", EXOTIC, RANGED);
    public static final WeaponType SLING_GLOVE = WeaponType.of("Sling glove", EXOTIC, RANGED);
    public static final WeaponType SLING_STAFF_HALFLING = WeaponType.of("Sling staff, halfling", EXOTIC,
            RANGED);
    public static final WeaponType SLING_STITCHED = WeaponType.of("Sling, stitched", EXOTIC, RANGED);
    public static final WeaponType WRIST_LAUNCHER = WeaponType.of("Wrist launcher", EXOTIC, RANGED);
    public static final WeaponType WRIST_LAUNCHER_HEAVY = WeaponType.of("Wrist launcher, heavy", EXOTIC,
            RANGED);

    public static final List<WeaponType> WEAPON_TYPES = List.of(
            GAUNTLET,
            UNARMED,
            BATTLE_ASPERGILLUM,
            BRASS_KNIFE,
            BRASS_KNUCKLES,
            CESTUS,
            DAGGER,
            DAGGER_PUNCHING,
            GAUNTLET_SPIKED,
            HANDWRAPS,
            TRAVELING_KETTLE,
            HOOK_HAND,
            KUNAI,
            MACE_LIGHT,
            SICKLE,
            SPRING_BLADE,
            WOODEN_STAKE,
            CLUB,
            CLUB_MERE,
            MACE_HEAVY,
            MORNINGSTAR,
            SHORTSPEAR,
            BAYONET,
            BOARDING_PIKE,
            KUMADE,
            KUMADE_COLLAPSIBLE,
            LANTERN_STAFF,
            LONGSPEAR,
            QUARTERSTAFF,
            SPEAR,
            BLOWGUN,
            CROSSBOW_HEAVY,
            CROSSBOW_LIGHT,
            DART,
            JAVELIN,
            SLING,
            STINGCHUCK,
            STONEBOW,
            AXE,
            AXE_THROWING,
            BLADE_BOOT,
            WHIP,
            CLAW_BLADES,
            DAGGER_DUELING,
            DOGSLICER,
            HAMMER_LIGHT,
            GLADIUS,
            HANDAXE,
            KATAR,
            KUKRI,
            MACHETE,
            PICK_LIGHT,
            SAP,
            SHIELD_LIGHT,
            SPIKED_ARMOR,
            SPIKED_SHIELD_LIGHT,
            STARKNIFE,
            SWORD_SHORT,
            WAR_RAZOR,
            ANKUS,
            BATTLEAXE,
            COMBAT_SCABBARD,
            CUTLASS,
            FLAIL_LIGHT,
            GANDASA,
            KLAR,
            LONGSWORD,
            MANOPLE,
            PICK_HEAVY,
            RAPIER,
            SCIMITAR,
            SCIZORE,
            SHIELD_HEAVY,
            SPIKED_SHIELD_HEAVY,
            SWORD_CANE,
            TERBUTJE,
            TRIDENT,
            WARHAMMER,
            BARDICHE,
            BILL,
            EARTH_BREAKER,
            FALCHION,
            FLAIL_HEAVY,
            GLAIVE,
            GREATAXE,
            GREATCLUB,
            GREATSWORD,
            GUISARME,
            HALBERD,
            HORSECHOPPER,
            LANCE,
            OGRE_HOOK,
            PICKAXE,
            PLANSON,
            RANSEUR,
            SCYTHE,
            SPEAR_SYRINGE,
            AMMENTUM,
            CHAKRAM,
            DART_JOLTING,
            HUNGA_MUNGA,
            HURLBAT,
            LONGBOW,
            PILUM,
            SHORTBOW,
            AKLYS,
            AXE_KNUCKLE,
            BARBAZU_BEARD,
            BATTLE_POI,
            DAGGER_SWORDBREAKER,
            FLYING_TALON,
            GNOME_PINCHER,
            HALFLING_ROPE_SHOT,
            HELMET_DWARVEN_BOULDER,
            KAMA,
            KNIFE_BUTTERFLY,
            KNIFE_DEER_HORN,
            MAULAXE_DWARVEN,
            NUNCHAKU,
            QUADRENS,
            RAZOR_DROW,
            ROPE_GAUNTLET,
            SABRE_SAWTOOTH,
            SAI,
            SANPKHANG,
            SIANGHAM,
            SICA,
            THORN_BRACER,
            WAR_SHIELD_DWARVEN,
            WAVEBLADE,
            WHIP_SCORPION,
            AXE_GAUNTLET_DWARVEN_HEAVY,
            AXE_HOOKED,
            BROKEN_BACK_SEAX,
            ESTOC,
            FALCATA,
            FLICKMACE,
            FLINDBAR,
            KHOPESH,
            KNOBKERRIE,
            RAM_HAMMER_DWARVEN,
            RAPIER_SPIRAL,
            RHOKA,
            SABRE_SAWTOOTHAG,
            SHOTEL,
            SICKLE_SWORD,
            SPLIT_BLADE_SWORD,
            SWORD_DUELING,
            SWORD_BASTARD,
            TONGI,
            WARAXE_DWARVEN,
            WARAXE_DWARVEN_DOUBLE,
            AXE_ORC_DOUBLE,
            AXE_BUTCHERING,
            BATTLE_LADDER_GNOME,
            BOARDING_GAFF,
            CHAIN_HAMMER,
            CHAIN_SPIKED,
            CROOK,
            CURVE_BLADE_ELVEN,
            DORN_DERGAR_DWARVEN,
            DOUBLE_SPEAR,
            ELVEN_BRANCHED_SPEAR,
            FAUCHARD,
            FLAIL_DIRE,
            FLAILPOLE,
            FLAMBARD,
            FLYING_BLADE,
            GARROTE,
            GIANT_STICKER_DWARVEN,
            HAMMER_GNOME_HOOKED,
            HARPOON,
            LONGAXE_DWARVEN,
            LONGHAMMER_DWARVEN,
            MANCATCHER,
            ORC_SKULL_RAM,
            PISTON_MAUL_GNOME,
            RIPSAW_GLAIVE_GNOME,
            SCARF_BLADED,
            SPEAR_TOTEM,
            SPHINX_HAMMER_DWARVEN,
            SWITCHSCYTHE,
            SWORD_TWO_BLADED,
            URGROSH_DWARVEN,
            BOLA,
            BOLA_BRUTAL,
            BOOMERANG,
            BOW_THORN,
            CROSSBOW_CRANK_HEAVY,
            CROSSBOW_CRANK_LIGHT,
            CROSSBOW_DOUBLE,
            CROSSBOW_HAND,
            CROSSBOW_LAUNCHING,
            CROSSBOW_REPEATING_HEAVY,
            CROSSBOW_REPEATING_LIGHT,
            FLASK_THROWER,
            GRAPPLING_HOOK,
            HORNBOW_ORC,
            JAVELIN_STORMSHAFT,
            LASSO,
            NET,
            NET_SNAG,
            PELLETBOW_DWARVEN_HEAVY,
            PELLETBOW_DWARVEN_LIGHT,
            SHIELD_THROWING,
            SHRILLSHAFT_JAVELIN,
            SHURIKEN,
            SLING_DOUBLE,
            SLING_GLOVE,
            SLING_STAFF_HALFLING,
            SLING_STITCHED,
            WRIST_LAUNCHER,
            WRIST_LAUNCHER_HEAVY);
}
