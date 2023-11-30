<template>
  <prolong v-if="isProlong" :toInit="setInit" :id="loan?.id ? loan?.id : 0" :loan="loan" @close="close"></prolong>
  <repay v-if="isRepay" @close="close" :id="poolId ? poolId : 0"></repay>
  <active-detail v-if="isDetail && status === 'active'" :loan="loan" @close="close">
  </active-detail>
  <overdue-detail
    v-if="isDetail && status === 'overdue'"
    @close="close"
    :loan="loan"
    :poolId="poolId"
    @repay="() => {
      isDetail = false
      isRepay = true
    }"
    @prolong="prolongation"
  ></overdue-detail>
  <transaction-desktop 
    v-if="isTransaction" 
    :uid="uid"
    @close="isTransaction = false" 
    titlePending="Подтвердите взятие займа"
    subtitlePending="Пожалуйста, подтвердите взятие займа в своем кошельке"
    subtitleSuccess="Вы успешно взяли займ"
    titleFaild="Произошла ошибка при взятии займа"
    ></transaction-desktop>
</template>

<script setup lang="ts">
import { ref, PropType, onMounted } from "vue";
import prolong from "./active/prolong.vue";
import repay from "./active/repay.vue";
import overdueDetail from "./active/overdue-detail.vue";
import activeDetail from "./active/active-detail.vue";
import transactionDesktop from "@/components/base/modals/transaction-desktop.vue";
import { LoansResponse } from "@/types/loan.types";
import { LoansRequestResponse } from "@/types/loan.types";
import { takeLoan } from "@/api/loans.api";

onMounted(async () => {
  if(state.retrieveLoanRequest && loanRequest) {
    await takeLoan(loanRequest.id)
  .then(res => {
    isTransaction.value = true
    uid.value = res.data
  }).catch(e => {
    
  }) 
  }
})

const { status, state, loanRequest } = defineProps({
  state: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
  },
  loan: {
    type: Object as PropType<LoansResponse>,
  },
  loanRequest: {
    type: Object as PropType<LoansRequestResponse>,
  },
  poolId: {
    type: Number,
    default: 0
  }
});

const emits = defineEmits(["close", "repay", "prolong"]);
const close = () => {
  isProlong.value = false;
  isDetail.value = false;
  isRepay.value = false;
  emits("close");
};

const isTransaction = ref(false)
const uid = ref()
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