<template>
  <desktop-modal @close="close">
    <template v-slot:title> Займ из пула #{{ poolId }}</template>
    <template v-slot:body>
      <overdue @close="close" @repay="toRepay" @prolong="toProlong" :loan="loan" :poolId="poolId"> </overdue>
    </template>
  </desktop-modal>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import overdue from "../modal-body/overdue.vue";
import { LoansResponse } from "@/types/loan.types";

const { loan } = defineProps({
  loan: {
    type: Object as PropType<LoansResponse>,
  },
  poolId: {
    type: Number
  }
});

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
