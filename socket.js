import SocketIoClient from 'socket.io-client';

const BACKEND_URL = 'http://192.168.1.206:3000';
// const BACKEND_URL = 'http://138.68.22.85:3000';
let socket = null;

const getSocket = () => {
  if (socket === null) {
    socket = new SocketIoClient(BACKEND_URL);
  }
  return socket;
};

export default getSocket();
