import { initMap } from './map'
import { render } from './render'

export function startGame(map) {
  initMap(map)
  const box = {
    x: 0,
    y: 0,
    shape: [
      [1, 1],
      [1, 1],
    ],
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      box.y++
      render(box, map)
    }
  })
  render(box, map)
}

export * from './config'
export * from './map'
