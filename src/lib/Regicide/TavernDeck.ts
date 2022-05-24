import { Rank, StandardCard, StandardDeck, Suit } from "../Engine";
import { getCardAttack } from "./CardValues";

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

  constructor() {
    this.deck = createTavernDeck();
  }

  public buy(card: StandardCard): ReadonlyArray<StandardCard> {
    let number = 0;
    if (card.suit === "diamonds") {
      const cardsToBuy = getCardAttack(card);
      const result = this.deck.deal(cardsToBuy, { revealed: true });
      this.deck = result.remainingDeck;
      return result.dealedCards;
    }
  }
}
