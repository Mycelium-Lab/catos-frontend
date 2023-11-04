<template>
  <desktop-modal @close="close">
    <template v-slot:title> Займ из пулла #12345 </template>
    <template v-slot:body>
      <overdue @close="close" @repay="toRepay" @prolong="toProlong"> </overdue>
    </template>
  </desktop-modal>
</template>

<script setup lang="ts">
import desktopModal from "@/components/base/desktop-modal.vue";
import overdue from "../modal-body/overdue.vue";
const emits = defineEmits(["close", "repay", "prolong"]);
const close = () => {
  emits("close");
};
const toRepay = () => {
  emits("repay", "repay");
};
const toProlong = () => {
  emits("prolong", "prolong");
};
</script>

<style scoped></style>
