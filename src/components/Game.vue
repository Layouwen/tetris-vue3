<template>
  <div>
    <div class="row" v-for="i in gameRow" :key="i">
      <div v-for="j in gameCol" :key="j">
        <Box />
      </div>
    </div>
  </div>
</template>

<script setup>
import Box from "./Box.vue";
import { gameRow, gameCol } from "../game";
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>