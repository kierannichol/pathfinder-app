import CharacterModifier from "./CharacterModifier";

interface CharacterValue {
  get key(): string;
  get current(): string;
  get dependsOn(): string | undefined;
  get modifiers(): CharacterModifier;
}

export default CharacterValue;