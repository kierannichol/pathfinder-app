interface ResolvedValue {
  asText(): string;

  asNumber(): number;

  asBoolean(): boolean;

  equals(other: ResolvedValue): boolean;
}

class TextValue implements ResolvedValue {
  constructor(private readonly value:string) {
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

  toString(): string {
    return this.asText();
  }
}

class BooleanValue implements ResolvedValue {

  constructor(private readonly value:boolean) {
  }

  asBoolean(): boolean {
    return this.value;
  }

  asNumber(): number {
    return this.value ? 1 : 0;
  }

  asText(): string {
    return this.value ? "true" : "false";
  }

  equals(other: ResolvedValue): boolean {
    return other instanceof BooleanValue
        && this.value === other.value;
  }

  toString(): string {
    return this.asText();
  }
}

class NullValue implements ResolvedValue {
  static readonly Instance = new NullValue();

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

  toString(): string {
    return this.asText();
  }
}

abstract class ResolvedValue {
  static readonly True: ResolvedValue = new BooleanValue(true);
  static readonly False: ResolvedValue = new BooleanValue(false);

  static of(value: string | number | boolean): ResolvedValue {
    if (value === undefined) {
      return NullValue.Instance;
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
    return NullValue.Instance;
  }
}

export default ResolvedValue;