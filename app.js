const express = require('express')
const app = express()
const path = require('path')
const APP_PORT = 1234
const { Server } = require("socket.io");

const server = app.listen(APP_PORT, () => {
    console.log(`App running on port ${APP_PORT}`)
})
const io = new Server(server);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.get('/', (req, res) => {
    res.render('index')
})

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('chatter', function (message) {
        console.log('message : ' + message)
        io.emit('chatter', message)
    })
    // socket.on('disconnect', () => {
    //     console.log('user disconnected');
    // });
});