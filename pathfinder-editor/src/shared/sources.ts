
const SourceKeyLookupMap = {
  "PZO1110": "PZO1110",
  "Core Rulebook": "PZO1110",
  "PFRPG Core": "PZO1110",
  "PRPG Core Rulebook": "PZO1110",
  "Pathfinder RPG Core Rulebook": "PZO1110",

  "PZO1115": "PZO1115",
  "Advanced Player's Guide": "PZO1115",
  "APG": "PZO1115",
  "Pathfinder Roleplaying Game: Advanced Player's Guide": "PZO1115",

  "PZO1129": "PZO1129",
  "Advanced Class Guide": "PZO1129",
  "ACG": "PZO1129",
  "Pathfinder Roleplaying Game: Advanced Class Guide": "PZO1129",

  "PZO1121": "PZO1121",
  "Advanced Race Guide": "PZO1121",
  "ARG": "PZO1121",
  "Pathfinder Roleplaying Game: Advanced Race Guide": "PZO1121",

  "PZO1138": "PZO1138",
  "Adventurer's Guide": "PZO1138",
  "Pathfinder Roleplaying Game: Adventurer's Guide": "PZO1138",

  "PZO1114": "PZO1114",
  "GameMastery Guide": "PZO1114",

  "PZO1131": "PZO1131",
  "Pathfinder Unchained": "PZO1131",

  "PZO1118": "PZO1118",
  "Ultimate Combat": "PZO1118",
  "Pathfinder Roleplaying Game: Ultimate Combat": "PZO1118",

  "PZO1123": "PZO1123",
  "Ultimate Equipment": "PZO1123",
  "Pathfinder Roleplaying Game: Ultimate Equipment": "PZO1123",

  "PZO1117": "PZO1117",
  "Ultimate Magic": "PZO1117",
  "Pathfinder Roleplaying Game: Ultimate Magic": "PZO1117",
  "PRG:UM": "PZO1117",

  "PZO9476": "PZO9476",
  "Pathfinder Player Companion: Heroes of the High Court": "PZO9476",

  "PZO1112": "PZO1112",
  "Bestiary": "PZO1112",
  "Pathfinder RPG Bestiary": "PZO1112",
  "PZO1116": "PZO1116",
  "Bestiary 2": "PZO1116",
  "PZO1120": "PZO1120",
  "Bestiary 3": "PZO1120",
  "PZO1127": "PZO1127",
  "Bestiary 4": "PZO1127",
  "PZO1133": "PZO1133",
  "Bestiary 5": "PZO1133",
  "PZO1137": "PZO1137",
  "Bestiary 6": "PZO1137",
  "PZO1128": "PZO1128",
  "Strategy Guide": "PZO1128",
};

const SourceNameLookupMap = {
  "PZO1110": "Core Rulebook",
  "PZO1115": "Advanced Player's Guide",
  "PZO1129": "Advanced Class Guide",
  "PZO1121": "Advanced Race Guide",
  "PZO1138": "Adventurer's Guide",
  "PZO1114": "GameMastery Guide",
  "PZO1131": "Pathfinder Unchained",
  "PZO1118": "Ultimate Combat",
  "PZO1123": "Ultimate Equipment",
  "PZO1117": "Ultimate Magic",
  "PZO9476": "Pathfinder Player Companion: Heroes of the High Court",
  "PZO1112": "Bestiary 1",
  "PZO1116": "Bestiary 2",
  "PZO1120": "Bestiary 3",
  "PZO1127": "Bestiary 4",
  "PZO1133": "Bestiary 5",
  "PZO1137": "Bestiary 6",
  "PZO1128": "Strategy Guide",
};

export const Sources = {
  lookupKey(keyOrName: string): string {
    return SourceKeyLookupMap[keyOrName];
  },

  lookupName(keyOrName: string): string {
    const key = Sources.lookupKey(keyOrName);
    return SourceNameLookupMap[key];
  }
}