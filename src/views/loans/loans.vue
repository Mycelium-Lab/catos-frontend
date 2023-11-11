<template>
    <!-- <h3 v-if="!loanListStore.loans.length">
      Займы пока отсутствуют
    </h3>-->
    <ul class="list-desktop">
      <!-- <li
           v-for="loan in variant === 'active' ? loanListStore.activeLoan
            : variant === 'repaid' ? loanListStore.paidLoan
            : variant === 'sold' ? loanListStore.soldLoan
            : loanListStore.loans"
            :key="loan.id"
        >
            <loans-table
                :variant="variant"
                :key="variant"
                :status="status"
            >
          </loans-table>
       </li> -->
       <li
           v-for="n in 5"
            :key="n"
        >
            <loans-table
                :variant="variant"
                :key="variant"
                :status="getStatus(n)"
            >
          </loans-table>
        </li>
     </ul>
</template>

<script setup lang="ts">
import {computed} from "vue"
import loansTable from "@/components/loans/creditor/loans-table.vue";
import { useLoanListStore } from "@/stores/loanList";

const loanListStore = useLoanListStore();

const { variant, role } = defineProps({
 variant: {
   type: String,
 },
 role: {
   type: String,
 },
});

const getStatus = (id: number) => {
    if(id !== 1 && id !== 2) {
        return 'overdue'
    }
    else {
        return 'active'
    }
}
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