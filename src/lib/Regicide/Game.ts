import type { StandardCard } from "../Engine";
import { CastleDeck } from "./CastleDeck";
import type { PlayerHand } from "./PlayerHand";
import { TavernDeck } from "./TavernDeck";

export class Game {
  readonly players: number;
  readonly playersHands: ReadonlyArray<PlayerHand>;

  private castleDeck: CastleDeck;
  private tavern: TavernDeck;
  private _activeCastleCard: StandardCard;

  constructor(players: number) {
    this.players = players;
    this.castleDeck = new CastleDeck();
    this.tavern = new TavernDeck();
    this.playersHands = this.tavern.dealInitialHand(this.players);
    this._activeCastleCard = this.castleDeck.nextCard();
  }

  get activeCastleCard(): StandardCard {
    return this._activeCastleCard;
  }

  get discardPileShowingCard(): StandardCard | undefined {
    return this.tavern.discardPileShowingCard;
  }
}
