import { message } from './message'

export class Rival {
  constructor() {}
  init(game) {
    this._game = game
    this._game.autoMoveDown = false
    message.on('moveBoxToLeft', this.moveBoxToLeftMsg.bind(this))
    message.on('moveBoxToRight', this.moveBoxToRightMsg.bind(this))
    message.on('moveBoxToDown', this.moveBoxToDownMsg.bind(this))
    message.on('rotateBox', this.rotateBoxMsg.bind(this))
  }

  moveBoxToLeftMsg() {
    this._game.moveBoxToLeft()
  }
  moveBoxToRightMsg() {
    this._game.moveBoxToRight()
  }
  moveBoxToDownMsg() {
    this._game.moveBoxToDown()
  }
  rotateBoxMsg() {
    this._game.rotateBox()
  }
}
