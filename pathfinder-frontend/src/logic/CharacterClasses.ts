export const SpaceCharacters = [ ' ' ];
export const BlankCharacters = [
  ...SpaceCharacters,
  '\t'
];

export const DigitCharacters = [ '1', '2', '3', '4', '5' , '6', '7', '8', '9', '0' ];
export const NumericCharacters = [ ...DigitCharacters, '.' ];
export const HexDigitCharacters = [
  ...DigitCharacters,
  'a', 'b', 'c', 'd', 'e', 'f',
  'A', 'B', 'C', 'D', 'E', 'F'
];

export const LowerCaseCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
export const UpperCaseCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

export const AlphaCharacters = [
  ...LowerCaseCharacters,
  ...UpperCaseCharacters
];

export const AlphaNumericCharacters = [
  ...AlphaCharacters,
  ...DigitCharacters
];

export const WordCharacters = [
  ...AlphaNumericCharacters,
  '_'
];

export class CharacterClass {
  private readonly _characters: string[];

  static of(characters: string[]|CharacterClass) {
    if (characters instanceof CharacterClass) {
      return characters;
    }
    return new CharacterClass(characters);
  }

  private constructor(characters: string[]) {
    this._characters = characters;
  }

  contains(character: string) {
    return this._characters.includes(character);
  }

  static equals(a: CharacterClass, b: CharacterClass) {
    return a._characters === b._characters
        || CharacterClass.shallowEquals(a._characters, b._characters);
  }

  private static shallowEquals(a: string[], b: string[]): boolean {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
}