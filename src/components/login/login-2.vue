<template>
  <div class="iphone-68">
    <img class="iphone-68-child" alt="" src="./public/group-3611.svg" />

    <div class="headeer">
      <b class="page-title">Войти в CATOS</b>
      <div class="div">Рады снова вас видеть!</div>
    </div>
    <div class="catos-parent">
      <div class="catos">Первый раз в CATOS?</div>
      <router-link
        class="div1"
        :to="{ name: 'roles', state: { title: 'Регистрация' } }"
        >Зарегистрируйтесь</router-link
      >
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
      <div class="fields-password-and-mail-parent">
        <div class="fields-password-and-mail">
          <div class="iconsmail-parent">
            <img class="iconsmail" alt="" src="./public/iconsmail.svg" />

            <div class="div4">Ваша почта</div>
          </div>
        </div>
        <div class="email-wrapper">
          <div class="email">Email</div>
        </div>
      </div>
      <div class="fields-password-and-mail-parent">
        <div class="fields-password-and-mail1">
          <div class="iconsmail-parent">
            <img class="iconsmail" alt="" src="./public/iconslock.svg" />

            <div class="div4">Введите пароль</div>
            <!--<img
              class="iconspassword"
              alt=""
              src="./public/iconspassword.svg"
            />-->
          </div>
        </div>
        <div class="email-wrapper">
          <div class="email">Пароль</div>
        </div>
      </div>
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

<script setup lang="ts"></script>

<style scoped lang="scss">
.iphone-68-child {
  position: absolute;
  top: -11em;
  right: 4.32%;
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
  position: absolute;
  top: 12.94em;
  left: 6.31em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.81em;
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
  position: absolute;
  top: 41.75em;
  left: 7.5em;
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
  height: 33.18%;
  width: 87.69%;
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
</style>
