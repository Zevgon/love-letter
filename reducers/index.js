import { combineReducers } from 'redux';
import {
  RECEIVE_PLAYERS,
} from './constants';

const playerReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PLAYERS:
      return action.players;
    default:
      return state;
  }
};

export default combineReducers({
  players: playerReducer,
});
