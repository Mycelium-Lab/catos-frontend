<template>
  <detail-other
   :pool="pool"
    v-if="isDetailOther"
    @close="close"
    @get-loan="
      () => {
        isDetailOther = false;
        isGetLoan = true;
      }
    "
    @invest="
      {
        isDetailOther = false;
        isInvest = true;
      }
    "
  >
  </detail-other>
  <desktop-modal
    v-if="isGetLoan"
    @close="close"
    variant="back"
    :toBack="
      () => {
        isGetLoan = false;
        isDetailOther = true;
      }
    "
  >
    <template v-slot:title>{{ `Получить займ из пулла № ${pool?.id}`  }}</template>
    <template v-slot:body>
      <get-loan :id="pool?.id"
      >
    </get-loan>
    </template>
  </desktop-modal>

 

  <get-loan-success v-if="isResult" @close="close"></get-loan-success>
  <desktop-modal
    v-if="isInvest"
    @close="close"
    variant="back"
    :toBack="
      () => {
        isInvest = false;
        isDetailOther = true;
      }
    "
  >
    <template v-slot:title> Получить статус инвестора </template>
      <template v-slot:body>
        <invest></invest>
      </template>
    </desktop-modal>
  </template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import getLoan from "./modal-body/get-loan.vue";
import invest from "./modal-body/invest.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import detailOther from "./modal-body/detail-other.vue";
import getLoanSuccess from "@/components/pulls/borrower/desktop/modal-body/get-loan-success.vue";
import { Pool } from "@/types/pool.type";

const { state } = defineProps({
  state: {
    type: Object,
    required: true,
  },
  pool: {
    type: Object as PropType<Pool>,
  }
})

const isDetailOther = ref(state.detailOtherModal);
const isGetLoan = ref(state.getLoanModal);
const isPayment = ref(false);
const isResult = ref(false);
const isInvest = ref(false);
const emits = defineEmits(["close", "get-loan"]);

const loan = () => {
  emits("get-loan");
};
const close = () => {
  emits("close");
};
</script>

<style scoped></style>
