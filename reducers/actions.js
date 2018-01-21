import {
  RECEIVE_GAME_STATS,
} from './constants';

export const receiveGameStats = (gameStats) => ({
  type: RECEIVE_GAME_STATS,
  gameStats,
});
