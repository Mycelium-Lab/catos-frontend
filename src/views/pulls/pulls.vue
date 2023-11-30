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
import { computed, onMounted } from "vue";
import { ComputedRef } from "vue";
import { Pool } from "@/types/pool.type";
import { LoansResponse, LoansBoughtResponse } from "@/types/loan.types";
import pullsTable from "@/components/pulls/desktop/pulls-table.vue";
import { usePoolListStore } from "@/stores/poolList";
import { useLoanListStore } from "@/stores/loanList";
import { roleStorage } from "@/utils/localStorage";
import { useFilterDataStore } from "@/stores/filter";
import { conditionsFilterPool, conditionsFilterLoans } from "@/utils/conditionsFilter"

onMounted(() => {
  filterDataStore.reset()
  filterDataStore.isActiveFilter = false
})

const { variant } = defineProps({
  variant: {
    type: String,
  }
});
const poolListStore = usePoolListStore();
const filterDataStore = useFilterDataStore();

const role = computed(() => {
 return roleStorage.get()
})

let loans: ComputedRef<LoansResponse[] | LoansBoughtResponse[]>;
if (role.value === "collector") {
  const loanListStore = useLoanListStore();
  loans = computed<LoansResponse[] | LoansBoughtResponse[]>(() => {
    if(filterDataStore.isActiveFilter) {
      const actualLoans = variant === "marketplace"
      ? loanListStore.marketPlaceLoans
      : loanListStore.collectorLoans
      return actualLoans.filter((v: any) => {
    const {conditionsOfMillipercent, conditionsOfDuty, conditionsOfExpired, conditionsOfDbt} = conditionsFilterLoans(v)
     return conditionsOfMillipercent && conditionsOfDuty && conditionsOfExpired && conditionsOfDbt
    })
    }
    return variant === "marketplace"
      ? loanListStore.marketPlaceLoans
      : loanListStore.collectorLoans
    }
  )}

const pools = computed<Pool[]>(() => {
  if((role.value === 'creditor' || role.value === "investor" || role.value === 'borrower') && filterDataStore.isActiveFilter) {
    const pools = role.value === "investor" ? poolListStore.verifiedPools : poolListStore.pools
    return pools
    .filter((v) => {
    const {conditionsOfMillipercent, conditionsOfFreePeriod, conditionsOfDuration, conditionsOfOverudeMillipercent, conditionsOfAvailableLiquidity} = conditionsFilterPool(v)
    if(role.value === 'borrower') {
      return conditionsOfMillipercent && conditionsOfFreePeriod && conditionsOfDuration && conditionsOfAvailableLiquidity
    }
     return conditionsOfMillipercent && conditionsOfFreePeriod && conditionsOfDuration && conditionsOfOverudeMillipercent
    })
    .sort((a, b) => b.id - a.id)
  }
  else if(role.value === 'creditor') {
    return variant === "all" ? poolListStore.pools.sort((a, b) => b.id - a.id) : poolListStore.creditorPools
  }
  return role.value === "investor" ? poolListStore.verifiedPools.sort((a, b) => b.id - a.id) : poolListStore.pools.sort((a, b) => b.id - a.id)
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
