import SocketIoClient from 'socket.io-client';
import store from './store';
import {
  receiveGameStats,
} from './reducers/actions';

const socket = new SocketIoClient('http://138.68.22.85:3000');

socket.on('gameStats', (gameStats) => {
  store.dispatch(receiveGameStats(gameStats));
});

export default socket;
