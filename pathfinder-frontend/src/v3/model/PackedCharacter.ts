export default interface PackedCharacter {
  id: string;
  choices: PackedChoices;
}

export class PackedChoices {
  [key: string]: string;
}