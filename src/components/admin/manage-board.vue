<template>
  <div class="field-buttons">
    <template v-if="currentPage === 'admin-pannel'">
      <button class="field-button" @click="toManageBids">
        <div class="kyc">Управление заявками и KYC</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
      <button class="field-button" @click="toManageUser">
        <div class="kyc">Управление пользователями</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
      <button class="field-button" @click="toManagePulls">
        <div class="div1">Управление пуллами</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
      <button class="field-button" @click="toManageLoans">
        <div class="div1">Управление займами</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
      <div class="field-button-switch">
        <div class="api">Скоринг по API</div>
        <catos-switch></catos-switch>
      </div>
      <div class="field-button-switch">
        <div class="api">Добавить администратора</div>
        <catos-switch @toggle="(ev: any) => (isAddAdmin = ev)"></catos-switch>
      </div>
      <div class="field-button-switch">
        <div class="api">Сменить пароль</div>
        <catos-switch></catos-switch>
      </div>
    </template>
    <template v-if="currentPage === 'admin-profile'">
      <button class="field-button">
        <div class="kyc">Скрининг по APi</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
      <button class="field-button">
        <div class="kyc">Внести изменения в анкету</div>
        <img class="iconchange" alt="" src="@//views/public/iconchange.svg" />
      </button>
      <div class="field-button-switch">
        <div class="api">Двухфакторная авторизация</div>
        <catos-switch></catos-switch>
      </div>
    </template>
    <add-admin
      v-if="isAddAdmin"
      @close="() => (isAddAdmin = false)"
    ></add-admin>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
// @ts-ignore
import catosSwitch from "@/components/ui-kit/catos-switch.vue";
// @ts-ignore
// @ts-ignore
import addAdmin from "@/components/admin/modal-body/add-admin.vue";

import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const currentPage = computed(() => {
  return route.name;
});
const isAddAdmin = ref(false);

const router = useRouter();
const toManageBids = () => {
  router.push({ name: "manage-bids" });
};
const toManageUser = () => {
  router.push({ name: "manage-user" });
};
const toManagePulls = () => {
  router.push({ name: "manage-pulls" });
};
const toManageLoans = () => {
  router.push({ name: "manage-loans" });
};
</script>
<style scoped>
.kyc {
  position: relative;
  font-size: 0.88rem;
  line-height: 130%;
  z-index: 0;
  color: #3b3b3b;
  font-family: Inter;
}
.iconchange {
  position: absolute;
  margin: 0 !important;
  height: 100%;
  top: 0em;
  right: 0em;
  bottom: 0em;
  max-height: 100%;
  width: 2.5em;
  z-index: 1;
}
.field-button {
  align-self: stretch;
  border-radius: 8px;
  background-color: #f5f5fa;
  height: 2.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0em 0.5em 0.75em;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border: none;
  cursor: pointer;
}
.div1 {
  position: relative;
  font-size: 0.88rem;
  line-height: 140%;
  z-index: 0;
  color: #3b3b3b;
  font-family: Inter;
}
.api {
  position: relative;
  font-size: 0.88rem;
  line-height: 130%;
  color: #3b3b3b;
}
.handle {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 50%;
  background-color: #79747e;
  width: 1em;
  height: 1em;
  z-index: 1;
}
.overlay {
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  border-radius: 100px;
  background-color: #1c1b1f;
  width: 1em;
  height: 1em;
  display: none;
  opacity: 0.08;
  z-index: 0;
}
.handle-container {
  width: 2em;
  height: 2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.switch {
  border-radius: 100px;
  background-color: #e7e0ec;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  width: 3.25em;
  height: 1.75em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.field-button-switch {
  align-self: stretch;
  border-radius: 8px;
  background-color: #f5f5fa;
  display: flex;
  flex-direction: row;
  padding: 0.5em 0.63em;
  align-items: center;
  justify-content: space-between;
}
.bg-hover-icon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 8px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.tag {
  position: absolute;
  top: calc(50% - 11px);
  left: 1.21em;
  font-size: 0.88em;
  line-height: 1.5em;
}
.tags-grey {
  position: relative;
  width: 6.25em;
  height: 2.25em;
  display: none;
  text-align: center;
  color: #8181a5;
  font-family: Lato;
}
.field-buttons {
  position: relative;
  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(46, 58, 89, 0.08);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25em;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
