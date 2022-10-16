export function formatModifier(number: number): string {
  const prefix = number > 0 ? '+' : '';
  return `${prefix}${number}`;
}

export function mapObjectValues<T,U>(input: {[key:string]:T}, mapper: (t:T,k:string) => U): {[key:string]:U} {
  const output: {[key:string]:U} = {};
  for (const key in input) {
    output[key] = mapper(input[key], key);
  }
  return output;
}