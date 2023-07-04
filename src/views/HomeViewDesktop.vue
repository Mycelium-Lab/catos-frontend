<template>
  <div class="desktop-1">
    <img class="image-icon" alt="" src="@/assets/images/home/cover.svg" />

    <div class="desktop-1-child" />
    <div class="button-parent">
      <button class="button" @click="login">
        <b class="b">Войти</b>
      </button>
      <div class="catos-parent">
        <div class="catos">Первый раз в CATOS?</div>
        &nbsp;
        <div class="div" @click="register">Зарегистрируйтесь</div>
      </div>
    </div>
    <div class="page-title-parent">
      <b class="page-title_desktop">Hello!</b>
      <div class="catos1">Добро пожаловать в Catos!</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const login = () => {
  router.push({ name: "roles", state: { title: "Войти" } });
};
const register = () => {
  router.push({ name: "roles", state: { title: "Регистрация" } });
};
</script>

<style scoped v-else>
.image-icon {
  position: absolute;
  width: 100vw;

  z-index: 0;
  top: -18em;
}
.desktop-1-child {
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: 0px;
  width: 1440px;
  z-index: 1;
}
.b {
  position: absolute;
  height: 56%;
  width: 15.28%;
  top: 22%;
  left: 42.5%;
  line-height: 130%;
  display: flex;
  align-items: center;
}
.button {
  position: relative;
  border-radius: 20px;
  background-color: #fff;
  width: 360px;
  height: 50px;
  cursor: pointer;
  font-size: 1rem;
  border: none;
}
.catos {
  position: relative;
  line-height: 130%;
  font-weight: 500;
}
.div {
  position: relative;
  text-decoration: underline;
  line-height: 130%;
  color: #025de7;
  cursor: pointer;
}
.catos-parent {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  font-size: var(--font-size-base);
}
.button-parent {
  margin: 0 !important;
  position: absolute;
  top: calc(50% + 98.93px);
  left: calc(50% - 180.07px);
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 31px;
  z-index: 2;
}
.page-title_desktop {
  align-self: stretch;
  position: relative;
  line-height: 130%;
}
.catos1 {
  align-self: stretch;
  position: relative;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
}
.page-title-parent {
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 215.07px);
  left: calc(50% - 253.14px);
  width: 505px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;
  font-size: 178.46px;
}
.desktop-1 {
  position: relative;
  background-color: var(--catos-2);
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: 18px;
  color: var(--color-darkslategray);
  font-family: var(--font-inter);
  height: 100vh;
}
.hero-wrapper {
  width: 900px;
  height: 100vh;
}
</style>
