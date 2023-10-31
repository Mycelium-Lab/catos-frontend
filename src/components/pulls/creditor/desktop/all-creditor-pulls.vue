<template>
  <detail-other-desktop @close="close"> </detail-other-desktop>
</template>

<script setup lang="ts">
import detailOtherDesktop from "../detail-other-desktop.vue";
const emits = defineEmits(["close"]);

const close = () => {
  emits("close");
};
</script>

<style scoped></style>
