<template>
  <default-desktop>
    <template v-slot:title> Чеки </template>
    <template v-slot:body>
      <div class="des-1-2">
        <div class="des-2">
          <div class="div-desktop">
            Создайте чек и оправьте его (ссылку) получаетелю. Перейдя по ссылке
            чека получатель сможет его активировать и получить криптовалюту в
            удобное для него время
          </div>
        </div>
        <div class="des-ckecks-desktop">
          <img
            class="des-child"
            alt=""
            src="@/assets/desktop/fallback/frame-1817887@2x.png"
          />
          <div class="div1">
            Отправляйте криптовалюту используя виртуальные чеки. Забудьте про
            длинные адреса кошельков и ожидание подтверждения транзакций.
          </div>
        </div>
      </div>
      <catos-button variant="secondary" @click="() => (isCreateCheck = true)"
        >Создать чек</catos-button
      >
      <checks-table></checks-table>
    </template>
  </default-desktop>
  <desktop-modal v-if="isCreateCheck" @close="() => (isCreateCheck = false)">
    <template v-slot:title> Создать чек </template>
    <template v-slot:body>
      <create-checks @close="() => (isCreateCheck = false)"></create-checks>
    </template>
  </desktop-modal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import defaultDesktop from "@/components/layouts/default-desktop.vue";
import CatosButton from "@/components/ui-kit/buttons/catos-button.vue";
import checksTable from "./checks-table.vue";
import createChecks from "../modal-body/create-checks.vue";
import DesktopModal from "@/components/base/desktop-modal.vue";

const isCreateCheck = ref(false);
</script>
<style scoped>
.div-desktop {
  align-self: stretch;
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  font-weight: 300;
}
.des-2 {
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(165, 146, 221, 0.4);
  box-sizing: border-box;
  width: 48.75em;
  display: flex;
  flex-direction: column;
  padding: 3.5em 1.25em 1.25em;
  align-items: center;
  justify-content: center;
}
.des-child {
  position: relative;
  width: 3.16em;
  height: 3.16em;
  object-fit: cover;
}
.div1 {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  display: flex;
  align-items: center;
  width: 49.57em;
  flex-shrink: 0;
}
.des-ckecks-desktop {
  position: absolute;
  top: 0em;
  left: 0em;
  border-radius: 16px;
  background-color: #f8f6fc;
  width: 48.75em;
  display: flex;
  flex-direction: row;
  padding: 0.63em 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.38em;
  color: #78789a;
}
.des-1-2 {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 9.1em;
  text-align: left;
  color: #8181a5;
  font-family: Inter;
}
</style>
