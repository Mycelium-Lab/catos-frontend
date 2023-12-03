<template>
  <h3 v-if="role === 'collector' && !loans.length">
    Задолженности пока отсутствуют
  </h3>
  <h3 v-else-if="role !== 'collector' && !pools.length">
    Пуллы пока отсутствуют
  </h3>
  <ul v-else-if="role === 'collector'" class="list-desktop">
    <li v-for="loan in loans" :key="loan.id">
      <pulls-table
        :role="role"
        :variant="variant"
        :key="variant"
        :loan="loan"
        @mySoldLoans="toMySold"
      ></pulls-table>
    </li>
  </ul>
  <ul v-else class="list-desktop">
    <li v-for="pool in pools" :key="pool.id">
      <pulls-table
        :role="role"
        :variant="variant"
        :key="variant"
        :pool="pool"
        @mySoldLoans="toMySold"
      ></pulls-table>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ComputedRef } from "vue";
import { Pool } from "@/types/pool.type";
import { LoansResponse, LoansBoughtResponse } from "@/types/loan.types";
import pullsTable from "@/components/pulls/desktop/pulls-table.vue";
import { usePoolListStore } from "@/stores/poolList";
import { useLoanListStore } from "@/stores/loanList";
import { roleStorage } from "@/utils/localStorage";
import { getUserId } from "@/utils/token";

const { variant, role } = defineProps({
  variant: {
    type: String,
  },
  role: {
    type: String,
  },
});
const poolListStore = usePoolListStore();

let loans: ComputedRef<LoansResponse[] | LoansBoughtResponse[]>;
if (roleStorage.get() === "collector") {
  const loanListStore = useLoanListStore();
  loans = computed<LoansResponse[] | LoansBoughtResponse[]>(() =>
    variant === "marketplace"
      ? loanListStore.loans
      : loanListStore.collectorLoans
  );
}

const pools = computed<Pool[]>(() => {
  if(role === 'creditor') {
    const creditorId = getUserId()
    return variant === "all" ? poolListStore.pools.sort((a, b) => b.id - a.id) : poolListStore.creditorPools(creditorId ? creditorId : 0)
  }
  return role === "depositor" ? poolListStore.verifiedPools.sort((a, b) => b.id - a.id) : poolListStore.pools.sort((a, b) => b.id - a.id)
});

const emits = defineEmits(["mySoldLoans"]);
const toMySold = () => {
  emits("mySoldLoans");
};
</script>

<style scoped lang="scss">
.list-desktop {
  list-style: none;
  padding: 0em;
  display: flex;
  flex-wrap: wrap;
  gap: 38px 20px;
}
</style>
