import { io } from 'socket.io-client'

let socket = null
export function initMessage() {
  socket = io('http://localhost:3001')

  socket.on('connect', () => {
    console.log('θΏζ₯ζε')
  })
}

export const message = {
  on(...args) {
    return socket.on(...args)
  },
  emit(...args) {
    return socket.emit(...args)
  },
}
