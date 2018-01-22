import {
  RECEIVE_GAME_STATS,
  SET_NAME,
} from './constants';

export const receiveGameStats = (gameStats) => ({
  type: RECEIVE_GAME_STATS,
  gameStats,
});

export const setName = (name) => ({
  type: SET_NAME,
  name,
});
