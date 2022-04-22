import { rotate } from './matrix'
export class Box {
  constructor() {
    this.x = 0
    this.y = 0
    this.shape = [
      [1, 1],
      [1, 1],
    ]
  }
  _rotates = []
  _rotateIndex = 0
  rotate() {
    const rotateFn = this._rotates[this._rotateIndex++]
    if (!rotateFn) return
    this.shape = rotateFn.call(null, this.shape)
    if (this._rotateIndex >= this._rotates.length) {
      this._rotateIndex = 0
    }
  }
  setRotateStrategy(v) {
    if (!v) return
    this._rotates = v
  }
}

const boxInfos = {
  1: {
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  2: {
    shape: [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ],
    rotateStrategy: [rotate, m => rotate(rotate(rotate(m)))],
  },
  3: {
    shape: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
    ],
    rotateStrategy: [rotate, rotate, rotate, rotate],
  },
}

export function createBox() {
  const box = new Box()
  const { shape, rotateStrategy } = getRandomBoxInfo()
  box.shape = shape
  box.setRotateStrategy(rotateStrategy)
  return box
}

function getRandomBoxInfo() {
  const max = Object.keys(boxInfos).length
  const key = Math.floor(Math.random() * max) + 1
  return boxInfos[key]
}
