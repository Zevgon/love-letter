export default class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.lost = false;
    this.isHandmaid = false;
  }

  drawCard(deck) {
    this.cards.push(deck.shiftCard());
  }

  playCard(chosenCard, args) {
    const cardIdx = this.cards.findIndex(card => card.number === chosenCard.number);
    this.cards = this.cards.slice(0, cardIdx - 1).concat(this.cards.slice(cardIdx));
    chosenCard.ability(...args);
    return chosenCard;
  }

  discardHand() {
    this.cards = [];
  }

  setLost() {
    this.lost = true;
  }

  setHandmaid() {
    this.isHandmaid = true;
  }

  unsetHandmaid() {
    this.isHandmaid = false;
  }

  curCard() {
    return this.cards[0];
  }

  getCards() {
    return this.cards;
  }

  setCards(newCards) {
    this.cards = newCards;
  }
}
