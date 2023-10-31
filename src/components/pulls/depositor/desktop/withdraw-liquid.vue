<template>
  <withdraw
    v-if="isWithdraw"
    @close="close"
    @qr="
      () => {
        isWithdraw = false;
        isWithdrawQr = true;
      }
    "
  ></withdraw>
  <confirm-qr-destop
    v-if="isWithdrawQr"
    @close="close"
    @result="
      () => {
        isSuccessWithdraw = true;
        isWithdrawQr = false;
      }
    "
  >
    <template v-slot:header> Пулл #12345 </template>
    <template v-slot:title>Withdraw liquidity</template>
    <template v-slot:subtitle> Scan the QR code with Tonkeeper using </template>
    <template v-slot:link> EQB5...dzE1h </template>
    <template v-slot:action>
      <b class="ton-kepeer">Withdraw</b>
    </template>
    <template v-slot:footer>
      <div class="we-do-not">
        By proceeding, you accept the <br />
        <a>CATOS Terms of Service</a> and <a>Privacy Policy</a>.
      </div>
    </template>
  </confirm-qr-destop>
  <status-modal-desktop v-if="isSuccessWithdraw" @close="close">
    <template v-slot:header> Транзакция №591561351 </template>
    <template v-slot:title> Транзакция успешно выполнена </template>
    <template v-slot:image>
      <img src="@/assets/images/success-transaction.svg" />
    </template>
    <template v-slot:subtitle>
      <p class="status-subtitle">
        Вы успешно вывели 257 324 TON
        <br />
        из пулла
        <a class="status-subtitle-link">#123456</a>

        на свой кошелек <br /><a class="status-subtitle-link"
          >EQB5...dzE1hа44</a
        >
      </p>
      <p class="status-subtitle">
        <a class="status-subtitle-link">Просмотр транзакции в Tonscan</a>
      </p>
    </template>
    <template v-slot:action> Ок </template>
  </status-modal-desktop>
</template>

<script setup lang="ts">
import { ref } from "vue";
import confirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import withdraw from "../../creditor/desktop/modal-body/withdraw.vue";
const isWithdraw = ref(true);
const isWithdrawQr = ref(false);
const isSuccessWithdraw = ref(false);
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>

<style scoped>
.status-subtitle {
  color: rgba(59, 59, 59, 0.96);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  margin: 0;
}
.status-subtitle-link {
  color: rgba(87, 126, 247, 0.96);
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  text-decoration-line: underline;
  cursor: pointer;
}
</style>
