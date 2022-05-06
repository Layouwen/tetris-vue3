import { initMap, addBoxToMap, eliminate } from './map'
import { render } from './render'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'
import { hitBottomBorder, hitBottomBox } from './hit'
import { createBox } from './Box'
import { message } from './message'

export class Game {
  constructor(map) {
    initMap(map)
    this._map = map
    this.activeBox = null
  }

  addPlayer(player) {
    player.init(this)
  }

  start() {
    this.activeBox = createBox()
    addTicker(this.handleTicker.bind(this))
  }

  _isDownMove = intervalTimer()
  autoMoveDown = true
  handleTicker(n) {
    if (this.autoMoveDown) {
      if (this._isDownMove(n, 1000)) {
        this.moveBoxToDown()
        message.emit('moveBoxToDown')
      }
    }
    render(this.activeBox, this._map)
  }

  moveBoxToDown() {
    if (hitBottomBorder(this.activeBox) || hitBottomBox(this.activeBox, this._map)) {
      addBoxToMap(this.activeBox, this._map)
      eliminate(this._map)
      this.activeBox = createBox()
      return
    }
    this.activeBox.y++
  }

  moveBoxToLeft() {
    this.activeBox.x--
  }

  moveBoxToRight() {
    this.activeBox.x++
  }

  rotateBox() {
    this.activeBox.rotate()
  }
}
