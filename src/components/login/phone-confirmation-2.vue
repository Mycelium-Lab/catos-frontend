<template>
  <div class="iphone-70" id="iPhone70">
    <div class="image-wrapp">
      <img class="iphone-70-child" alt="" src="./public/group-3611.svg" />
    </div>
    <div class="headeer1">
      <b class="page-title1">Войти в CATOS</b>
      <div class="div8">Рады снова вас видеть!</div>
    </div>
    <div class="catos-group">
      <div class="catos1">Первый раз в CATOS?</div>
      <router-link
        :to="{ name: 'roles', state: { title: 'Регистрация' } }"
        class="div9"
        >Зарегистрируйтесь</router-link
      >
    </div>
    <div class="fieldsregistration-options">
      <div class="fieldsregistration-options-child"></div>
      <div class="text-and-fill">
        <div class="div10">
          <span>Подтверждение номера </span>
          <span class="span">*</span>
        </div>
      </div>
      <div class="fields-password-and-mail2">
        <div class="iconsmobile-parent">
          <div class="div11">Введите код:</div>
        </div>
      </div>
      <div class="div12">
        <span>Код для входа отправлен на номер:</span>
        <span class="span1"> +7 (999) 215-43-26</span>
      </div>
      <div class="div13">
        <span>Примерное время </span>
        <span class="span2">ожидания</span>
        <span>:</span>
        <span class="span3"> </span>
        <span class="span1">1 минута</span>
      </div>
      <div class="frame-group">
        <div class="frame-container">
          <div class="iconssend-parent">
            <img class="iconssend" alt="" src="./public/iconssend.svg" />
            <div class="div14">Отправить код повторно:</div>
          </div>
          <div class="frame">
            <div class="div15">60 сек</div>
          </div>
        </div>
        <div class="iconssend-parent">
          <img class="iconsmobile" alt="" src="./public/iconsedit1.svg" />
          <div class="div14">Именить номер</div>
        </div>
      </div>
      <div class="inputfields">
        <input maxlength="1" class="component-4" />
        <input maxlength="1" class="component-4" />
        <input maxlength="1" class="component-4" />
        <input maxlength="1" class="component-4" />
        <input maxlength="1" class="component-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.iphone-70-child {
  position: absolute;
  top: -11em;
  overflow: hidden;
}
.div8,
.page-title1 {
  position: relative;
  font-size: 1.56em;
  letter-spacing: 1px;
  line-height: 1.12em;
}
.div8 {
  font-size: 0.88em;
  letter-spacing: 0.01em;
  line-height: 0.71em;
  font-weight: 500;
}
.headeer1 {
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
.catos1,
.div9 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 1px;
  line-height: 130%;
}
.catos1 {
  font-weight: 500;
}
.div9 {
  text-decoration: underline;
  color: #4e95ff;
}
.catos-group {
  position: absolute;
  top: 33.94em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75em;
  width: 100vw;
}
.fieldsregistration-options-child {
  position: absolute;
  width: 100%;
  top: calc(50% - 103.5px);
  right: 0;
  left: 0;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 0.5px solid rgba(46, 58, 89, 0.2);
  box-sizing: border-box;
  height: 13.31em;
}
.span {
  color: red;
}
.div10 {
  position: relative;
  font-size: 0.88em;
  line-height: 0.71em;
  font-weight: 500;
}
.text-and-fill {
  position: absolute;
  top: 0;
  left: 1.13em;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 0 0.38em;
  align-items: flex-start;
  justify-content: flex-start;
}
.iconsmobile {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div11 {
  flex: 1;
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.iconsmobile-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: 0.25em 0;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.fields-password-and-mail2 {
  position: absolute;
  width: calc(100% - 42px);
  top: calc(50% - 47.5px);
  right: 1.31em;
  left: 1.31em;
  border-radius: 16px;
  border: 0.5px solid #656060;
  box-sizing: border-box;
  height: 2.5em;
  overflow: hidden;
  display: none;
  flex-direction: column;
  padding: 0 0.75em;
  align-items: flex-start;
  justify-content: center;
  color: #2e3a59;
  font-family: Poppins;
}
.span1 {
  color: #3b3b3b;
}
.div12 {
  position: absolute;
  top: 11.42%;
  left: 6.14%;
  font-size: 0.63em;
  line-height: 1em;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.58);
}
.span2 {
  color: rgba(59, 59, 59, 0.68);
}
.span3 {
  color: #000;
}
.div13 {
  position: absolute;
  top: 17.81%;
  left: 6.14%;
  font-size: 0.63em;
  line-height: 120%;
  font-weight: 300;
  color: rgba(59, 59, 59, 0.58);
}
.iconssend {
  position: relative;
  border-radius: 2px;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
  flex-shrink: 0;
}
.div14 {
  position: relative;
  font-size: 0.75em;
  letter-spacing: 0.02em;
  line-height: 120%;
}
.iconssend-parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5em;
}
.div15 {
  position: relative;
  font-size: 0.88em;
  letter-spacing: 0.02em;
  line-height: 120%;
  background: linear-gradient(
    38.6deg,
    #2e2c2c,
    #4b4949 67.46%,
    #131313,
    rgba(0, 0, 0, 0.94),
    #434343
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.frame,
.frame-container {
  display: flex;
  align-items: center;
}
.frame {
  border-radius: 8px;
  background-color: rgba(253, 214, 116, 0.39);
  flex-direction: column;
  padding: 0.13em 0.69em;
  justify-content: center;
}
.frame-container {
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.frame-group {
  position: absolute;
  width: calc(100% - 42px);
  top: 8.69em;
  right: 1.31em;
  left: 1.31em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75em;
  font-family: Poppins;
}
.div17 {
  position: relative;
  font-size: 1.25em;
  line-height: 125%;
  font-weight: 500;
}
.component-4 {
  border-radius: 15px;
  border: 1px solid #70ca98;
  box-sizing: border-box;
  width: 2.7em;
  height: 2.7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}
.inputfields {
  position: relative;
  top: 4.19em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 0.31em;
  color: #2e3a59;
  width: 77vw;
  margin: 0 auto;
}
.fieldsregistration-options {
  position: absolute;
  top: 18.38em;
  left: 6vw;
  width: 87.7vw;
  height: 13.69em;
}
.iphone-70 {
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 52.75em;
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  color: #3b3b3b;
  font-family: Inter;
}
.image-wrapp {
  position: relative;
  width: 300px;
  margin: 0 auto;
}
@media (max-width: 375px) {
  .component-4 {
    width: 2.3em;
    height: 2.3em;
  }
}
</style>
