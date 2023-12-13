import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { getUserId } from "@/utils/token";
import { LoansRequestResponse } from "@/types/loan.types";
import { listLoanRequest } from "@/api/loanRequests.api";

export const useLoanRequestListStroe = defineStore("loanRequests", () => {
  const loanRequests: Ref<LoansRequestResponse[]> = ref([]);
  listLoanRequest().then(res => {
    loanRequests.value = res.data;
  });
  const borrowerLoanRequests = computed(() => {
    const userId = getUserId();
    return loanRequests.value.filter(val => val.borrower_id == userId);
  });
  const borrowerMaxApprovedLimit = (poolId: number) => {
    let maxAmount = 0;
    borrowerLoanRequests.value.map((value) => {
      if (value.pool_id === poolId)
        maxAmount = Math.max(maxAmount, value.approved_amount);
    });
    return maxAmount;
  };
  const creditorLoanRequests = computed(() => {
    const userId = getUserId();
    return loanRequests.value.filter(val => val.creditor_id == userId);
  });
  const loanRequestItem = async (loanRequestlId: number) => {
    await (await listLoanRequest()).data
    return loanRequests.value.filter(val => val.id === loanRequestlId)[0];
  };
  return {
    loanRequests,
    borrowerLoanRequests,
    creditorLoanRequests,
    loanRequestItem,
    borrowerMaxApprovedLimit
  };
});
