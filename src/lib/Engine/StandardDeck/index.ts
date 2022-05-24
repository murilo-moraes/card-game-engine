import { Suit, Rank, StandardCard } from "../StandardCard";
import { Deck } from "../Deck";

const suitsArray: Suit[] = ["clubs", "spades", "hearts", "diamonds"];

const ranksArray: Rank[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "A",
  "J",
  "Q",
  "K",
];

function getCompleteDeck(): StandardCard[] {
  const cards: StandardCard[] = [];
  suitsArray.forEach((suit) => {
    ranksArray.forEach((value) => {
      cards.push(new StandardCard(suit, value));
    });
  });
  return cards;
}

export class StandardDeck extends Deck<StandardCard> {
  static createCompleteDeck(): StandardDeck {
    return new StandardDeck(getCompleteDeck());
  }
}
