<template>
  <desktop-modal v-if="isEnter" @close="close" variant="back" :toBack="toInit">
    <template v-slot:title> Пролонгация займа </template>
    <template v-slot:title-link> #557946 </template>
    <template v-slot:body>
      <prolong-body
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
    <template v-slot:title-link> #557946 </template>
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
    <template v-slot:header-link> #557946 </template>
    <template v-slot:title> Займ #557946 пролонгирован </template>
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
  <transaction-desktop v-if="isTransaction && !transactionStatus" @close="isTransaction = false" :status="transactionStatus"></transaction-desktop>
    <transaction-desktop v-else-if="isTransaction && transactionStatus === 'success'" @close="isTransaction = false" :status="transactionStatus"></transaction-desktop>
    <transaction-desktop v-else-if="isTransaction && transactionStatus === 'fail'" @close="isTransaction = false" :status="transactionStatus"></transaction-desktop>
</template>

<script setup lang="ts">
import { ref } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import prolongBody from "../modal-body/prolong-body.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import transactionDesktop from "@/components/base/modals/transaction-desktop.vue";
import { prolongateLoan } from "@/api/loans.api";

const { toInit, id } = defineProps({
  toInit: {
    type: Function,
  },
  id: {type: Number, required: true}
});
const emits = defineEmits(["close"]);

const isTransaction = ref(false)
const transactionStatus = ref('')


const close = () => {
  emits("close");
};

const finish = () => {
  emits("close");
  isResult.value = false;
};

const handlePayment = async (value: number) => {
  isTransaction.value = true
  await prolongateLoan(id, value)
  .then(res => {
    transactionStatus.value = 'success'
  }).catch(e => {
    transactionStatus.value = 'fail'
    console.error(e)
  })
}

const isEnter = ref(true);
const isPayment = ref(false);
const isExtend = ref(false);
const isResult = ref(false);
</script>

<style scoped></style>
