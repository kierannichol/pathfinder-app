import {DataContext, Formula} from "@kierannichol/formula-js";

export class Chance {
  constructor(public readonly value: string,
              public readonly toBeat: string) {
  }

  calculate(context: DataContext): number {
    const probValue = Chance.replaceRolls(this.value, fac);
    const probToBeat = Chance.replaceRolls(this.toBeat, n => n);

    const actualValue = Formula.parse(probValue).resolve(context)?.asNumber() ?? 0;
    const actualToBeat = Formula.parse(probToBeat).resolve(context)?.asNumber() ?? 0;

    console.log(actualValue)
    console.log(actualToBeat)
    console.log(actualValue*actualToBeat)
    console.log(actualValue/actualToBeat)

    return actualToBeat/actualValue;
  }

  private static replaceRolls(value: string, mapFn: (n:number) => number): string {
    let result = value;
    value.match(/(\d+)d(\d+)/g)?.forEach(roll => {
      const [count, sides] = roll.split('d').map(Number);
      const replacement = count * mapFn(sides);
      result = result.replace(roll, replacement.toString());
    });
    return result;
  }
}

function fac(n: number): number{
  return(n<2)?1:fac(n-1)*n;
}