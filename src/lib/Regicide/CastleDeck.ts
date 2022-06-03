import { Rank, StandardCard, StandardDeck } from "../Engine";

function createCastleDeck(rank: Rank) {
  return new StandardDeck(
    StandardCard.suitsArray().map((suit) => new StandardCard(suit, rank))
  )
    .shuffle()
    .shuffle();
}

export class CastleDeck {
  private kingsDeck: StandardDeck;
  private queensDeck: StandardDeck;
  private jacksDeck: StandardDeck;

  constructor() {
    this.kingsDeck = createCastleDeck("K");
    this.queensDeck = createCastleDeck("Q");
    this.jacksDeck = createCastleDeck("J");
  }

  public nextCard(): StandardCard | undefined {
    if (this.jacksDeck.cards.length > 0) {
      const result = this.jacksDeck.deal(1, { revealed: true });
      this.jacksDeck = result.remainingDeck;
      return result.dealedCards[0];
    }

    if (this.queensDeck.cards.length > 0) {
      const result = this.queensDeck.deal(1, { revealed: true });
      this.queensDeck = result.remainingDeck;
      return result.dealedCards[0];
    }

    if (this.kingsDeck.cards.length > 0) {
      const result = this.kingsDeck.deal(1, { revealed: true });
      this.kingsDeck = result.remainingDeck;
      return result.dealedCards[0];
    }

    return undefined;
  }
}
