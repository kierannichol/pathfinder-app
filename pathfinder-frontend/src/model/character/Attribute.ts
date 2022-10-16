export interface Attribute {
  get id(): string;
  get name(): string;

  displayName(): string;
}