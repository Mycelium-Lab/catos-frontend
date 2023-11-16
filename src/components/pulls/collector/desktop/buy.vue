<template>
  <transaction-desktop v-if="isTransaction && !transactionStatus" @close="isTransaction = false" 
      :status="transactionStatus"
      title="Подтвердите покупку задолжности"
      subtitle="Пожалуйста, подтвердите покупку задолжности в своем кошельке"
    ></transaction-desktop>

    <status-modal-desktop
      v-else-if="isTransaction && transactionStatus === 'success'"
      actionGroupColumn
      :firstAction="toMyLoans"
      :lastAction="close"
      @close="close"
    >
    <template v-slot:header> Получить займ из пулла #12345 </template>

    <template v-slot:title> Транзакция успешно выполнена </template>
    <template v-slot:image>
      <img width="142" src="@/assets/images/success-cash-2.svg" />
    </template>
    <template v-slot:body>
      <div class="by-result">
        Информация о задолженности #124655 успешно <br />
        приобретена
      </div>
    </template>
    <template v-slot:action-first :firstAction="() => toMyLoans()"
      >К выкупленным займам</template
    >
    <template v-slot:action-last :lastAction="() => close"
      >Продолжить покупки</template
    >
  </status-modal-desktop>
    <transaction-desktop v-else-if="isTransaction && transactionStatus === 'fail'" @close="isTransaction = false" 
      :status="transactionStatus"
      title="Произошла ошибка при покупке задолжности"
    >
    </transaction-desktop>
</template>

<script setup lang="ts">
import { buyLoan } from "@/api/loans.api";
import { ref, onMounted } from "vue";
import transactionDesktop from "@/components/base/modals/transaction-desktop.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";

const isTransaction = ref(false)
const transactionStatus = ref('')

onMounted(async () =>{
  isTransaction.value = true
  await buyLoan(poolId, 1)
  .then(res => {
    transactionStatus.value = 'success'
  }).catch(e => {
    transactionStatus.value = 'fail'
    console.error(e)
  })
})

const {poolId} = defineProps({
  poolId: {type: Number, required: true}
})

const emits = defineEmits(["close", "myLoans"]);
const close = () => {
  emits("close");
};
const toMyLoans = () => {
  emits("myLoans");
};


</script>

<style scoped>
.by-result {
  color: rgba(59, 59, 59, 0.72);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  border-radius: 11px;
  background: #f6f4fc;
  padding: 10px 12px;
}
</style>
