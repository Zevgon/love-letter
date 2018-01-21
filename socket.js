import SocketIoClient from 'socket.io-client';
import store from './store';
import {
  receiveGameData,
  receivePlayers,
} from './reducers/actions';

const socket = new SocketIoClient('http://192.168.1.185:3000');

socket.on('gameCreated', (gameData) => {
  store.dispatch(receiveGameData(gameData));
});

socket.on('playersChange', (newPlayers) => {
  store.dispatch(receivePlayers(newPlayers));
});

export default socket;
