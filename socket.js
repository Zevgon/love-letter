import SocketIoClient from 'socket.io-client';
import store from './store';
import { receiveGameData } from './reducers/actions';

const socket = new SocketIoClient('ws://192.168.1.185:3000');

socket.on('gameCreated', (gameData) => {
  store.dispatch(receiveGameData(gameData));
});

export default socket;
