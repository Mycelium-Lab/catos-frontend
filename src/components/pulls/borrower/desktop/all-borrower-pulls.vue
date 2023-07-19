<template>
  <detail
    v-if="isDetailOther"
    @close="close"
    @get-loan="
      () => {
        isDetailOther = false;
        isGetLoan = true;
      }
    "
    @invest="
      {
        isDetailOther = false;
        isInvest = true;
      }
    "
  >
  </detail>
  <desktop-modal
    v-if="isGetLoan"
    @close="close"
    variant="back"
    :toBack="
      () => {
        isGetLoan = false;
        isDetailOther = true;
      }
    "
  >
    <template v-slot:title> Получить займ из пулла #12345 </template>
    <template v-slot:body>
      <get-loan
        @payment="
          () => {
            isGetLoan = false;
            isPayment = true;
          }
        "
      ></get-loan>
    </template>
  </desktop-modal>

  <desktop-modal
    v-if="isPayment"
    @close="close"
    variant="back"
    :toBack="
      () => {
        isPayment = false;
        isGetLoan = true;
      }
    "
  >
    <template v-slot:title> Получить займ из пулла #12345 </template>

    <template v-slot:body>
      <payment-method
        @qr="
          () => {
            isPayment = false;
            isQr = true;
          }
        "
      ></payment-method>
    </template>
  </desktop-modal>
  <confirm-qr-destop
    v-if="isQr"
    @close="close"
    variant="back"
    :toBack="
      () => {
        isQr = false;
        isPayment = true;
      }
    "
    @result="
      () => {
        isQr = false;
        isResult = true;
      }
    "
  >
    <template v-slot:header> Получить займ из пулла #12345 </template>

    <template v-slot:title>Take the loan</template>
    <template v-slot:subtitle
      >Scan the QR code with your phone's camera or <br />Tonkeeper
    </template>

    <template v-slot:action>Make transaction with Tokenkeeper</template>
    <template v-slot:footer
      >By proceeding, you accept the <br />
      CATOS Terms of Service and Privacy Policy.</template
    >
  </confirm-qr-destop>
  <get-loan-success v-if="isResult" @close="close"></get-loan-success>
  <desktop-modal
    v-if="isInvest"
    @close="close"
    variant="back"
    :toBack="
      () => {
        isInvest = false;
        isDetailOther = true;
      }
    "
  >
    <template v-slot:title> Получить статус инвестора </template>
    <template v-slot:body>
      <invest></invest>
    </template>
  </desktop-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import detail from "./modal-body/detail.vue";
import getLoan from "./modal-body/get-loan.vue";
import invest from "./modal-body/invest.vue";
import paymentMethod from "@/components/base/desktop/modal-body/payment-method.vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import ConfirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import getLoanSuccess from "@/components/pulls/borrower/desktop/modal-body/get-loan-success.vue";

const { state } = defineProps({
  state: {
    type: Object,
    required: true,
  },
});
const isDetailOther = ref(state.detailOtherModal);
const isGetLoan = ref(state.getLoanModal);
const isPayment = ref(false);
const isQr = ref(false);
const isResult = ref(false);
const isInvest = ref(false);
const emits = defineEmits(["close", "get-loan"]);

const loan = () => {
  emits("get-loan");
};
const close = () => {
  emits("close");
};
</script>

<style scoped></style>
