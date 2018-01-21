import {
  RECEIVE_PLAYERS,
  ADD_PLAYER,
  RECEIVE_GAME_DATA,
} from './constants';

export const receivePlayers = (players) => ({
  type: RECEIVE_PLAYERS,
  players,
});

export const addPlayer = (newPlayer) => ({
  type: ADD_PLAYER,
  newPlayer,
});

export const receiveGameData = (gameData) => ({
  type: RECEIVE_GAME_DATA,
  gameData,
});
