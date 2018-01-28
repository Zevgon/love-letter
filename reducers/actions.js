import {
  RECEIVE_GAME_STATS,
  SET_NAME,
  SHOW_HISTORY,
  HIDE_HISTORY,
} from './constants';

export const receiveGameStats = (gameStats) => ({
  type: RECEIVE_GAME_STATS,
  gameStats,
});

export const setName = (name) => ({
  type: SET_NAME,
  name,
});

export const showHistory = () => ({
  type: SHOW_HISTORY,
});

export const hideHistory = () => ({
  type: HIDE_HISTORY,
});
