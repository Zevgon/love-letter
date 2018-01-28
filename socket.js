import SocketIoClient from 'socket.io-client';
import store from './store';
import {
  receiveGameStats,
} from './reducers/actions';

const socket = new SocketIoClient('http://10.1.10.169:3000');

socket.on('gameStats', (gameStats) => {
  store.dispatch(receiveGameStats(gameStats));
});

export default socket;
