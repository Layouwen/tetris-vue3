import { initMap, addBoxToMap } from './map'
import { render } from './render'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'
import { hitBottomBorder, hitBottomBox } from './hit'
import { Box } from './Box'

export function startGame(map) {
  initMap(map)

  const isDownMove = intervalTimer()
  let activeBox = new Box()

  const handleTicker = n => {
    if (isDownMove(n, 1000)) {
      if (hitBottomBorder(activeBox) || hitBottomBox(activeBox, map)) {
        addBoxToMap(activeBox, map)
        activeBox = new Box()
        return
      }
      activeBox.y++
    }
    render(activeBox, map)
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      activeBox.y++
    }
  })

  addTicker(handleTicker)
}

export * from './config'
export * from './map'
