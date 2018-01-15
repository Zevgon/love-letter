export default class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  receiveCard(card) {
    this.cards.push(card);
  }

  playCard(card) {
    const cardIdx = this.cards.indexOf(card);
    this.cards = this.cards.slice(0, cardIdx - 1).concat(this.cards.slice(cardIdx));
    return card;
  }
}
