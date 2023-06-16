<template>
  <router-link class="nav-buttons" to="" @click="$router.go(-1)">
    <div class="buttonback">
      <div class="div22">Назад</div>
      <img class="search-icon" alt="" src="@/assets/images/search-icon.svg" />
    </div>
  </router-link>
  <default-wallet-overlay>
    <div class="div">
      <div class="header-parent">
        <slot></slot>
      </div>
    </div>
  </default-wallet-overlay>
</template>

<script setup lang="ts">
import { ref } from "vue";

import defaultWalletOverlay from "../layouts/default-wallet-overlay.vue";
const value = ref("");
const options = {
  sng: ["Россия", "Украина", "Казахстан"],
  euro: ["Польша", "Латвия", "Молдова"],
};
</script>

<style scoped lang="scss">
.header-parent,
.swipe-down1 {
  position: absolute;
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
  height: 0.31em;
}
.header-parent {
  left: 0;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  box-shadow: 0 12px 12px rgba(151, 71, 255, 0.04);
  height: 100%;
  overflow: hidden;
  width: 100vw;
  overflow-y: auto;
}

.div {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 80vh;

  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow-x: hidden;
  z-index: 2000;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  font-size: 1rem;
}
.buttonback {
  position: relative;
  border-radius: 9px;
  background-color: rgba(251, 251, 251, 0.42);
  width: 6.38em;
  height: 2.5em;
  top: 2.6em;
  left: 0em;
  color: rgba(59, 59, 59, 1);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.nav-buttons {
  position: absolute;
  top: 2em;
  left: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.div {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 80vh;

  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow-x: hidden;
  z-index: 2000;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  font-size: 1rem;
}
.div22 {
  position: absolute;
  top: 0.43em;
  left: 3.29em;
  font-size: 0.88em;
  line-height: 2em;
  font-weight: 300;
}
.search-icon {
  position: absolute;
  top: calc(50% - 20px);
  right: 3.88em;
  border-radius: 10px;
  width: 2.5em;
  height: 2.5em;
  overflow: hidden;
}
</style>
