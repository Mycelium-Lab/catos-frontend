<template>
   <h3 v-if="!pools.length || !loans.length">
      {{ `${role === 'collector' ? 'Задолжности пока отсутствуют' : 'Пуллы пока отсутствуют'}` }}
    </h3>
   <ul v-if="role === 'collector'" class="list-desktop">
        <li
            v-for="loan in loans"
            :key="loan.id"
        >
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
        <li
            v-for="pool in pools"
            :key="pool.id"
        >
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
import { Pool } from "@/types/pool.type";
import { LoansResponse } from "@/types/loan.types";
import pullsTable from "@/components/pulls/desktop/pulls-table.vue";
import { usePoolListStore } from "@/stores/poolList";
import { useLoanListStore } from "@/stores/loanList";

const poolListStore = usePoolListStore();
const loanListStore = useLoanListStore()
const { variant, role } = defineProps({
  variant: {
    type: String,
  },
  role: {
    type: String,
  },
});


const loans = computed<LoansResponse[]>(() => variant === 'marketplace' ? loanListStore.marketPlaceLoans : loanListStore.collectorLoans)
const pools = computed<Pool[]>(() => role === 'depositor' ? poolListStore.verifiedPools : poolListStore.pools);

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