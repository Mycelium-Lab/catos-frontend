<template>
  <div class="iphone-68">
    <div class="image-wrapp">
      <img class="iphone-68-child" alt="" src="./public/group-3611.svg" />
    </div>

    <div class="headeer">
      <b class="page-title">Войти в CATOS</b>
      <div class="div">Рады снова вас видеть!</div>
    </div>
    <div
      class="catos-parent"
      :style="activeForm === 'phone' ? { top: '34em' } : ''"
    >
      <div class="catos">Первый раз в CATOS?</div>
      <router-link
        class="div1"
        :to="{ name: 'roles', state: { title: 'Регистрация' } }"
        >Зарегистрируйтесь</router-link
      >
    </div>

    <div class="method">
      <div
        class="method_email"
        @click="() => (activeForm = 'email')"
        :class="activeForm === 'email' ? 'method_email_active' : ''"
      >
        По электронной почте
      </div>
      <div
        class="method_phone"
        @click="() => (activeForm = 'phone')"
        :class="activeForm === 'phone' ? 'method_phone_active' : ''"
      >
        По номеру телефона
      </div>
    </div>
    <div class="frame-parent">
      <input-data
        v-if="activeForm === 'email'"
        placeholder="Ваша почта"
        :style="{ position: 'relative', zIndex: '1000', width: '100%' }"
      ></input-data>

      <input-data
        v-if="activeForm === 'email'"
        placeholder="Введите пароль"
        :style="{ position: 'relative', zIndex: '1000', width: '100%' }"
      ></input-data>
      <input-data
        v-if="activeForm === 'phone'"
        placeholder="Ваш номер телефона"
        :style="{ position: 'relative', zIndex: '1000', width: '100%' }"
      ></input-data>
    </div>
    <div
      class="iphone-68-item"
      :style="activeForm === 'phone' ? { height: '24.18%' } : ''"
    ></div>
    <div
      class="group-parent"
      :style="activeForm === 'phone' ? { top: '54%' } : ''"
    >
      <router-link
        :to="{
          name:
            activeForm === 'phone'
              ? 'phone-confirmation'
              : role === 'borrower'
              ? 'pulls-borrower'
              : role === 'depositor'
              ? 'pulls-depositor'
              : role === 'creditor'
              ? 'pulls'
              : role === 'collector'
              ? 'pulls-collector'
              : '',
        }"
        :style="{ textDecoration: 'none' }"
      >
        <catos-button
          :style="{ height: '45px', width: '70vw', marginRight: '0' }"
          >Вход</catos-button
        >
      </router-link>

      <div v-if="activeForm === 'email'" class="div7">Забыли пароль?</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import catosButton from "../ui-kit/buttons/catos-button.vue";
import inputData from "../fields/input-data.vue";
const activeForm = ref("email");
const role = computed(() => {
  localStorage.setItem("role", JSON.stringify(window.history.state.role));
  return window.history.state.role;
});
</script>

<style scoped lang="scss">
.iphone-68-child {
  position: absolute;
  top: -11em;
  overflow: hidden;
}
.div,
.page-title {
  position: relative;
  font-size: 1.56em;
  letter-spacing: 1px;
  line-height: 1.12em;
}
.div {
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 0.71em;
  font-weight: 500;
}
.headeer {
  position: relative;
  top: 12.94em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
  width: 300px;
  margin: 0 auto;
}
.catos,
.div1 {
  position: relative;
  font-size: 0.75em;
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
  position: relative;
  top: 38em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
}
.div2,
.div3 {
  font-size: 0.75em;
  line-height: 130%;
}
.div2 {
  position: absolute;
  top: 0;
  left: 55.67%;
  font-weight: 300;
  cursor: pointer;
  border-bottom: 2px solid gray;
}
.div3 {
  position: relative;
}
.wrapper {
  position: absolute;
  top: 0;
  left: 0.44em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #3b3b3b;
  border-bottom: 2px solid green;
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
  top: 1.44em;
  left: 0;
  border-top: 2px solid #fed26a;
  width: 9.63em;
  height: 0.13em;
}
.parent {
  position: absolute;
  height: 3.08%;
  width: 76.92%;
  top: 36.26%;
  right: 11.28%;
  bottom: 60.66%;
  left: 11.79%;
  color: #1f1f1f;
}
.iconsmail {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
}
.div4 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.iconsmail-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fields-password-and-mail {
  position: absolute;
  height: 83.33%;
  width: 100%;
  top: 16.67%;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 0.75em;
  align-items: flex-start;
  justify-content: center;
}
.email {
  position: relative;
  font-size: 0.63em;
  line-height: 1em;
}
.email-wrapper {
  position: absolute;
  top: 0;
  left: 0.38em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 0.63em;
  align-items: flex-start;
  justify-content: flex-start;
  color: #3b3b3b;
}
.fields-password-and-mail-parent,
.iconspassword {
  position: relative;
  width: 18.75em;
  height: 3em;
}
.iconspassword {
  width: 1.13em;
  height: 1.13em;
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
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  padding: 0 0.75em;
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
  gap: 1.06em;
  color: rgba(46, 58, 89, 0.36);
}
.iphone-68-item {
  height: 31.18%;
  width: 87.7vw;
  top: 42.18%;
  right: 6.15%;
  bottom: 24.64%;
  left: 6.15%;
  border-radius: 15px;
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
}
.b,
.group-child,
.iphone-68-item {
  position: absolute;
}
.group-child {
  height: 45px;
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
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 1.75em;
}
.rectangle-parent {
  position: relative;
  width: 18.75em;
  height: 2.81em;
}
.div7 {
  position: relative;
  font-size: 0.75em;
  text-decoration: underline;
  letter-spacing: 1px;
  color: #737373;
}
.group-parent {
  position: absolute;

  width: 76.92%;
  top: 60.44%;
  right: 11.28%;
  bottom: 28.44%;
  left: 11.79%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.38em;
}
.iphone-68 {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 52.75em;
  overflow: hidden;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.method {
  position: relative;
  top: 13.5em;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid rgba(230, 221, 255, 1);
  width: 300px;
  margin: 0 auto;
  padding-bottom: 0.3em;
  &_email {
    font-size: 12px;
    color: rgba(59, 59, 59, 1);
  }
  &_email::after {
    content: "";
    display: block;
    border-bottom: 2px solid rgba(230, 221, 255, 1);
    position: relative;
    top: 0.6em;
  }
  &_email_active::after {
    content: "";
    display: block;
    border-bottom: 2px solid rgba(254, 210, 106, 1);
    position: relative;
    top: 0.6em;
  }
  &_phone {
    font-size: 12px;
    color: rgba(59, 59, 59, 1);
  }
  &_phone::after {
    content: "";
    display: block;
    border-bottom: 2px solid rgba(230, 221, 255, 1);
    position: relative;
    top: 0.6em;
  }
  &_phone_active::after {
    content: "";
    display: block;
    border-bottom: 2px solid rgba(254, 210, 106, 1);
    position: relative;
    top: 0.6em;
  }
}
.image-wrapp {
  position: relative;
  width: 300px;
  margin: 0 auto;
}
</style>
