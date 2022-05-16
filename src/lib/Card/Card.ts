export type Suit = "club" | "spade" | "heart" | "diamond";

export type Value =
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

export function suitsArray(): Suit[] {
  return ["club", "spade", "heart", "diamond"];
}

export function valuesArray(): Value[] {
  return ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"];
}

function randomSuit(): Suit {
  const suitIndex = Math.floor(Math.random() * 4);
  switch (suitIndex) {
    case 0:
      return "club";
    case 1:
      return "diamond";
    case 2:
      return "heart";
    default:
      return "spade";
  }
}

function randomValue(): Value {
  const valueIndex = Math.floor(Math.random() * 13) + 1;
  switch (valueIndex) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return valueIndex.toString() as Value;
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return "A";
  }
}

export interface ICard {
  getSuit: () => Suit;
  getValue: () => Value;
  toString: () => string;
}

export function randomCard(): ICard {
  return Card({
    suit: randomSuit(),
    value: randomValue(),
  });
}

export function Card(init: { suit: Suit; value: Value }): ICard {
  const suit = init.suit;
  const value = init.value;

  const getSuit = () => suit;
  const getValue = () => value;
  const toString = () => `${value} of ${suit}`;

  return {
    getSuit,
    getValue,
    toString,
  };
}
