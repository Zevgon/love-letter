import { RECEIVE_PLAYERS } from './constants';

export const receivePlayers = (players) => ({
  type: RECEIVE_PLAYERS,
  players,
});
