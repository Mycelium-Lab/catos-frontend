<template>
  <detail-personal-desktop @close="close"> </detail-personal-desktop>
</template>

<script setup lang="ts">
import detailPersonalDesktop from "@/components/pulls/creditor/detail-personal-desktop.vue";
const emits = defineEmits(["close"]);

const close = () => {
  emits("close");
};
</script>

<style scoped></style>
