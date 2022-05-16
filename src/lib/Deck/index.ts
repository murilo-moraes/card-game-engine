import { Card, ICard } from "../Card/Card";
import { randomCard, suitsArray, valuesArray } from "../Card/Card";

export interface IDeck {
  shuffle: () => IDeck;
  deal: (n: number) => ICard[];
}

function getCompleteDeck(): ICard[] {
  const cards: ICard[] = [];
  suitsArray().forEach((suit) => {
    valuesArray().forEach((value) => {
      cards.push(Card({ suit, value }));
    });
  });
  return cards;
}

export function Deck(initCards: ICard[] | undefined = undefined): IDeck {
  const cards = initCards || getCompleteDeck();

  function shuffle(): IDeck {
    return Deck(cards.sort(() => Math.random() - 0.5));
  }

  function deal(n: number): ICard[] {
    return cards.slice(0, n);
  }

  return {
    shuffle,
    deal,
  };
}
