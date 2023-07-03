<template>
  <add
    v-if="isAdd"
    @close="close"
    @qr="
      () => {
        isAdd = false;
        isAddQr = true;
      }
    "
  ></add>
  <confirm-qr-destop
    v-if="isAddQr"
    @close="close"
    @result="
      () => {
        isSuccessAdd = true;
        isAddQr = false;
      }
    "
  >
    <template v-slot:header> Пулл #12345 </template>
    <template v-slot:title>Add liquidity</template>
    <template v-slot:subtitle>
      Scan the QR code and pay 13 512 TON <br />
      with Tonkeeper using
    </template>
    <template v-slot:link> EQB5...dzE1h </template>
    <template v-slot:action>
      <b class="ton-kepeer">Add liquidity</b>
    </template>
    <template v-slot:footer>
      <div class="we-do-not">
        By proceeding, you accept the <br />
        <a>CATOS Terms of Service</a> and <a>Privacy Policy</a>.
      </div>
    </template>
  </confirm-qr-destop>
  <status-modal-desktop v-if="isSuccessAdd" @close="close">
    <template v-slot:header> Транзакция №591561351 </template>
    <template v-slot:title> Транзакция успешно выполнена </template>
    <template v-slot:image>
      <img src="@/assets/images/success-transaction.svg" />
    </template>
    <template v-slot:subtitle>
      <p class="status-subtitle">
        Вы успешно добавили 257 324 TON
        <br />
        в пулл
        <a class="status-subtitle-link">#123456</a>
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
import add from "../../creditor/desktop/modal-body/add.vue";
import confirmQrDestop from "@/components/base/confirm-qr-destop.vue";
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
const isAdd = ref(true);
const isAddQr = ref(false);
const isSuccessAdd = ref(false);
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
