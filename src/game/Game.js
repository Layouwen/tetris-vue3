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
  }

  start() {
    const handleTicker = n => {
      if (isDownMove(n, 200)) {
        if (hitBottomBorder(activeBox) || hitBottomBox(activeBox, _map)) {
          addBoxToMap(activeBox, _map)
          eliminate(_map)
          activeBox = createBox()
          return
        }
        activeBox.y++
      }
      render(activeBox, _map)
    }

    window.addEventListener('keydown', e => {
      switch (e.code) {
        case 'ArrowLeft':
          activeBox.x--
          break
        case 'ArrowRight':
          activeBox.x++
          break
        case 'ArrowUp':
          activeBox.rotate()
          break
        default:
          break
      }
    })

    addTicker(handleTicker.bind(this))
  }
}
