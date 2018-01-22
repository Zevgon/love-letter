import _ from 'lodash';
import { combineReducers } from 'redux';
import {
  RECEIVE_GAME_STATS,
  SET_NAME,
} from './constants';

const gameReducer = (state = { id: null, players: [], status: null }, action) => {
  switch (action.type) {
    case RECEIVE_GAME_STATS:
      return _.merge({}, state, action.gameStats);
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

export default combineReducers({
  game: gameReducer,
  name: nameReducer,
});
