import { combineReducers } from 'redux';
import SocketIoClient from 'socket.io-client';
import {
  RECEIVE_PLAYERS,
  ADD_PLAYER,
  RECEIVE_GAME_ID,
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

const gameReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_GAME_ID:
      return action.gameId;
    default:
      return state;
  }
};

const socketReducer = () => new SocketIoClient('ws://172.20.10.7:3000');

export default combineReducers({
  players: playerReducer,
  socket: socketReducer,
  game: gameReducer,
});
