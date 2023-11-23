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
  const creditorLoanRequests = computed(() => {
    const userId = getUserId();
    return loanRequests.value.filter(val => val.creditor_id == userId);
  });
  return {
    loanRequests,
    borrowerLoanRequests,
    creditorLoanRequests
  };
});
