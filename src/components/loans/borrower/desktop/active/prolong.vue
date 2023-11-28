<template>
  <desktop-modal v-if="isEnter" @close="close" variant="back" :toBack="toInit">
    <template v-slot:title> Пролонгация займа </template>
    <template v-slot:title-link>#{{loan?.id }} </template>
    <template v-slot:body>
      <prolong-body
        :loan="loan"
        @close="close"
        @prolong="handlePayment"
      ></prolong-body>
    </template>
  </desktop-modal>
  <desktop-modal
    v-if="isPayment"
    @close="close"
    variant="back"
    :toBack="
      () => {
        isPayment = false;
        isEnter = true;
      }
    "
  >
    <template v-slot:title> Пролонгация займа </template>
    <template v-slot:title-link> #{{loan?.id }} </template>
    <template v-slot:body>
      <payment-method
        @qr="
          () => {
            isPayment = false;
            isExtend = true;
          }
        "
      ></payment-method>
    </template>
  </desktop-modal>
  
  <status-modal-desktop
    v-if="isResult"
    actionGroupColumn
    :lastAction="finish"
    @close="close"
  >
    <template v-slot:header> Пролонгация займа </template>
    <template v-slot:header-link> #{{loan?.id }} </template>
    <template v-slot:title> Займ #{{loan?.id }} пролонгирован </template>
    <template v-slot:image>
      <img width="142" src="@/assets/images/revert-cash.svg" />
    </template>
    <template v-slot:body>
      <div class="prolong-result">
        Дата возврата продлена <br />
        на 15 дней до 29.03.23
      </div>
    </template>
    <template v-slot:action-first>Посмотреть информацию о займе</template>
    <template v-slot:action-last>Перейти в мои займы</template>
  </status-modal-desktop>
  <transaction-desktop v-if="isTransaction" 
    @close="isTransaction = false" 
    :uid="uid"
    titlePending="Подтвердите пролонгацию займа"
    subtitlePending="Пожалуйста, подтвердите пролонгацию займа в своем кошельке"
    subtitleSuccess="Вы успешно пролонгировали займ"
    titleFaild="Произошла ошибка при пролонгации займа"
    ></transaction-desktop>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import prolongBody from "../modal-body/prolong-body.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import transactionDesktop from "@/components/base/modals/transaction-desktop.vue";
import { prolongateLoan } from "@/api/loans.api";
import { LoansResponse } from "@/types/loan.types";

const { toInit, id } = defineProps({
  toInit: {
    type: Function,
  },
  id: {type: Number, required: true},
  loan: {
    type: Object as PropType<LoansResponse>,
  },
});
const emits = defineEmits(["close"]);

const isTransaction = ref(false)



const close = () => {
  emits("close");
};

const finish = () => {
  emits("close");
  isResult.value = false;
};

const handlePayment = async (value: number) => {
  await prolongateLoan(id, value)
  .then(res => {
    isTransaction.value = true
    uid.value = res.data
  }).catch(e => {
    
  })
}

const isEnter = ref(true);
const isPayment = ref(false);
const isExtend = ref(false);
const isResult = ref(false);
const uid = ref()
</script>

<style scoped></style>
