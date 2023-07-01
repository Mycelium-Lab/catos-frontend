<template>
  <confirm-qr-destop @close="close" @result="close">
    <template v-slot:header> Займ из пулла #12345 </template>
    <template v-slot:title>Repay the loan</template>
    <template v-slot:subtitle>
      Scan the QR code and pay 13 512 TON with <br />
      Tonkeeper using
    </template>
    <template v-slot:link> EQB5...dzE1hа44 </template>
    <template v-slot:action>Repay the loan </template>
    <template v-slot:footer>
      By proceeding, you accept the <br />
      and Privacy Policy.
    </template>
  </confirm-qr-destop>
</template>

<script setup lang="ts">
import ConfirmQrDestop from "@/components/base/confirm-qr-destop.vue";
const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};
</script>

<style scoped></style>
