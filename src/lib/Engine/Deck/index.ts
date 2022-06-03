import type { Card } from "../Card";
import type { DealResult } from "../DealResult";

export class Deck<T extends Card> {
  readonly cards: ReadonlyArray<T>;

  constructor(cards: T[]) {
    this.cards = cards;
  }

  public shuffle(): Deck<T> {
    const sortedCards = [...this.cards].sort(() => Math.random() - 0.5);
    return new Deck<T>(sortedCards);
  }

  public deal(n: number, options?: { revealed: boolean }): DealResult<T> {
    return {
      dealedCards: this.cards.slice(0, n).map((card) => {
        card.revealed = options?.revealed || false;
        return card;
      }),
      remainingDeck: new Deck<T>(this.cards.slice(n)),
    };
  }
}
