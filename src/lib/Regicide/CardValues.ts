import type { Rank, StandardCard } from "../Engine";

const cardAttack = {
  A: 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 10,
  Q: 15,
  K: 20,
};

const cardHealth = {
  J: 20,
  Q: 30,
  K: 40,
};

export function getCardAttack(card: StandardCard) {
  return cardAttack[card.rank] || 0;
}

export function getCardHealth(card: StandardCard) {
  return cardHealth[card.rank] || 0;
}
