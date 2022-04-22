export class Box {
  constructor() {
    this.x = 0
    this.y = 0
    this.shape = [
      [1, 1],
      [1, 1],
    ]
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
  },
}

export function createBox() {
  const box = new Box()
  const { shape } = getRandomBoxInfo()
  box.shape = shape
  return box
}

function getRandomBoxInfo() {
  const max = Object.keys(boxInfos).length
  const key = Math.floor(Math.random() * max) + 1
  return boxInfos[2]
}
