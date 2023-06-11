<template>
  <div class="iphone-68">
    <img
      class="iphone-68-child"
      alt=""
      src="../../assets/images/login/group-36.svg"
    />

    <div class="headeer">
      <b class="page-title">Войти в CATOS</b>
      <div class="div">Рады снова вас видеть!</div>
    </div>
    <div class="catos-parent">
      <div class="catos">Первый раз в CATOS?</div>
      <div class="div1">Зарегистрируйтесь</div>
    </div>
    <div class="parent">
      <div class="div2" id="text2">По номеру телефона</div>
      <div class="wrapper">
        <div class="div3">По электронной почте</div>
      </div>
      <div class="frame-child"></div>
      <div class="frame-item"></div>
    </div>
    <div class="frame-parent">
      <label class="input-label_email input-label">Email</label>
      <input-data placeholder="Ваша почта" type="email"></input-data>
      <label class="input-label_password input-label">Пароль</label>
      <input-data placeholder="Введите пароль" type="password"></input-data>
    </div>
    <div class="iphone-68-item"></div>
    <div class="group-parent">
      <div class="rectangle-parent">
        <div class="group-child"></div>
        <b class="b">Вход</b>
      </div>
      <div class="div7">Забыли пароль?</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import inputData from "../fields/input-data.vue";
</script>

<style scoped lang="scss">
.iphone-68-child {
  position: absolute;
  right: 4.32%;
  bottom: 79.49%;
  left: 6.15%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.div,
.page-title {
  position: relative;
  letter-spacing: 1px;
  line-height: 1.75rem;
}
.div {
  font-size: var(--font-size-sm);
  letter-spacing: 0.01em;
  line-height: 0.63rem;
  font-weight: 500;
}
.headeer {
  position: absolute;
  top: 8em;
  left: 1.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  width: 87.69%;
  font-size: var(--font-size-6xl);
}
.catos,
.div1 {
  position: relative;
  letter-spacing: 1px;
  line-height: 130%;
}
.catos {
  font-weight: 500;
}
.div1 {
  text-decoration: underline;
  color: #4e95ff;
}
.catos-parent {
  position: absolute;
  top: 41.75rem;
  left: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  width: 87.69%;
}
.div2,
.div3 {
  line-height: 130%;
}
.div2 {
  position: absolute;
  top: 0;
  left: 55.67%;
  font-weight: 300;
  cursor: pointer;
}
.div3 {
  position: relative;
}
.wrapper {
  position: absolute;
  top: 0;
  left: 0.44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-darkslategray-100);
}
.frame-child,
.frame-item {
  position: absolute;
  box-sizing: border-box;
}
.frame-child {
  height: 7.69%;
  width: 94.33%;
  top: 88.46%;
  right: -0.33%;
  bottom: 3.85%;
  left: 6%;
  border-top: 2px solid #e6ddff;
}
.frame-item {
  top: 1.44rem;
  left: 0;
  border-top: 2px solid #fed26a;
  width: 9.63rem;
  height: 0.13rem;
}
.parent {
  position: absolute;
  height: 3.08%;
  width: 76.92%;
  top: 36.26%;
  right: 11.28%;
  bottom: 60.66%;
  left: 11.79%;
  color: var(--catos-gray);
}
.iconsmail {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.div4 {
  flex: 1;
  position: relative;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.iconsmail-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-9xs) 0;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
}
.fields-password-and-mail {
  position: absolute;
  height: 83.33%;
  width: 100%;
  top: 16.67%;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--br-base);
  border: 0.5px solid var(--field-stroke);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 var(--padding-xs);
  align-items: flex-start;
  justify-content: center;
}
.email {
  position: relative;
  line-height: 0.63rem;
}
.email-wrapper {
  position: absolute;
  top: 0;
  left: 0.38rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  padding: 0 var(--padding-3xs);
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-3xs);
  color: var(--color-darkslategray-100);
}
.fields-password-and-mail-parent,
.iconspassword {
  position: relative;
  width: 75vw;
  height: 3rem;
}
.iconspassword {
  width: 1.13rem;
  height: 1.13rem;
  overflow: hidden;
  flex-shrink: 0;
}
.fields-password-and-mail1,
.frame-parent {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.fields-password-and-mail1 {
  height: 83.33%;
  width: 100%;
  top: 16.67%;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: var(--br-base);
  border: 0.5px solid var(--field-stroke);
  box-sizing: border-box;
  padding: 0 var(--padding-xs);
  justify-content: center;
}
.frame-parent {
  height: 13.39%;
  width: 76.92%;
  top: 45.97%;
  right: 11.28%;
  bottom: 40.64%;
  left: 11.79%;
  justify-content: flex-start;
  gap: 1.06rem;
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray-300);
}
.iphone-68-item {
  height: 33.18%;
  width: 87.69%;
  top: 42.18%;
  right: 6.15%;
  bottom: 24.64%;
  left: 6.15%;
  border-radius: 15px;
  border: 0.5px solid var(--color-darkslategray-200);
  box-sizing: border-box;
  z-index: -10;
}
.b,
.group-child,
.iphone-68-item {
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
  background-color: #ffdb6d;
}
.b {
  top: 20%;
  left: 42.67%;
  letter-spacing: 1px;
  line-height: 1.75rem;
}
.rectangle-parent {
  position: relative;
  width: 75vw;
  height: 2.81rem;
}
.div7 {
  position: relative;
  font-size: var(--inter-small-12-size);
  text-decoration: underline;
  letter-spacing: 1px;
  color: #737373;
}
.group-parent {
  position: absolute;
  height: 9.12%;
  width: 76.92%;
  top: 62.44%;
  right: 11.28%;
  bottom: 28.44%;
  left: 11.79%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.38rem;
  font-size: var(--font-size-base);
}
.iphone-68 {
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 52.75rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--inter-small-12-size);
  color: var(--color-darkslategray-100);
  font-family: var(--inter-small-12);
}
.input-label {
  position: absolute;
  font-size: 0.625rem;
  color: var(--color-darkslategray-100);
  z-index: 100;
  left: 1em;
  top: -0.8em;
  background: #fff;
  width: 4em;
  text-align: center;
  &_password {
    width: 5em;
    top: 4.9em;
  }
}
</style>
