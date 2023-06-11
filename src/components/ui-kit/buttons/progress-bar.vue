<template>
  <div :class="progress === end ? 'loader_end loader' : 'loader'">
    <div
      class="rectangle-289-cQC"
      :style="{
        width: `${progress}em`,
        'transition-timing-function': 'ease-out',
        transition: '0.3s',
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

onMounted(() => {
  generateProgress();
});
const progress = ref(0);
const end = ref(10.5625);
const generateProgress = () => {
  const loading = setInterval(() => {
    if (progress.value === end.value) {
      clearInterval(loading);
      return;
    }
    progress.value = progress.value + 1.3203125;
  }, 1000);
};
</script>

<style scoped lang="scss">
.loader {
  background-color: rgba(165, 146, 221, 0.1000000015);
  border: 1px solid rgba(165, 146, 221, 0.0799999982);
  border-radius: 2.3rem;
  padding: 0.125em;
  width: 10.875em;
  height: 0.75em;
  display: flex;
  align-items: center;
  &_end {
    background: #d9d9d9;
  }
  .rectangle-289-cQC {
    background-color: #9747ff;
    border-radius: 23px;
    height: 0.5em;
  }
}
</style>
