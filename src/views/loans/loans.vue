<template>
     <h3 v-if="!actualLoans.length && role !== 'creditor'">
      {{ `${role === 'collector' ? 'Задолженности пока отсутствуют' : 'Займы пока отсутствуют'}` }}
    </h3>
    <h3 v-else-if="!actualLoanRequests.length && role === 'creditor'">
      {{ `Займы пока отсутствуют` }}
    </h3>
    <ul class="list-desktop">
      <template v-if="role === 'creditor' && variant === 'bids'">
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
                :variant ="role === 'creditor' ? variant : loan.status"
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
import { useComputedLoanInfo } from "@/composables/infoCalculation/useComputedLoanInfo";

const { variant, selector} = defineProps({
 variant: {
   type: String,
 },
 selector: {
  type: String
 }
});

const amountToChangeStatus = ref(0)

const role = computed(() => {
  return roleStorage.get()
})
const loansStore = useLoanListStore();
const loanRequestStore = useLoanRequestListStroe()

const actualLoanRequests = computed(() => {
   if(selector === 'Одобренные') {
    return loanRequestStore.creditorLoanRequests.filter((v) => v.status === 'approved').sort((a, b) => b.id - a.id)
  }
  else if(selector === 'Ожидание') {
    return loanRequestStore.creditorLoanRequests.filter((v) => v.status === 'pending').sort((a, b) => b.id - a.id)
  }
  else if(selector === 'Отклоненные') {
    return loanRequestStore.creditorLoanRequests.filter((v) => v.status === 'declined').sort((a, b) => b.id - a.id)
  }
  return loanRequestStore.creditorLoanRequests.sort((a, b) => b.id - a.id)
})
const actualLoans = computed(() => {
  if(role.value === 'collector' ) {
    return loansStore.loans.filter(v => v.status === "for_sale").sort((a, b) => b.id - a.id)
  }
  else if(role.value === 'borrower') {
    return loansStore.loans.filter(v => v.status === variant).sort((a, b) => b.id - a.id)
  }
  
  else if(role.value === 'creditor' && variant === 'loans' && selector === 'Погашенные') {
      return loansStore.loans.filter((v) => {
        const {duty, isOverdue} = useComputedLoanInfo(v)
        return v.status === 'paid' && !isOverdue.value
      }).sort((a, b) => b.id - a.id)
  }
  else if(role.value === 'creditor' && variant === 'loans' && selector === 'Проданные') {
      return loansStore.loans.filter((v) => {
        const {duty, isOverdue} = useComputedLoanInfo(v)
        return v.status === 'sold' && !isOverdue.value
      }).sort((a, b) => b.id - a.id)
  }
  else if(role.value === 'creditor' && variant === 'loans' && selector === 'Просроченные') {
      return loansStore.loans.filter((v) => {
        const {duty, isOverdue} = useComputedLoanInfo(v)
        return isOverdue.value
      }).sort((a, b) => b.id - a.id)
  }
  else if(role.value === 'creditor' && variant === 'loans') {
      return loansStore.loans.filter((v) => v.status !== 'for_sale' && v.status !== 'active').sort((a, b) => b.id - a.id)
  }

  else if(role.value === 'creditor' && variant === 'marketplace' && selector === 'На продаже') {
      return loansStore.loans.filter((v) => v.status === 'for_sale').sort((a, b) => b.id - a.id)
  }
  else if(role.value === 'creditor' && variant === 'marketplace' && selector === 'Проданные') {
      return loansStore.loans.filter((v) => v.status === 'sold').sort((a, b) => b.id - a.id)
  }
  else if(role.value === 'creditor' && variant === 'marketplace') {
      return loansStore.loans.filter((v) => v.status === 'for_sale' || v.status === 'sold').sort((a, b) => b.id - a.id)
  }
  return loansStore.loans.sort((a, b) => b.id - a.id)
  
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