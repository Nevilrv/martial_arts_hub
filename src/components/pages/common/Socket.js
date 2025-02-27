import { io } from 'socket.io-client';

const Socket = io("https://martialartshub.co", {
    transports: ["websocket", "polling"],
    secure: true,
});

Socket.on('stdLive', (data) => {
    localStorage.setItem('stdLive', data)
})

Socket.on('insLive', (data) => {
    localStorage.setItem('insLive', data)
})


//const Socket = io("http://localhost:4000"); 

console.log(Socket, "=============>")

export default Socket
