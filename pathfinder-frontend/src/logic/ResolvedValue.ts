export abstract class ResolvedValue {

  static of(value: string | number | boolean): ResolvedValue {
    if (value === undefined) {
      return NullValue.none();
    }

    if (typeof value === 'string') {
      return new TextValue(value);
    }
    if (typeof value === 'boolean') {
      return new TextValue(value ? 'true' : 'false')
    }
    return new TextValue(value.toString())
  }

  static none(): ResolvedValue {
    return new NullValue();
  }

  abstract asText(): string;

  abstract asNumber(): number;

  abstract asBoolean(): boolean;

  abstract equals(other: ResolvedValue): boolean;
}

class TextValue extends ResolvedValue {
  constructor(private readonly value:string) {
    super();
  }

  asText(): string {
    return this.value;
  }

  asNumber(): number {
    return parseFloat(this.value);
  }

  asBoolean(): boolean {
    return !['false', 'no', '0', ''].includes(this.value.toLowerCase());
  }

  equals(other: ResolvedValue): boolean {
    return other instanceof TextValue
        && this.value === other.value;
  }
}

class NullValue extends ResolvedValue {
  asBoolean(): boolean {
    return false;
  }

  asNumber(): number {
    return 0;
  }

  asText(): string {
    return '';
  }

  equals(other: ResolvedValue): boolean {
    return other instanceof NullValue;
  }
}