import type { ICard } from "../Card";

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

export class StandardCard implements ICard {
  readonly suit: Suit;
  readonly rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }

  get title(): string {
    return `${this.rank} of ${this.suit}s`;
  }

  get image(): string {
    return `/cards/${this.suit}/${this.rank}.png`;
  }
}
