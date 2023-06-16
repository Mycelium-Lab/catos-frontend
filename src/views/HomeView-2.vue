<template>
  <div class="iphone-13-13-pro-68">
    <div class="iphone-13-13-pro-68-child"></div>
    <img class="iphone-13-13-pro-68-item" alt="" src="../assets/group-36.svg" />

    <b class="page-title">Hello!</b>
    <router-link
      class="rectangle-parent"
      id="groupContainer"
      :to="{ name: 'roles', state: { title: 'Войти' } }"
    >
      <div class="group-child"></div>
      <b class="b">Войти</b>
    </router-link>
    <div class="catos">Добро пожаловать в Catos!</div>
    <router-link
      class="div"
      :to="{ name: 'roles', state: { title: 'Регистрация' } }"
    >
      Зарегистрируйтесь</router-link
    >
    <div class="catos1">Первый раз в CATOS?</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
</script>

<style scoped>
.iphone-13-13-pro-68-child {
  position: absolute;
  top: -29px;
  left: -44px;
  background-color: #febc44;
  width: 478px;
  height: 873px;
}
.iphone-13-13-pro-68-item {
  position: absolute;
  bottom: 12em;
  left: -10em;
  overflow: hidden;
}
.page-title {
  top: 50vh;
  left: 32vw;
  font-size: 50px;
  line-height: 28px;
}
.b,
.group-child,
.page-title {
  position: absolute;
}
.group-child {
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 20px;
  background-color: #fff;
}
.b {
  top: 22%;
  left: 41%;
  line-height: 28px;
  color: var(--color-darkslategray-100);
}
.rectangle-parent {
  position: absolute;
  height: 5.92%;
  width: 76.92%;
  top: 65vh;
  right: 11.54%;
  bottom: 13.51%;
  left: 12vw;
  cursor: pointer;
  font-size: 18px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.catos,
.catos1,
.div {
  position: absolute;
  line-height: 28px;
}
.catos {
  top: 57vh;
  left: 99px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}
.catos1,
.div {
  top: 75vh;
}
.div {
  left: 207px;
  text-decoration: underline;
  color: #025de7;
}
.catos1 {
  left: 66px;
  font-weight: 500;
}
.iphone-13-13-pro-68 {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: left;
  font-size: 12px;
  color: #3b3b3b;
  font-family: Inter;
}
</style>
