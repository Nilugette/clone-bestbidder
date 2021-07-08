import { io } from 'socket.io-client';
import { APP_SOCKET_ENDPOINT } from "../api/constant";
import authHeader from './auth-header';

let socket;

export const initiateSocketConnection = () => {
	socket = io(APP_SOCKET_ENDPOINT, {
         headers: authHeader() 
    });
    console.log(APP_SOCKET_ENDPOINT)
	console.log(`Connecting socket...`);
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if(socket) socket.disconnect();
  }

export const clickOnBid = (cb) => {
	socket.emit('message', 'Hello there from React.');
    socket.on('message', msg => {
        return cb(null, msg);
  });
}