import type { Card } from "../Card";

export type Suit = "clubs" | "spades" | "hearts" | "diamonds";

export type Rank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "A"
  | "J"
  | "Q"
  | "K";

export class StandardCard implements Card {
  readonly suit: Suit;
  readonly rank: Rank;
  public revealed: boolean;

  constructor(suit: Suit, rank: Rank, revealed: boolean = false) {
    this.suit = suit;
    this.rank = rank;
    this.revealed = revealed;
  }

  get id(): string {
    return `${this.rank}-${this.suit}`;
  }

  get title(): string {
    return `${this.rank} of ${this.suit}`;
  }

  get imageFront(): string {
    return `/cards/${this.suit}/${this.rank}.png`;
  }

  get imageBack(): string {
    return `/cards/back.png`;
  }
}
