import { message } from './message'

export default class Player {
  constructor() {
    this._game = null
  }
  init(game) {
    this._game = game
    window.addEventListener('keydown', this.handleKeydown.bind(this))
  }

  handleKeydown(e) {
    switch (e.code) {
      case 'ArrowLeft':
        this._game.moveBoxToLeft()
        message.emit('moveBoxToLeft')
        break
      case 'ArrowRight':
        this._game.moveBoxToRight()
        message.emit('moveBoxToRight')
        break
      case 'ArrowUp':
        this._game.rotateBox()
        message.emit('rotateBox')
        break
      default:
        break
    }
  }
}
