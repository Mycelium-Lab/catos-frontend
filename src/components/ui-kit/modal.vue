<template>
  <router-link class="nav-buttons" to="" @click="$router.go(-1)">
    <div class="buttonback">
      <div class="div22">Назад</div>
      <img class="search-icon" alt="" src="@/assets/images/search-icon.svg" />
    </div>
  </router-link>

  <default-pulls-overlay v-if="from === 'pulls' || from === 'collector'">
    <template v-slot:title>
      {{ from === "pulls" ? " Кредитные пуллы" : "Задолженности" }}
    </template>
    <div class="div">
      <div class="header-parent">
        <slot></slot>
      </div>
    </div>
  </default-pulls-overlay>

  <default-pulls-overlay v-else-if="from === 'prolong'">
    <div class="div">
      <div class="header-parent">
        <slot></slot>
      </div>
    </div>
  </default-pulls-overlay>

  <default-wallet-overlay v-else>
    <template v-slot:title>
      {{ from === "setting" ? "Профиль" : "Кошелек CATOS" }}
    </template>
    <div class="div">
      <div class="header-parent">
        <slot></slot>
      </div>
    </div>
  </default-wallet-overlay>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

onMounted(() => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

import defaultWalletOverlay from "../layouts/default-wallet-overlay.vue";
import defaultPullsOverlay from "../layouts/default-pulls-overlay.vue";

const { from } = defineProps({
  from: { type: String },
});
console.log(from);
const value = ref("");
const options = {
  sng: ["Россия", "Украина", "Казахстан"],
  euro: ["Польша", "Латвия", "Молдова"],
};
</script>

<style scoped lang="scss">
.header-parent,
.swipe-down1 {
  position: relative;
  top: 0.75em;
  left: 10.81em;
  border-radius: 25px;
  background-color: #cad0e4;
  width: 2.63em;
}
.header-parent {
  left: 0;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
  width: 100vw;
}

.div {
  position: relative;
  background-color: #fff;
  width: 100%;
  //height: 100vh; /* фолбэк для браузеров, которые не поддерживают пользовательские свойства */
  //height: calc(var(--vh, 1vh) * 100);

  min-height: 100vh;

  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
  overflow: hidden;
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
  left: 0em;
  color: rgba(59, 59, 59, 1);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.nav-buttons {
  position: absolute;
  top: 3em;
  left: 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
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
