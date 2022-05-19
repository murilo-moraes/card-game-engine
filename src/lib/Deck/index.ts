import type { ICard } from "../Card";

export class Deck<T extends ICard> {
  private cards: T[];

  constructor(cards: T[]) {
    this.cards = cards;
  }

  public shuffle(): Deck<T> {
    this.cards = this.cards.sort(() => Math.random() - 0.5);
    return this;
  }

  public deal(n: number, options?: { revealed: boolean }): T[] {
    const dealedCards = this.cards.splice(0, n);
    if (options) {
      dealedCards.forEach((c) => (c.revealed = options.revealed || false));
    }
    return dealedCards;
  }
}
