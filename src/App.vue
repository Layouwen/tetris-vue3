<template>
  <div>
    <Game />
    <button @click="handleStartGame">start game</button>
  </div>
</template>

<script setup>
import Game from "./components/Game.vue";
import { startGame } from "./game";
function handleStartGame() {
  startGame();
}
</script>

<style lang='scss'>
.row {
  display: flex;
}
</style>
