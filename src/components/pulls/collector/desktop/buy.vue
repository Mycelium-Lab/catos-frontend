<template>
  <transaction-desktop v-if="isTransaction" @close="isTransaction = false" 
    :uid="uid"
    titlePending="Подтвердите покупку задолженности"
    subtitlePending="Пожалуйста, подтвердите покупку задолженности в своем кошельке"
    subtitleSuccess="Вы успешно создали пулл"
    titleFaild="Произошла ошибка при покупке задолженности"
    ></transaction-desktop>

    <status-modal-desktop
      v-else-if="isTransaction"
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
</template>

<script setup lang="ts">
import { buyLoan } from "@/api/loans.api";
import { ref, onMounted } from "vue";
import transactionDesktop from "@/components/base/modals/transaction-desktop.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";

const isTransaction = ref(false)
const uid = ref()

onMounted(async () =>{
  await buyLoan(poolId, price)
  .then(res => {
    isTransaction.value = true
    uid.value = res.data
  }).catch(e => {
  })
})

const {poolId, price} = defineProps({
  poolId: {type: Number, required: true},
  price: {type: Number, required: true}
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
