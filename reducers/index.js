import { combineReducers } from 'redux';
import {
  RECEIVE_PLAYERS,
  ADD_PLAYER,
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

export default combineReducers({
  players: playerReducer,
});
