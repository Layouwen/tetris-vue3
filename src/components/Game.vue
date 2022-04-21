<template>
  <div>
    <div class="row" v-for="i in gameRow" :key="i">
      <div v-for="j in gameCol" :key="j">
        <Box :type="map[i - 1][j - 1]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Box from "./Box.vue";
import { gameRow, gameCol, startGame } from "../game";
import { reactive } from "vue";
const map = reactive({});
startGame(map);
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>