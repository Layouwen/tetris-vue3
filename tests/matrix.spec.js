import { getBoxBottomPoints } from '../src/game/matrix'

test('获取 matrix 底部所有点', () => {
  const matrix = [
    [1, 1],
    [1, 1],
  ]
  const points = getBoxBottomPoints(matrix)
  expect(points).toEqual([
    {
      x: 0,
      y: 1,
    },
    {
      x: 1,
      y: 1,
    },
  ])
})
