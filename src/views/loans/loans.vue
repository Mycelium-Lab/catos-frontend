<template>
     <h3 v-if="!actualLoans.length">
      Займы пока отсутствуют
    </h3>
    <ul class="list-desktop">
      <li
           v-for="loan in actualLoans"
            :key="loan.id"
        >
            <loans-table
                :key="variant"
                :loan="loan"
                :variant ="loan.status"
            >
          </loans-table>
       </li> 
     </ul>
</template>

<script setup lang="ts">
import loansTable from "@/components/loans/creditor/loans-table.vue";
import { useLoanListStore } from "@/stores/loanList";
import { computed } from "vue";


const { variant} = defineProps({
 variant: {
   type: String,
 }
});
const loansStore = useLoanListStore();

const actualLoans = computed(() => {
    return loansStore.loans.filter(v => v.status === variant) 
})

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