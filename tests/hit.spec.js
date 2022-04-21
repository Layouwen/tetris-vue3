import { gameRow } from '../src/game/config'
import { hitBorder } from '../src/game/hit'
test('当 box 到达底部，应该返回 true', () => {
  const box = {
    x: 0,
    y: gameRow - 1,
    shape: [
      [1, 1],
      [1, 1],
    ],
  }

  expect(hitBorder(box)).toBe(true)
  box.y = 2
  expect(hitBorder(box)).toBe(false)
})
