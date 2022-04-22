import { getBoxBottomPoints } from '../src/game/matrix'

test('获取 matrix 底部所有点', () => {
  const matrix = [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0],
  ]
  const points = getBoxBottomPoints(matrix)
  expect(points).toEqual([
    {
      x: 0,
      y: 2,
    }
  ])
})
