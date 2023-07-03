<template>
  <default-desktop>
    <template v-slot:title> Счета </template>
    <template v-slot:body>
      <div class="des">
        <img class="des-child" alt="" src="@/assets/desktop/accounts.png" />
        <div class="div-desktop">
          Здесь вы можете создать счёт для получения оплаты или сбора средств в
          криптовалюте.
        </div>
      </div>
      <catos-button variant="secondary" @click="() => (isCreateAccount = true)"
        >Создать счет</catos-button
      >
      <accounts-table></accounts-table>
    </template>
  </default-desktop>
  <desktop-modal
    v-if="isCreateAccount"
    @close="() => (isCreateAccount = false)"
  >
    <template v-slot:title> Создание счета </template>
    <template v-slot:body>
      <create-accounts
        @create="
          () => {
            isCreateAccount = false;
            isToUp = true;
          }
        "
      ></create-accounts>
    </template>
  </desktop-modal>

  <desktop-modal v-if="isToUp" @close="() => (isToUp = false)">
    <template v-slot:title> Пополнение </template>
    <template v-slot:body>
      <to-up-accounts @close="() => (isToUp = false)"></to-up-accounts>
    </template>
  </desktop-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import defaultDesktop from "@/components/layouts/default-desktop.vue";
import CatosButton from "@/components/ui-kit/buttons/catos-button.vue";
import accountsTable from "../accounts/accounts-table.vue";
import DesktopModal from "@/components/base/desktop-modal.vue";
import createAccounts from "../modal-body/create-accounts.vue";
import toUpAccounts from "../modal-body/to-up-accounts.vue";

const isCreateAccount = ref(false);
const isToUp = ref(false);
</script>

<style scoped>
.des-child {
  position: relative;
  width: 3em;
  height: 3.16em;
  object-fit: cover;
}
.div-desktop {
  position: relative;
  font-size: 0.88em;
  line-height: 130%;
  display: flex;
  align-items: center;
  width: 49.57em;
  flex-shrink: 0;
}
.des {
  position: relative;
  border-radius: 16px;
  background-color: #f8f6fc;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1.25em;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 0.38em;
  text-align: left;
  color: #78789a;
  font-family: Inter;
}
</style>
