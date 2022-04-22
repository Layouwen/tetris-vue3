import { gameRow } from '../src/game/config'
import { hitBottomBorder } from '../src/game/hit'
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
