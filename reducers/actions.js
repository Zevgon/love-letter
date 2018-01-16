import {
  RECEIVE_PLAYERS,
  ADD_PLAYER,
} from './constants';

export const receivePlayers = (players) => ({
  type: RECEIVE_PLAYERS,
  players,
});

export const addPlayer = (newPlayer) => ({
  type: ADD_PLAYER,
  newPlayer,
});
