<template>
  <desktop-modal v-if="isEnter" @close="close" variant="back" :toBack="toInit">
    <template v-slot:title> Пролонгация займа </template>
    <template v-slot:title-link> #557946 </template>
    <template v-slot:body>
      <prolong-body
        @close="close"
        @payment="
          () => {
            isEnter = false;
            isPayment = true;
          }
        "
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
  <confirm-qr-destop
    v-if="isExtend"
    @close="close"
    variant="back"
    :toBack="
      () => {
        isExtend = false;
        isPayment = true;
      }
    "
    @result="
      () => {
        isExtend = false;
        isResult = true;
      }
    "
  >
    <template v-slot:header> Пролонгация займа </template>
    <template v-slot:header-link> #557946 </template>
    <template v-slot:title>Extend the loan </template>
    <template v-slot:subtitle
      >Scan the QR code and pay 512 TON with Tonkeeper <br />
      using
    </template>
    <template v-slot:link>EQB5...dzE1hа44 </template>
    <template v-slot:action>Extend the loan</template>
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import desktopModal from "@/components/base/desktop-modal.vue";
import prolongBody from "../modal-body/prolong-body.vue";
import ConfirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import paymentMethod from "@/components/base/desktop/modal-body/payment-method.vue";
const { toInit } = defineProps({
  toInit: {
    type: Function,
  },
});
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};

const finish = () => {
  emits("close");
  isResult.value = false;
};

const isEnter = ref(true);
const isPayment = ref(false);
const isExtend = ref(false);
const isResult = ref(false);
</script>

<style scoped></style>
