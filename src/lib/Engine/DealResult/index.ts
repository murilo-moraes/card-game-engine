import type { Card } from "../Card";
import type { Deck } from "../Deck";

export interface DealResult<T extends Card> {
  dealedCards: ReadonlyArray<T>;
  remainingDeck: Deck<T>;
}
