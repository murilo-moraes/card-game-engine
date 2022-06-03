import type { StandardCard } from "../Engine";

export class PlayerHand {
  private hand: StandardCard[];
  readonly order: number;

  constructor(initialHand: ReadonlyArray<StandardCard>, order: number) {
    this.hand = [...initialHand];
    this.order = order;
  }

  public show(): ReadonlyArray<StandardCard> {
    return this.hand;
  }
}
