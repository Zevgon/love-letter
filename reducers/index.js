import _ from 'lodash';
import { combineReducers } from 'redux';
import {
  RECEIVE_GAME_STATS,
} from './constants';

const gameReducer = (state = { id: null, players: [], status: null }, action) => {
  console.log(action.gameStats);
  switch (action.type) {
    case RECEIVE_GAME_STATS:
      return _.merge({}, state, action.gameStats);
    default:
      return state;
  }
};


export default combineReducers({
  game: gameReducer,
});
