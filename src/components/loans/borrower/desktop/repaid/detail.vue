<template>
  <status-modal-desktop
    variant="back"
    :toBack="close"
    @close="close"
    actionGroup
    :firstAction="close"
  >
    <template v-slot:header> Займ из пулла #12345 </template>
    <template v-slot:title> Займ #12456 получен </template>
    <template v-slot:image>
      <img src="@/assets/images/success-cash-2.svg" />
    </template>
    <template v-slot:subtitle>
      <div class="subtitle">
        <b>13 000 TON</b> <br />
        Были отправлены на ваш кошелек: <br />
        <a class="link">EQB5...dzE1hа44</a>
      </div>
    </template>
    <template v-slot:body>
      <detail-repaid @prolong="prolong"></detail-repaid>
    </template>
    <template v-slot:action-first>Назад в мои займы</template>
    <template v-slot:action-last>Получить новый займ</template>
  </status-modal-desktop>
</template>

<script setup lang="ts">
import statusModalDesktop from "@/components/base/status-modal-desktop.vue";
import detailRepaid from "../modal-body/detail-repaid.vue";
const emits = defineEmits(["close", "prolong"]);

const close = () => {
  emits("close");
};
const prolong = () => {
  emits("prolong");
};
</script>

<style scoped lang="scss">
.subtitle {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #3b3b3b;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
}
.link {
  cursor: pointer;
  text-decoration: underline;
  color: rgba(87, 126, 247, 0.96);
  &:hover {
    text-decoration: none;
  }
}
</style>
