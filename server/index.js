const Koa = require('koa')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = new Koa()
const httpServer = createServer(app.callback())
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', socket => {
  socket.on('moveBoxToLeft', () => {
    socket.emit('moveBoxToLeft')
    // socket.broadcast.emit('moveBoxToLeft')
  })
  socket.on('moveBoxToRight', () => {
    socket.emit('moveBoxToRight')
    // socket.broadcast.emit('moveBoxToRight')
  })
  socket.on('moveBoxToDown', () => {
    socket.emit('moveBoxToDown')
    // socket.broadcast.emit('moveBoxToDown')
  })
  socket.on('rotateBox', () => {
    socket.emit('rotateBox')
    // socket.broadcast.emit('rotateBox')
  })
  socket.on('createBox', info => {
    socket.emit('createBox', info)
    // socket.broadcast.emit('createBox', info)
  })
})

httpServer.listen(3001)
