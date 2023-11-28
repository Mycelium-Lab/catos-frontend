<template>
  <detail
    v-if="isDetail"
    @close="close"
    :loan="loan"
    @prolong="
      () => {
        isDetail = false;
        isProlong = true;
      }
    "
  ></detail>
  <detail-prolong
    v-if="isProlong"
    @close="close"
    :toBack="
      () => {
        isDetail = true;
        isProlong = false;
      }
    "
  ></detail-prolong>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import detail from "./repaid/detail.vue";
import detailProlong from "./modal-body/detail-prolong.vue";
import { LoansResponse } from "@/types/loan.types";

const { status, state } = defineProps({
  state: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
  },
  loan: {
    type: Object as PropType<LoansResponse>,
  }
});
const emits = defineEmits(["close", "link"]);
const close = () => {
  emits("close");
};
const isDetail = ref(state.detailModal);
const isProlong = ref(false);
</script>

<style scoped></style>
