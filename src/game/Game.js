import { initMap, addBoxToMap, eliminate } from './map'
import { render } from './render'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'
import { hitBottomBorder, hitBottomBox } from './hit'
import { createBox } from './Box'

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
  handleTicker(n) {
    if (this._isDownMove(n, 200)) {
      if (hitBottomBorder(this.activeBox) || hitBottomBox(this.activeBox, this._map)) {
        addBoxToMap(this.activeBox, this._map)
        eliminate(this._map)
        this.activeBox = createBox()
        return
      }
      this.activeBox.y++
    }
    render(this.activeBox, this._map)
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
