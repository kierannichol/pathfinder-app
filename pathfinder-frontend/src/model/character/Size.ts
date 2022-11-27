class Size {
  public static readonly NONE = new Size(0, '-', 'N/A', 0);
  public static readonly FINE = new Size(1, 'F', 'Fine', 8);
  public static readonly DIMINUTIVE = new Size(2, 'D', 'Diminutive', 4);
  public static readonly TINY = new Size(3, 'T', 'Tiny', 2);
  public static readonly SMALL = new Size(4, 'S', 'Small', 1);
  public static readonly MEDIUM = new Size(5, 'M', 'Medium', 0);
  public static readonly LARGE = new Size(6, 'L', 'Large', -1);
  public static readonly HUGE = new Size(7, 'H', 'Huge', -2);
  public static readonly GARGANTUAN = new Size(8, 'G', 'Gargantuan', -4);
  public static readonly COLOSSAL = new Size(9, 'C', 'Colossal', -8);

  public static fromId(id: number): Size | undefined {
    switch (id) {
      case 0: return this.NONE;
      case 1: return this.FINE;
      case 2: return this.DIMINUTIVE;
      case 3: return this.TINY;
      case 4: return this.SMALL;
      case 5: return this.MEDIUM;
      case 6: return this.LARGE;
      case 7: return this.HUGE;
      case 8: return this.GARGANTUAN;
      case 9: return this.COLOSSAL;
    }
    return undefined;
  }

  private constructor(public readonly id: number,
                      public readonly shortName: string,
                      public readonly longName: string,
                      public readonly acModifier: number) {
  }
}

export default Size;