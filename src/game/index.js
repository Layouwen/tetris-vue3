import { Game } from './Game'
import Player from './Player'

let selfGame = null
export function initSelfGame(map) {
  selfGame = new Game(map)
  selfGame.addPlayer(new Player())
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
