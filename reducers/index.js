import _ from 'lodash';
import { combineReducers } from 'redux';
import {
  RECEIVE_GAME_STATS,
  SET_NAME,
  SHOW_HISTORY,
  HIDE_HISTORY,
} from './constants';

const gameReducer = (state = { id: null, players: [], status: null }, action) => {
  console.log('reduce', action.type)
  switch (action.type) {
    case RECEIVE_GAME_STATS:
      return _.assign({}, state, action.gameStats);
    default:
      return state;
  }
};

const nameReducer = (state = null, action) => {
  switch (action.type) {
    case SET_NAME:
      return action.name;
    default:
      return state;
  }
};

const showHistoryReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_HISTORY:
      return true;
    case HIDE_HISTORY:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  game: gameReducer,
  name: nameReducer,
  showHistory: showHistoryReducer,
});
