import { io } from 'socket.io-client';
import { baseURL } from '../../services/URL';

const Socket = io("https://martialartshub.co", {
    transports: ["websocket", "polling"],
    secure: true, 
});

// const Socket = io("http://localhost:4000", {
    // transports: ["websocket", "polling"],
    // secure: true, 
// }); 

console.log(Socket, "=============>")

export default Socket
