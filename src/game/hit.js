import { gameRow } from './config'
import { getBoxBottomPoints } from './matrix'

export function hitBorder(box) {
  const points = getBoxBottomPoints(box.shape, { x: box.x, y: box.y })
  for (let i = 0; i < points.length; i++) {
    if (points[i].y + 1 >= gameRow) {
      return true
    }
  }
  return false
}
