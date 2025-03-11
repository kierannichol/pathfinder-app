export class AttackLog {
  private readonly parts: string[] = [];

  public append(amount: number, name: string) {
    if (amount === 0) return;
    const absAmount = Math.abs(amount);
    const symbol = this.parts.length > 0 ? (amount < 0 ? '- ' : '+ ') : '';
    this.parts.push(`${symbol}${absAmount} [${name}]`);
  }

  public toString() {
    return this.parts.join(' ');
  }
}