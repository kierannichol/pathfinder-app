import {Weapon, WeaponType} from "../model/character/WeaponType";

const Weapons = {

  find: (id: string): WeaponType|undefined => {
    return Weapons.all.find(weapon => weapon.id === id);
  },

  all: [
    new WeaponType("Gauntlet", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Unarmed", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Battle aspergillum", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Brass knife", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Brass knuckles", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Cestus", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Dagger", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Dagger, punching", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Gauntlet, spiked", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Handwraps", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Traveling kettle", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Hook hand", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Kunai", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Mace, light", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Sickle", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Spring blade", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Wooden stake", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Club", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Club, mere", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Mace, heavy", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Morningstar", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Shortspear", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Bayonet", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Boarding pike", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Kumade", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Kumade, collapsible", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Lantern staff", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Longspear", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Quarterstaff", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Spear", Weapon.Proficiency.Simple, Weapon.Range.Melee),
    new WeaponType("Blowgun", Weapon.Proficiency.Simple, Weapon.Range.Ranged),
    new WeaponType("Crossbow, heavy", Weapon.Proficiency.Simple, Weapon.Range.Ranged),
    new WeaponType("Crossbow, light", Weapon.Proficiency.Simple, Weapon.Range.Ranged),
    new WeaponType("Dart", Weapon.Proficiency.Simple, Weapon.Range.Ranged),
    new WeaponType("Javelin", Weapon.Proficiency.Simple, Weapon.Range.Ranged),
    new WeaponType("Sling", Weapon.Proficiency.Simple, Weapon.Range.Ranged),
    new WeaponType("Stingchuck", Weapon.Proficiency.Simple, Weapon.Range.Ranged),
    new WeaponType("Stonebow", Weapon.Proficiency.Simple, Weapon.Range.Ranged),
    new WeaponType("Axe", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Axe, throwing", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Blade boot", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Whip", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Claw blades", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Dagger, dueling", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Dogslicer", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Hammer, light", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Gladius", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Handaxe", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Katar", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Kukri", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Machete", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Pick, light", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Sap", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Shield, light", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Spiked armor", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Spiked shield, light", Weapon.Proficiency.Martial,
        Weapon.Range.Melee),
    new WeaponType("Starknife", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Sword, short", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("War razor", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Ankus", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Battleaxe", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Combat scabbard", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Cutlass", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Flail, light", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Gandasa", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Klar", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Longsword", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Manople", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Pick, heavy", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Rapier", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Scimitar", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Scizore", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Shield, heavy", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Spiked shield, heavy", Weapon.Proficiency.Martial,
        Weapon.Range.Melee),
    new WeaponType("Sword cane", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Terbutje", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Trident", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Warhammer", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Bardiche", Weapon.Proficiency.Martial, Weapon.Range.Reach),
    new WeaponType("Bill", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Earth breaker", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Falchion", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Flail, heavy", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Glaive", Weapon.Proficiency.Martial, Weapon.Range.Reach),
    new WeaponType("Greataxe", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Greatclub", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Greatsword", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Guisarme", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Halberd", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Horsechopper", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Lance", Weapon.Proficiency.Martial, Weapon.Range.Reach),
    new WeaponType("Ogre hook", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Pickaxe", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Planson", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Ranseur", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Scythe", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Spear, syringe", Weapon.Proficiency.Martial, Weapon.Range.Melee),
    new WeaponType("Ammentum", Weapon.Proficiency.Martial, Weapon.Range.Ranged),
    new WeaponType("Chakram", Weapon.Proficiency.Martial, Weapon.Range.Ranged),
    new WeaponType("Dart, jolting", Weapon.Proficiency.Martial, Weapon.Range.Ranged),
    new WeaponType("Hunga munga", Weapon.Proficiency.Martial, Weapon.Range.Ranged),
    new WeaponType("Hurlbat", Weapon.Proficiency.Martial, Weapon.Range.Ranged),
    new WeaponType("Longbow", Weapon.Proficiency.Martial, Weapon.Range.Ranged),
    new WeaponType("Pilum", Weapon.Proficiency.Martial, Weapon.Range.Ranged),
    new WeaponType("Shortbow", Weapon.Proficiency.Martial, Weapon.Range.Ranged),
    new WeaponType("Aklys", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Axe, knuckle", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Barbazu beard", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Battle poi", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Dagger, swordbreaker", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Flying Talon", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Gnome pincher", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Halfling rope-shot", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Helmet, dwarven boulder", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Kama", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Knife, butterfly", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Knife, deer horn", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Maulaxe, dwarven", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Nunchaku", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Quadrens", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Razor, drow", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Rope gauntlet", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Sabre, sawtooth", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Sai", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Sanpkhang", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Siangham", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Sica", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Thorn bracer", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("War-shield, dwarven", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Waveblade", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Whip, scorpion", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Axe-Gauntlet, Dwarven Heavy", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Axe, hooked", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Broken-back seax", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Estoc", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Falcata", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Flickmace", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Flindbar", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Khopesh", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Knobkerrie", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Ram Hammer, Dwarven", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Rapier, spiral", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Rhoka", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Shotel", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Sickle-sword", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Split-blade sword", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Sword, dueling", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Sword, bastard", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Tongi", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Waraxe, dwarven", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Waraxe, dwarven double", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Axe, Orc Double", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Axe, Butchering", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Battle Ladder, gnome", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Boarding gaff", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Chain-hammer", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Chain, spiked", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Crook", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Curve blade, elven", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Dorn-Dergar, dwarven", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Double spear", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Elven branched spear", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Fauchard", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Flail, dire", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Flailpole", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Flambard", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Flying blade", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Garrote", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Giant-Sticker, Dwarven", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Hammer, Gnome hooked", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Harpoon", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Longaxe, dwarven", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Longhammer, dwarven", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Mancatcher", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Orc skull ram", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Piston maul, gnome", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Ripsaw glaive, gnome", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Scarf, bladed", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Spear, totem", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Sphinx Hammer, Dwarven", Weapon.Proficiency.Exotic,
        Weapon.Range.Melee),
    new WeaponType("Switchscythe", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Sword, two-bladed", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Urgrosh, dwarven", Weapon.Proficiency.Exotic, Weapon.Range.Melee),
    new WeaponType("Bola", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Bola, Brutal", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Boomerang", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Bow, thorn", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Crossbow, crank (heavy)", Weapon.Proficiency.Exotic,
        Weapon.Range.Ranged),
    new WeaponType("Crossbow, crank (light)", Weapon.Proficiency.Exotic,
        Weapon.Range.Ranged),
    new WeaponType("Crossbow, double", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Crossbow, hand", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Crossbow, launching", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Crossbow, repeating heavy", Weapon.Proficiency.Exotic,
        Weapon.Range.Ranged),
    new WeaponType("Crossbow, repeating light", Weapon.Proficiency.Exotic,
        Weapon.Range.Ranged),
    new WeaponType("Flask Thrower", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Grappling hook", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Hornbow, orc", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Javelin, stormshaft", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Lasso", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Net", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Net, snag", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Pelletbow, Dwarven Heavy", Weapon.Proficiency.Exotic,
        Weapon.Range.Ranged),
    new WeaponType("Pelletbow, Dwarven Light", Weapon.Proficiency.Exotic,
        Weapon.Range.Ranged),
    new WeaponType("Shield, throwing", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Shrillshaft javelin", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Shuriken (5)", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Sling, double", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Sling glove", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Sling staff, halfling", Weapon.Proficiency.Exotic,
        Weapon.Range.Ranged),
    new WeaponType("Sling, stitched", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Wrist launcher", Weapon.Proficiency.Exotic, Weapon.Range.Ranged),
    new WeaponType("Wrist launcher, heavy", Weapon.Proficiency.Exotic,
        Weapon.Range.Ranged),
  ]
}

export default Weapons;