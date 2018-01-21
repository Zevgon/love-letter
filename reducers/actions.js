import {
  RECEIVE_PLAYERS,
  ADD_PLAYER,
  RECEIVE_GAME_ID,
} from './constants';

export const receivePlayers = (players) => ({
  type: RECEIVE_PLAYERS,
  players,
});

export const addPlayer = (newPlayer) => ({
  type: ADD_PLAYER,
  newPlayer,
});

export const receiveGameId = (gameId) => ({
  type: RECEIVE_GAME_ID,
  gameId,
});
