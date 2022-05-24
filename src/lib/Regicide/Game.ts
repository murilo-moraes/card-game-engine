import { Rank, StandardCard, StandardDeck, Suit } from "../Engine";

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

export class Game {
  readonly players: number;

  readonly kingsDeck: StandardDeck;
  readonly queensDeck: StandardDeck;
  readonly jacksDeck: StandardDeck;

  readonly tavern: StandardDeck;
  readonly discardPile: StandardDeck;

  constructor(players: number) {
    this.players = players;

    this.kingsDeck = new StandardDeck(
      suitsArray.map((suit) => new StandardCard(suit, "K"))
    )
      .shuffle()
      .shuffle();

    this.queensDeck = new StandardDeck(
      suitsArray.map((suit) => new StandardCard(suit, "Q"))
    )
      .shuffle()
      .shuffle();

    this.jacksDeck = new StandardDeck(
      suitsArray.map((suit) => new StandardCard(suit, "J"))
    )
      .shuffle()
      .shuffle();

    this.tavern = new StandardDeck(
      suitsArray.flatMap((suit) =>
        tavernRanksArray.map((rank) => new StandardCard(suit, rank))
      )
    )
      .shuffle()
      .shuffle();
  }
}
