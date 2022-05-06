import { initMap, addBoxToMap, eliminate } from './map'
import { render } from './render'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'
import { hitBottomBorder, hitBottomBox } from './hit'
import { createBox } from './Box'

let _map = null

export function initGame(map) {
  initMap(map)
  _map = map
}

export function startGame() {
  const isDownMove = intervalTimer()
  let activeBox = createBox()

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

  addTicker(handleTicker)
}

export * from './config'
export * from './map'
