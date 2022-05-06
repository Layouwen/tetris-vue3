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

  start() {
    this.activeBox = createBox()

    window.addEventListener('keydown', this.handleKeydown.bind(this))
    addTicker(this.handleTicker.bind(this))
  }

  handleKeydown(e) {
    switch (e.code) {
      case 'ArrowLeft':
        this.activeBox.x--
        break
      case 'ArrowRight':
        this.activeBox.x++
        break
      case 'ArrowUp':
        this.activeBox.rotate()
        break
      default:
        break
    }
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
}
