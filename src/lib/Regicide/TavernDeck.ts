import { Rank, StandardCard, StandardDeck, Suit } from "../Engine";
import { getCardAttack } from "./CardValues";
import { PlayerHand } from "./PlayerHand";

const suitsArray: Suit[] = ["clubs", "diamonds", "hearts", "spades"];
const tavernRanksArray: Rank[] = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];

function createTavernDeck(): StandardDeck {
  return new StandardDeck(
    suitsArray.flatMap((suit) =>
      tavernRanksArray.map((rank) => new StandardCard(suit, rank))
    )
  )
    .shuffle()
    .shuffle();
}

export class TavernDeck {
  private deck: StandardDeck;
  private discardPile: StandardDeck;

  constructor() {
    this.deck = createTavernDeck();
    this.discardPile = new StandardDeck([]);
  }

  public buy(card: StandardCard): ReadonlyArray<StandardCard> {
    if (card.suit === "diamonds") {
      const cardsToBuy = getCardAttack(card);
      return this.deal(cardsToBuy);
    }
    return [];
  }

  private deal(numberOfCards: number): ReadonlyArray<StandardCard> {
    console.log("deal");
    const result = this.deck.deal(numberOfCards, { revealed: true });
    this.deck = result.remainingDeck;
    return result.dealedCards;
  }

  public dealInitialHand(numberOfPlayers: number): ReadonlyArray<PlayerHand> {
    console.log(numberOfPlayers);
    return Array(numberOfPlayers)
      .fill(0)
      .map((_, order) => {
        const cards = this.deal(8);
        console.log(cards);
        return new PlayerHand(cards, order);
      });
  }

  public discard(cards: StandardCard[]): void {
    this.discardPile = new StandardDeck([...cards, ...this.discardPile.cards]);
  }

  public restore(card: StandardCard): void {
    if (card.suit === "hearts") {
      const cardsToRestore = getCardAttack(card);
      const result = this.discardPile.shuffle().shuffle().deal(cardsToRestore);
      this.discardPile = result.remainingDeck;
      this.deck = new StandardDeck([...this.deck.cards, ...result.dealedCards]);
    }
  }

  get discardPileShowingCard(): StandardCard | undefined {
    return this.discardPile[0];
  }
}
