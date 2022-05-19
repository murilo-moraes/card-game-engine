export class Deck<T> {
  private cards: T[];

  constructor(cards: T[]) {
    this.cards = cards;
  }

  public shuffle(): Deck<T> {
    this.cards = this.cards.sort(() => Math.random() - 0.5);
    return this;
  }

  public deal(n: number): T[] {
    return this.cards.splice(0, n);
  }
}
