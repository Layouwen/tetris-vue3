import { Game } from './Game'

let selfGame = null
export function initSelfGame(map) {
  selfGame = new Game(map)
}

let rivalGame = null
export function initRivalGame(map) {
  rivalGame = new Game(map)
}

export function startGame() {
  selfGame.start()
  rivalGame.start()
}

export * from './config'
export * from './map'
