import { io } from 'socket.io-client';
import { baseURL } from '../../services/URL';

const Socket = io(`${baseURL}`);
console.log(Socket)

export default Socket
