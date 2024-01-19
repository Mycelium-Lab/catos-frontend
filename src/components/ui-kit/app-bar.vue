<template>
  <div class="bar">
    <ul class="bar-list">
      <!--COLLECTOR-->
      <template v-if="role === 'collector'">
        <li class="item">
          <router-link class="navigation" :to="{ name: 'pulls-collector' }">
            <!-- <svg width="34" height="34">
              <use
                :class="currentPage === 'pulls-collector' ? 'active' : ''"
                href="@/assets/home.svg#home"
              ></use>
            </svg>
          -->
            <img
              v-if="currentPage === 'pulls-collector'"
              :style="{ position: 'relative', top: '0.15em' }"
              src="@/assets/home.svg"
              alt=""
            />
            <img
              v-else
              :style="{ position: 'relative', top: '0.15em' }"
              src="@/assets/home-not-active.svg"
              alt=""
            />
            <span class="name">Задолженности</span>
          </router-link>
        </li>
        <li class="item">
          <router-link class="navigation" :to="{ name: 'setting' }">
            <img
              v-if="currentPage === 'setting'"
              src="@/assets/iconsuser.svg"
              alt=""
            />
            <img v-else src="@/assets/user-not-active.svg" alt="" />
            <span class="name">Профиль</span>
          </router-link>
        </li>
        <!--<li class="item">
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
      -->
      </template>

      <!--BORROWER-->
      <template v-else-if="role === 'borrower'">
        <li class="item">
          <router-link class="navigation" :to="{ name: 'pulls-borrower' }">
            <img
              v-if="currentPage === 'pulls-borrower'"
              :style="{ position: 'relative', top: '0.15em' }"
              src="@/assets/home.svg"
              alt=""
            />
            <img
              v-else
              :style="{ position: 'relative', top: '0.15em' }"
              src="@/assets/home-not-active.svg"
              alt=""
            />
            <span class="name">Пулы</span>
          </router-link>
        </li>
        <li class="item">
          <router-link class="navigation" :to="{ name: 'loans-borrower' }">
            <img
              v-if="currentPage === 'loans-borrower'"
              src="@/assets/basket.svg"
              alt=""
            />
            <img v-else src="@/assets/basket-not-active.svg" alt="" />
            <span class="name">Займы</span>
          </router-link>
        </li>
        <li class="item">
          <router-link class="navigation" :to="{ name: 'setting' }">
            <img
              v-if="currentPage === 'setting'"
              src="@/assets/iconsuser.svg"
              alt=""
            />
            <img v-else src="@/assets/user-not-active.svg" alt="" />
            <span class="name">Профиль</span>
          </router-link>
        </li>
        <!--<li class="item">
          <router-link class="navigation" :to="{ name: 'wallet' }">
            <img
              v-if="currentPage === 'wallet'"
              src="@/assets/wallet.svg"
              alt=""
            />
            <img v-else src="@/assets/wallet-not-active.svg" alt="" />
            <span class="name">Кошелек</span>
          </router-link>
        </li>-->
      </template>

      <template v-else>
        <li class="item">
          <router-link
            class="navigation"
            :to="{ name: role === 'creditor' ? 'pulls' : 'pulls-depositor' }"
          >
            <img
              v-if="
                currentPage === 'pulls' || currentPage === 'pulls-depositor'
              "
              src="@/assets/home.svg"
              alt=""
            />
            <img v-else src="@/assets/home-not-active.svg" alt="" />
            <span class="name">Пулы</span>
          </router-link>
        </li>
        <li v-if="role === 'creditor'" class="item">
          <router-link class="navigation" :to="{ name: 'loans' }">
            <img
              v-if="currentPage === 'loans'"
              src="@/assets/basket.svg"
              alt=""
            />
            <img v-else src="@/assets/basket-not-active.svg" alt="" />
            <span class="name">Займы</span>
          </router-link>
        </li>
        <li class="item_dash item">
          <router-link
            class="navigation"
            :to="{
              name: role === 'creditor' ? 'dashboard' : 'dashboard-depositor',
            }"
          >
            <img
              v-if="
                currentPage === 'dashboard' ||
                currentPage === 'dashboard-depositor'
              "
              src="@/assets/news.svg"
              alt=""
            />
            <img v-else src="@/assets/news-not-active.svg" alt="" />
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
       <!-- <li class="item">
          <router-link class="navigation" :to="{ name: 'wallet' }">
            <img
              v-if="currentPage === 'wallet'"
              src="@/assets/wallet.svg"
              alt=""
            />
            <img v-else src="@/assets/wallet-not-active.svg" alt="" />
            <span class="name">Кошелек</span>
          </router-link>
        </li>-->
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { roleStorage } from "@/utils/localStorage";

const route = useRoute();

const role = ref(roleStorage.get());

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
  z-index: 1000;
}
.bar-list {
  display: flex;
  gap: 16px;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0em;
  margin: 0em;
  width: 100%;
  margin: 0 auto;
  padding: 30px 32px 20px 32px;
  z-index: 100;
}
.navigation {
  display: flex;
  flex-direction: column;
  position: relative;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  gap: 0.2em;
  align-items: center;
}

.name {
  font-size: 10px;
  color: rgba(48, 51, 55, 0.9);
  font-weight: 300;
}

.item {
  width: 53px;
  height: 53px;
}
.pull-img {
  width: 26px;
  height: 30px;
}
</style>
