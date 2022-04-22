import { initMap, addBoxToMap, eliminate } from './map'
import { render } from './render'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'
import { hitBottomBorder, hitBottomBox } from './hit'
import { createBox } from './Box'

export function startGame(map) {
  initMap(map)

  const isDownMove = intervalTimer()
  let activeBox = createBox()

  const handleTicker = n => {
    if (isDownMove(n, 200)) {
      if (hitBottomBorder(activeBox) || hitBottomBox(activeBox, map)) {
        addBoxToMap(activeBox, map)
        eliminate(map)
        activeBox = createBox()
        return
      }
      activeBox.y++
    }
    render(activeBox, map)
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
