import _ from 'lodash';
import { combineReducers } from 'redux';
import {
  RECEIVE_PLAYERS,
  ADD_PLAYER,
  RECEIVE_GAME_DATA,
} from './constants';

const playerReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return action.players;
    case ADD_PLAYER:
      return state.concat([action.newPlayer]);
    default:
      return state;
  }
};

const gameReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GAME_DATA:
      return _.merge({}, state, action.gameData);
    default:
      return state;
  }
};


export default combineReducers({
  players: playerReducer,
  game: gameReducer,
});
