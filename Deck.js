const shuffle = (a) => {
  const cloned = a.map(el => el);
  let j;
  let x;
  let i;
  for (i = cloned.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    x = cloned[i];
    cloned[i] = cloned[j];
    cloned[j] = x;
  }
  return cloned;
};

export default class Player {
  constructor(cards) {
    this.cards = cards;
  }

  deal(players) {
    players.forEach((player) => {
      player.receiveCard(this.cards.shift());
    });
  }

  shuffle() {
    this.cards = shuffle(this.cards);
  }

  shiftCard() {
    return this.cards.shift();
  }
}
