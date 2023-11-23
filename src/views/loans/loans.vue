<template>
     <h3 v-if="!actualLoans.length && role !== 'creditor'">
      {{ `${role === 'collector' ? 'Задолженности пока отсутствуют' : 'Займы пока отсутствуют'}` }}
    </h3>
    <h3 v-else-if="!actualLoanRequests.length && role === 'creditor'">
      {{ `Займы пока отсутствуют` }}
    </h3>
    <ul class="list-desktop">
      <template  v-if="role === 'creditor'">
        <li
            v-for="loan in actualLoanRequests"
            :key="loan.id"
        >
        <loans-table  
                :key="variant"
                :loanRequest="loan"
                :variant ="variant"
                @on-active-checkbox="() => {
                  amountToChangeStatus += 1
                }"
                  @on-inactive-checkbox="() => {
                  amountToChangeStatus -= 1
                }"
                :amountToChangeStatus="amountToChangeStatus"
            >
          </loans-table>
      </li>
      </template>
      <template v-else>
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
      </template>
     </ul>
</template>

<script setup lang="ts">
import loansTable from "@/components/loans/creditor/loans-table.vue";
import { useLoanListStore } from "@/stores/loanList";
import { computed, ref } from "vue";
import { roleStorage } from "@/utils/localStorage";
import { useLoanRequestListStroe } from "@/stores/loanRequestList";
const { variant} = defineProps({
 variant: {
   type: String,
 }
});

const amountToChangeStatus = ref(0)

const role = computed(() => {
  return roleStorage.get()
})
const loansStore = useLoanListStore();
const loanRequestStore = useLoanRequestListStroe()

const actualLoanRequests = computed(() => {
    return loanRequestStore.creditorLoanRequests
})
const actualLoans = computed(() => {
  if(role.value === 'collector' ) {
    return loansStore.loans.filter(v => v.status === "for_sale") 
  }
  // bayerLoans
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