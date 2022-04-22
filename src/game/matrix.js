export function getBoxBottomPoints(matrix) {
  const row = matrix.length
  const col = matrix[0].length
  const points = []
  for (let j = 0; j < col; j++) {
    const x = j
    const y = row - 1
    if (matrix[y][x] > 0) {
      const point = {
        x,
        y,
      }
      points.push(point)
    }
  }
  return points
}
