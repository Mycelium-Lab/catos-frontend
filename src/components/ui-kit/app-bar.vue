<template>
  <div class="bar">
    <ul class="bar-list">
      <li class="item">
        <router-link class="navigation" to="/">
          <img src="@/assets/home-not-active.svg" alt="" />
          <span class="name">Пуллы</span>
        </router-link>
      </li>
      <li class="item">
        <router-link class="navigation" to="/">
          <img src="@/assets/basket.svg" alt="" />
          <span class="name">Займы</span>
        </router-link>
      </li>
      <li class="item_dash item">
        <router-link class="navigation" to="/">
          <img src="@/assets/news.svg" alt="" />
          <span class="name">Дашбоард</span>
        </router-link>
      </li>
      <li class="item">
        <router-link class="navigation" :to="{ name: 'setting' }">
          <img
            v-if="currentPage === 'setting'"
            src="@/assets/setting.svg"
            alt=""
          />
          <img v-else src="@/assets/setting-not-active.svg" alt="" />
          <span class="name">Настройки</span>
        </router-link>
      </li>
      <li class="item">
        <router-link class="navigation" :to="{ name: 'wallet' }">
          <img
            v-if="currentPage === 'wallet'"
            src="@/assets/wallet.svg"
            alt=""
          />
          <img v-else src="@/assets/wallet-not-active.svg" alt="" />
          <span class="name">Кошелек</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const currentPage = computed(() => {
  return route.name;
});
</script>

<style scoped class="scss">
.bar {
  display: flex;
  align-items: center;
  height: 82px;
  width: 100vw;
  background: #ffffff;

  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 20px 20px 0px 0px;
  position: fixed;
  bottom: 0em;
}
.bar-list {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0em;
  margin: 0em;
  width: 100%;
  margin: 0 auto;
  padding: 20px 32px 20px 32px;
}
.navigation {
  position: relative;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.name {
  font-size: 10px;
  color: rgba(48, 51, 55, 0.9);
  font-weight: 300;
  top: 0em;
  position: relative;
}

.navigation img {
  width: 30px;
  height: 30px;
}
.bar-list .item {
}
</style>
