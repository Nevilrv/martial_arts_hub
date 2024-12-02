import { io } from 'socket.io-client';
import { baseURL } from '../../services/URL';

const Socket = io(`${baseURL}`);

export default Socket
