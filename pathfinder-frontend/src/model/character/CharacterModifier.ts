interface CharacterModifier {
  get key(): string;
  get current(): string;
  get dependsOn(): string | undefined;
}

export default CharacterModifier;