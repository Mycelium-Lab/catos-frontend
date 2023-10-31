<template>
  <desktop-modal v-if="isPayment" @close="close">
    <template v-slot:title> Покупка задолженности #12345 </template>

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
  <confirm-qr-destop
    v-if="isExtend"
    @close="close"
    @result="
      () => {
        isExtend = false;
        isResult = true;
      }
    "
  >
    <template v-slot:header> Покупка задолженности #12345 </template>
    <template v-slot:title>Take the loan </template>
    <template v-slot:subtitle
      >Scan the QR code with your phone's camera or <br />Tonkeeper
    </template>

    <template v-slot:action>Make transaction with Tokenkeeper</template>
    <template v-slot:footer
      >By proceeding, you accept the <br />
      CATOS Terms of Service and Privacy Policy.</template
    >
  </confirm-qr-destop>
  <status-modal-desktop
    v-if="isResult"
    actionGroupColumn
    :lastAction="finish"
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
import { ref } from "vue";
// @ts-ignore
import desktopModal from "@/components/base/desktop-modal.vue";
// @ts-ignore
import ConfirmQrDestop from "@/components/base/confirm-qr-destop.vue";
// @ts-ignore
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
// @ts-ignore
import paymentMethod from "@/components/base/desktop/modal-body/payment-method.vue";
const emits = defineEmits(["close", "myLoans"]);
const close = () => {
  emits("close");
};
const toMyLoans = () => {
  console.log("sold");
  emits("myLoans");
};

const finish = () => {
  emits("close");
  isResult.value = false;
};

const isPayment = ref(true);
const isExtend = ref(false);
const isResult = ref(false);
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
