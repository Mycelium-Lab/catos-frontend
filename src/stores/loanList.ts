import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { getUserId } from "@/utils/token";
import {  LoansResponse } from "@/types/loan.types";
import { listLoans } from "@/api/loans.api";

export const useLoanListStore = defineStore("useLoans", () => {
  const loans: Ref<LoansResponse[]> = ref([]);
  const hasLoading = ref(true)
  const hasError = ref(false)
  listLoans().then(res => {
    loans.value = res.data;
    console.log(loans.value)
    })
    .catch(e => {
      hasError.value = true
    }) 
    .finally( () => {
      hasLoading.value = false
    })

  const borrowerLoan = computed(() => {
    const userId = getUserId();
    return loans.value.filter(val => val.borrower_id == userId);
  });
  const activeLoan = computed(() => {
    return borrowerLoan.value.filter(val => val.status === 'active')
  })
  const paidLoan = computed(() => {
    return borrowerLoan.value.filter(val => val.status === 'paid')
  })
  const soldLoan = computed(() => {
    return borrowerLoan.value.filter(val => val.status === 'sold')
  })

  return {
    loans,
    borrowerLoan,
    activeLoan,
    paidLoan,
    soldLoan,
    hasLoading
  };
});
