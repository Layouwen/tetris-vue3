import { Game } from './Game'

let game = null
export function initGame(map) {
  game = new Game(map)
}

export function startGame() {
  game.start()
}

export * from './config'
export * from './map'
