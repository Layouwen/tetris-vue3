import { Game } from './Game'
import Player from './Player'
import { Rival } from './Rival'
import { initMessage } from './message'

export function initGame() {
  initMessage()
}

let selfGame = null
export function initSelfGame(map) {
  selfGame = new Game(map)
  selfGame.addPlayer(new Player())
}

let rivalGame = null
export function initRivalGame(map) {
  rivalGame = new Game(map)
  rivalGame.addPlayer(new Rival())
}

export function startGame() {
  selfGame.start()
}

export * from './config'
export * from './map'
