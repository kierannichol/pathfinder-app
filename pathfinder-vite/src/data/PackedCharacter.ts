export default interface PackedCharacter {
  id: string;
  selections: PackedSelections;
}

export class PackedSelections {
  [key: string]: string|string[];
}