import { io } from 'socket.io-client';
import { baseURL } from '../../services/URL';

// const Socket = io(`${baseURL}`);
const Socket = io(`https://martial-arts-hub-backend.onrender.com`);
console.log(Socket)

export default Socket
