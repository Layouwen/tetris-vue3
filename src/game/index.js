import { initMap } from './map'
import { render } from './render'
import { addTicker } from './ticker'
import { intervalTimer } from './utils'
import { hitBottomBorder } from './hit'

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
  const isDownMove = intervalTimer()

  const handleTicker = n => {
    if (isDownMove(n, 1000)) {
      // 获取底部的所有点
      if (hitBottomBorder(box)) {
        console.log('游戏结束')
        return
      }
      box.y++
    }
    render(box, map)
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      box.y++
    }
  })

  addTicker(handleTicker)
}

export * from './config'
export * from './map'
