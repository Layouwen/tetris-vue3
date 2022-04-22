import { gameRow } from './config'
import { getBoxBottomPoints } from './matrix'

export function hitBorder({ box, points, offsetY = 0 }) {
  for (let i = 0; i < points.length; i++) {
    const point = points[i]
    const y = point.y + box.y + offsetY
    if (y >= gameRow) {
      return true
    }
  }
  return false
}

export function hitBottomBorder(box) {
  const points = getBoxBottomPoints(box.shape)
  return hitBorder({ box, points, offsetY: 1 })
}
