import { gameRow } from '../src/game/config'
import { hitBottomBorder, hitBottomBox } from '../src/game/hit'
test('当 box 到达底部，应该返回 true', () => {
  const box = {
    x: 0,
    y: gameRow - 1,
    shape: [
      [1, 1],
      [1, 1],
    ],
  }

  expect(hitBottomBorder(box)).toBe(true)
  box.y = 2
  expect(hitBottomBorder(box)).toBe(false)
})

test('当 box 底部碰到其他 box，应该返回 true', () => {
  const box = {
    x: 0,
    y: 1,
    shape: [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
  }

  const map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0, 0],
    [-1, 0, 0, 0, 0, 0],
  ]

  expect(hitBottomBox(box, map)).toBe(true)
})
