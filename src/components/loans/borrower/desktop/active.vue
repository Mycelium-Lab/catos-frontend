<template>
  <prolong v-if="isProlong" :toInit="setInit" :id="loan?.id ? loan?.id : 0" @close="close"></prolong>
  <repay v-if="isRepay" @close="close" :id="loan?.id ? loan?.id : 0"></repay>
  <active-detail v-if="isDetail && status === 'active'" @close="close">
  </active-detail>
  <overdue-detail
    v-if="isDetail && status === 'overdue'"
    @close="close"
    @repay="() => {
      isDetail = false
      isRepay = true
    }"
    @prolong="prolongation"
  ></overdue-detail>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import prolong from "./active/prolong.vue";
import repay from "./active/repay.vue";
import overdueDetail from "./active/overdue-detail.vue";
import activeDetail from "./active/active-detail.vue";
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

const emits = defineEmits(["close", "repay", "prolong"]);
const close = () => {
  isProlong.value = false;
  isDetail.value = false;
  isRepay.value = false;
  emits("close");
};
const isDetail = ref(state.detailModal);
const isProlong = ref(state.prolongModal);
const isRepay = ref(state.repayModal);
const isInit = ref("table");

const setInit = () => {
  isProlong.value = false;
  if (isInit.value === "overdue-detail") {
    isDetail.value = true;
  } else {
    close();
  }
};

const prolongation = () => {
  isDetail.value = false;
  isProlong.value = true;
  isInit.value = "overdue-detail";
};
</script>

<style scoped></style>