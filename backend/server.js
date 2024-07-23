require('dotenv').config();
const express = require('express');
const app = express();
const DbConnect = require('./database');
const router =require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const server = require('http').createServer(app);
const ACTIONS = require('./actions');


const io = require('socket.io')(server, {
    cors: {
        origin: 'http://vibes-frontend-beta.vercel.app',
        methods: ['GET', 'POST'],
    },
});



app.use(cookieParser());
const corsoption={
    credentials: true,
    origin: ['http://vibes-frontend-beta.vercel.app'],

}

app.use(cors(corsoption));

const path = require('path')
app.use('/storage', express.static(path.join(__dirname, 'storage')))

const PORT = process.env.PORT || 4000;
DbConnect();
app.use(express.json({ limit: '8mb' }));
app.use(router);



app.get('/',(req,res)=>{
    res.send('Hello')
});
const socketUserMap = {};
io.on('connection', (socket) => {
    console.log('newcon',socket.id)
    // console.log('New connection', socket.id);
    socket.on(ACTIONS.JOIN, ({ roomId, user }) => {
        socketUserMap[socket.id] = user;
        const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);

        clients.forEach((clientId) => {
            io.to(clientId).emit(ACTIONS.ADD_PEER, {
                peerId: socket.id,
                createOffer: false,
                user,
            });
            socket.emit(ACTIONS.ADD_PEER, {
                peerId: clientId,
                createOffer: true,
                user: socketUserMap[clientId],
            });
        });
        socket.join(roomId);
    });

    socket.on(ACTIONS.RELAY_ICE, ({ peerId, icecandidate }) => {
        io.to(peerId).emit(ACTIONS.ICE_CANDIDATE, {
            peerId: socket.id,
            icecandidate,
        });
    });

    socket.on(ACTIONS.RELAY_SDP, ({ peerId, sessionDescription }) => {
        io.to(peerId).emit(ACTIONS.SESSION_DESCRIPTION, {
            peerId: socket.id,
            sessionDescription,
        });
    });

    socket.on(ACTIONS.MUTE, ({ roomId, userId }) => {
        const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
        clients.forEach((clientId) => {
            io.to(clientId).emit(ACTIONS.MUTE, {
                peerId: socket.id,
                userId,
            });
        });
    });

    socket.on(ACTIONS.UNMUTE, ({ roomId, userId }) => {
        const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
        clients.forEach((clientId) => {
            io.to(clientId).emit(ACTIONS.UNMUTE, {
                peerId: socket.id,
                userId,
            });
        });
    });

    const leaveRoom = () => {
        const { rooms } = socket;
        Array.from(rooms).forEach((roomId) => {
            const clients = Array.from(
                io.sockets.adapter.rooms.get(roomId) || []
            );
            clients.forEach((clientId) => {
                io.to(clientId).emit(ACTIONS.REMOVE_PEER, {
                    peerId: socket.id,
                    userId: socketUserMap[socket.id]?.id,
                });

                socket.emit(ACTIONS.REMOVE_PEER, {
                    peerId: clientId,
                    userId: socketUserMap[clientId]?.id,
                });
            });
            socket.leave(roomId);
        });
        delete socketUserMap[socket.id];
    };

    socket.on(ACTIONS.LEAVE, leaveRoom);

    socket.on('disconnecting', leaveRoom);
});


server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
