const CARDS = [
  {
    number: 1,
    name: 'Guard',
    ability: (otherPlayer, card) => {
      if (otherPlayer.curCard.is(card)) {
        otherPlayer.setLost();
      }
    },
  },
  {
    number: 2,
    name: 'Priest',
    ability: (otherPlayer) => otherPlayer.curCard(),
  },
  {
    number: 3,
    name: 'Baron',
    ability: (curPlayer, otherPlayer) => {
      if (otherPlayer.curCard().number > curPlayer.curCard().number) {
        otherPlayer.setLost();
      }
    },
  },
  {
    number: 4,
    name: 'Handmaid',
    ability: (curPlayer) => {
      curPlayer.setHandmaid();
    },
  },
  {
    number: 5,
    name: 'Prince',
    ability: (target) => {
      target.discardHand();
      target.drawCard();
    },
  },
  {
    number: 6,
    name: 'King',
    ability: (curPlayer, target) => {
      const player1Cards = curPlayer.getCards();
      const player2Cards = target.getCards();
      curPlayer.setCards(player2Cards);
      target.setCards(player1Cards);
    },
  },
  {
    number: 7,
    name: 'Countess',
    ability: () => {},
  },
  {
    number: 8,
    name: 'Princess',
    ability: (curPlayer) => {
      curPlayer.setLost();
    },
  },
];

export default class Card {
  constructor(id) {
    const card = CARDS[id];
    this.number = card.number;
    this.name = card.name;
    this.ability = card.ability;
  }

  is(otherCard) {
    return this.card.number === otherCard.number;
  }
}
