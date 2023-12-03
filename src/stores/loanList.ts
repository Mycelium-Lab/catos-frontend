import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { getUserId } from "@/utils/token";
import { LoansBoughtResponse, LoansResponse } from "@/types/loan.types";
import { listBoughtLoans, listLoans } from "@/api/loans.api";
import { roleStorage } from "@/utils/localStorage";

export const useLoanListStore = defineStore("useLoans", () => {
  const loans: Ref<LoansResponse[]> = ref([]);
  const loansBought: Ref<LoansBoughtResponse[]> = ref([]);

  const hasLoading = ref(true);
  const hasError = ref(false);

  listLoans()
    .then(res => {
      loans.value = res.data;
    })
    .catch(e => {
      hasError.value = true;
    })
    .finally(() => {
      hasLoading.value = false;
    });

  if (roleStorage.get() === 'collector') {
    listBoughtLoans()
    .then(res => {
      loansBought.value = res.data;
    })
    .catch(e => {
      hasError.value = true;
    })
    .finally(() => {
      hasLoading.value = false;
    });
  }
  
  const poolLoan = (poolId: number) => {
    return loans.value.filter(val => val.pool_id === poolId);
  };

  const creditorLoan = (creditorId: number) => {
    return loans.value.filter(val => val.creditor_id === creditorId);
  };

  const borrowerLoan = computed(() => {
    const userId = getUserId();
    return loans.value.filter(val => val.borrower_id == userId);
  });
  const activeLoan = computed(() => {
    return borrowerLoan.value.filter(val => val.status === "active");
  });
  const paidLoan = computed(() => {
    return borrowerLoan.value.filter(val => val.status === "paid");
  });
  const soldLoan = computed(() => {
    return borrowerLoan.value.filter(val => val.status === "sold");
  });
  const collectorLoans = computed(() => {
    const userId = getUserId();
    return loansBought.value;
  });
  return {
    loans,
    borrowerLoan,
    activeLoan,
    paidLoan,
    soldLoan,
    collectorLoans,
    hasLoading,
    creditorLoan, 
    poolLoan
  };
});
