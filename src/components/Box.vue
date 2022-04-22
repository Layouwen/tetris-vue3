<template>
  <div class="box">{{ type }}</div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["type"]);
const typeToColorMap = {
  "-1": "blue",
  0: "gray",
  1: "pink",
};
const color = computed(() => typeToColorMap[props.type]);
</script>

<style lang="scss" scoped>
.box {
  width: 20px;
  height: 20px;
  margin: 2px;
  background: v-bind(color);
}
</style>