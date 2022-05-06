import { createBoxByType } from './Box'
import { message } from './message'

export class Rival {
  constructor() {}
  init(game) {
    this._game = game
    this._game.autoMoveDown = false
    this._game.setCreateBoxStrategy(this.handleCreateBox.bind(this))
    message.on('moveBoxToLeft', this.moveBoxToLeftMsg.bind(this))
    message.on('moveBoxToRight', this.moveBoxToRightMsg.bind(this))
    message.on('moveBoxToDown', this.moveBoxToDownMsg.bind(this))
    message.on('rotateBox', this.rotateBoxMsg.bind(this))
    message.on('createBox', this.createBoxMsg.bind(this))
  }

  handleCreateBox() {
    return createBoxByType(this._boxInfo.type)
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

  _boxInfo = null
  _init = false
  createBoxMsg(info) {
    this._boxInfo = info
    if (!this._info) {
      this._game.start()
      this._init = true
    }
  }
}
