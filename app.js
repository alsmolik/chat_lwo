const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ChatPubSub = require('./helpers/ChatPubSub');

app.use(express.static('public'));

const chatPubSub = new ChatPubSub();

io.on('connection', socket => {
    chatPubSub.addUser(socket);

    socket.on('disconnect', () => {
        chatPubSub.delUser(socket);
    });

    socket.on('message', msg => {
        chatPubSub.sendAll(msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});