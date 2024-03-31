import { io } from 'socket.io-client';

const socket = io('192.168.0.108', {
    autoConnect: true,
});

export const connectSocket = () => {
    socket.connect();
};

export const disconnectSocket = () => {
    socket.disconnect();
};

export default socket;
