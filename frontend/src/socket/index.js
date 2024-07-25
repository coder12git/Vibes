import { io } from 'socket.io-client';

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' :
    'https://vibes-backend.onrender.com';

const socketInit = () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    return io(url, options);
};

export default socketInit;
